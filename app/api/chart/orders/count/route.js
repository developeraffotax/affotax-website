import { connectDB } from "@/lib/connectDB";
import Order from "@/lib/Model/Order";
import dayjs from "dayjs";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    const filter = { payment_status: "completed" };
    let startDate = start ? dayjs(start).startOf("day") : dayjs().startOf("year");
    let endDate = end ? dayjs(end).endOf("day") : dayjs();

    filter.createdAt = {
      $gte: startDate.toDate(),
      $lte: endDate.toDate(),
    };

    // 🔹 Decide interval dynamically
    const diffDays = endDate.diff(startDate, "day");
    const interval = diffDays > 31 ? "monthly" : "daily";

    // 🔹 Grouping based on interval
    const groupId =
      interval === "monthly"
        ? { $dateToString: { format: "%Y-%m", date: "$createdAt" } }
        : { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } };

    const aggregated = await Order.aggregate([
      { $match: filter },
      {
        $group: {
          _id: groupId,
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // 🔹 Build expected categories
    let expectedCategories = [];
    if (interval === "monthly") {
      for (
        let d = startDate.startOf("month");
        d.isBefore(endDate) || d.isSame(endDate, "month");
        d = d.add(1, "month")
      ) {
        expectedCategories.push(d.format("YYYY-MM"));
      }
    } else {
      for (
        let d = startDate.startOf("day");
        d.isBefore(endDate) || d.isSame(endDate, "day");
        d = d.add(1, "day")
      ) {
        expectedCategories.push(d.format("YYYY-MM-DD"));
      }
    }

    // 🔹 Zero-fill using expectedCategories
    const map = Object.fromEntries(
      aggregated.map((a) => [a._id, { count: a.count }])
    );

    const countSeries = expectedCategories.map((c) =>
      map[c] ? map[c].count : 0
    );


 const formattedCategories =
          interval === "monthly"
            ? expectedCategories.map((c) => dayjs(c).format("MMM YYYY")) // e.g. Jan 2025
            : expectedCategories.map((c) => dayjs(c).format("DD MMM YYYY")); // e.g. 01 Jan 2025
    


    return new Response(
      JSON.stringify({
        message: "Chart data fetched",
        interval, // tell frontend what was used
        categories: formattedCategories,
        count: countSeries,

        
         
      
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
