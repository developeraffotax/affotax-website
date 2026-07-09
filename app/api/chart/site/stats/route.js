// app/api/chart/site/stats/route.js
export const runtime = "nodejs";

 
import { connectDB } from "@/lib/connectDB";
import PageView from "@/lib/Model/PageView";
import QuoteSubmission from "@/lib/Model/QuoteSubmission";
import { NextResponse } from "next/server";


export const dynamic = "force-dynamic";


function percentChange(current, previous) {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Number((((current - previous) / previous) * 100).toFixed(1));
}

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const endDate = end ? new Date(end) : new Date();
  const startDate = start
    ? new Date(start)
    : new Date(new Date().setDate(endDate.getDate() - 29));

  const rangeMs = endDate - startDate;
  const prevEndDate = new Date(startDate.getTime() - 1);
  const prevStartDate = new Date(prevEndDate.getTime() - rangeMs);

  const [
    totalViews,
    prevTotalViews,
    uniqueVisitorsArr,
    prevUniqueVisitorsArr,
    totalQuotes,
    prevTotalQuotes,
  ] = await Promise.all([
    PageView.countDocuments({ createdAt: { $gte: startDate, $lte: endDate } }),
    PageView.countDocuments({ createdAt: { $gte: prevStartDate, $lte: prevEndDate } }),
    PageView.distinct("visitorId", { createdAt: { $gte: startDate, $lte: endDate } }),
    PageView.distinct("visitorId", { createdAt: { $gte: prevStartDate, $lte: prevEndDate } }),
    QuoteSubmission.countDocuments({ createdAt: { $gte: startDate, $lte: endDate } }),
    QuoteSubmission.countDocuments({ createdAt: { $gte: prevStartDate, $lte: prevEndDate } }),
  ]);

  return NextResponse.json({
    totalViews,
    viewsPercentChange: percentChange(totalViews, prevTotalViews),
    totalUniqueVisitors: uniqueVisitorsArr.length,
    uniqueVisitorsPercentChange: percentChange(uniqueVisitorsArr.length, prevUniqueVisitorsArr.length),
    totalQuotes,
    quotesPercentChange: percentChange(totalQuotes, prevTotalQuotes),
  });
}