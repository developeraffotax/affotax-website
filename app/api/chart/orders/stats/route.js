// app/api/orders/total/route.js
import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";
import Customer from "@/lib/Model/Customer"; // 🔹 import customer model
import dayjs from "dayjs";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    const filter = { payment_status: "completed" };

    // Current range
    let startDate = start ? dayjs(start).startOf("day") : dayjs().startOf("year");
    let endDate = end ? dayjs(end).endOf("day") : dayjs();

    filter.createdAt = {
      $gte: startDate.toDate(),
      $lte: endDate.toDate(),
    };

    // --- Current totals ---
    const totalOrders = await Order.countDocuments(filter);

    const salesAgg = await Order.aggregate([
      { $match: filter },
      { $group: { _id: null, total: { $sum: { $toDouble: "$totalPrice" } } } },
    ]);
    const totalSales = salesAgg[0]?.total || 0;

    // 🔹 Current customers
    const customerFilter = {
      createdAt: {
        $gte: startDate.toDate(),
        $lte: endDate.toDate(),
      },
    };
    const totalCustomers = await Customer.countDocuments(customerFilter);

    // --- Previous period calculation ---
    let prevStartDate, prevEndDate;
    if (start && end) {
      const rangeMs = endDate.diff(startDate, "millisecond") + 1; // exact duration
      prevEndDate = startDate.subtract(1, "day").endOf("day");
      prevStartDate = prevEndDate
        .subtract(rangeMs - 1, "millisecond")
        .startOf("day");
    } else {
      prevStartDate = startDate.subtract(1, "year");
      prevEndDate = endDate.subtract(1, "year");
    }

    const prevFilter = {
      payment_status: "completed",
      createdAt: {
        $gte: prevStartDate.toDate(),
        $lte: prevEndDate.toDate(),
      },
    };

    const prevOrders = await Order.countDocuments(prevFilter);

    const prevSalesAgg = await Order.aggregate([
      { $match: prevFilter },
      { $group: { _id: null, total: { $sum: { $toDouble: "$totalPrice" } } } },
    ]);
    const prevSales = prevSalesAgg[0]?.total || 0;

    // 🔹 Previous customers
    const prevCustomerFilter = {
      createdAt: {
        $gte: prevStartDate.toDate(),
        $lte: prevEndDate.toDate(),
      },
    };
    const prevCustomers = await Customer.countDocuments(prevCustomerFilter);

    // --- Percentage change ---
    const calcPercentChange = (current, prev) => {
      if (prev > 0) return ((current - prev) / prev) * 100;
      if (current > 0) return 100;
      return 0;
    };

    const ordersPercentChange = calcPercentChange(totalOrders, prevOrders);
    const salesPercentChange = calcPercentChange(totalSales, prevSales);
    const customersPercentChange = calcPercentChange(
      totalCustomers,
      prevCustomers
    );

    return new Response(
      JSON.stringify({
        message: "Totals fetched successfully",

        // Orders
        totalOrders,
        prevOrders,
        ordersPercentChange: Number(ordersPercentChange.toFixed(2)),

        // Sales
        totalSales: Number(totalSales.toFixed(2)),
        prevSales,
        salesPercentChange: Number(salesPercentChange.toFixed(2)),

        // Customers
        totalCustomers,
        prevCustomers,
        customersPercentChange: Number(customersPercentChange.toFixed(2)),
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
