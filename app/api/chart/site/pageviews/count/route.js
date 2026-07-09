// app/api/chart/pageviews/count/route.js
import { connectDB } from "@/lib/connectDB";
import Pageview from "@/lib/Model/PageView";
 
import dayjs from "dayjs";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const start = searchParams.get("start");
    const end = searchParams.get("end");

    let startDate = start ? dayjs(start).startOf("day") : dayjs().startOf("year");
    let endDate = end ? dayjs(end).endOf("day") : dayjs();

    const filter = {
      createdAt: {
        $gte: startDate.toDate(),
        $lte: endDate.toDate(),
      },
    };

    // 🔹 Decide interval dynamically
    const diffDays = endDate.diff(startDate, "day");
    const interval = diffDays > 31 ? "monthly" : "daily";

    // 🔹 Grouping based on interval
    const groupId =
      interval === "monthly"
        ? { $dateToString: { format: "%Y-%m", date: "$createdAt" } }
        : { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } };

    const aggregated = await Pageview.aggregate([
      { $match: filter },
      {
        $group: {
          _id: groupId,
          views: { $sum: 1 },
          uniqueVisitors: { $addToSet: "$visitorId" },
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
      aggregated.map((a) => [
        a._id,
        { views: a.views, uniqueVisitors: a.uniqueVisitors.length },
      ])
    );

    const viewsSeries = expectedCategories.map((c) => (map[c] ? map[c].views : 0));
    const uniqueVisitorsSeries = expectedCategories.map((c) =>
      map[c] ? map[c].uniqueVisitors : 0
    );

    const formattedCategories =
      interval === "monthly"
        ? expectedCategories.map((c) => dayjs(c).format("MMM YYYY"))
        : expectedCategories.map((c) => dayjs(c).format("DD MMM YYYY"));

    return new Response(
      JSON.stringify({
        message: "Chart data fetched",
        interval,
        categories: formattedCategories,
        views: viewsSeries,
        uniqueVisitors: uniqueVisitorsSeries,
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