// app/api/chart/site/stats/route.js
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

import { connectDB } from "@/lib/connectDB";
import PageView from "@/lib/Model/PageView";
import QuoteSubmission from "@/lib/Model/QuoteSubmission";
import WaSubmission from "@/lib/Model/WaSubmission";
import { NextResponse } from "next/server";

function percentChange(current, previous) {
  if (previous === 0) return current > 0 ? 100 : 0;
  return Number((((current - previous) / previous) * 100).toFixed(1));
}

// Count documents per source within a date range -> { facebook: 4, direct: 12, ... }
// $ifNull makes older documents (saved before `source` existed) count as "direct".
async function countBySource(Model, from, to) {
  const rows = await Model.aggregate([
    { $match: { createdAt: { $gte: from, $lte: to } } },
    { $group: { _id: { $ifNull: ["$source", "direct"] }, count: { $sum: 1 } } },
  ]);
  return Object.fromEntries(rows.map((r) => [r._id, r.count]));
}

// Unique visitors per source -> { facebook: 3, direct: 9, ... }
async function uniqueVisitorsBySource(from, to) {
  const rows = await PageView.aggregate([
    { $match: { createdAt: { $gte: from, $lte: to } } },
    {
      $group: {
        _id: { source: { $ifNull: ["$source", "direct"] }, visitorId: "$visitorId" },
      },
    },
    { $group: { _id: "$_id.source", count: { $sum: 1 } } },
  ]);
  return Object.fromEntries(rows.map((r) => [r._id, r.count]));
}

export async function GET(req) {
  await connectDB();
  const { searchParams } = new URL(req.url);
  const start = searchParams.get("start");
  const end = searchParams.get("end");

  const endDate = end ? new Date(end) : new Date();
  const startDate = start
    ? new Date(start)
    : new Date(endDate.getTime() - 29 * 24 * 60 * 60 * 1000);

  const rangeMs = endDate - startDate;
  const prevEndDate = new Date(startDate.getTime() - 1);
  const prevStartDate = new Date(prevEndDate.getTime() - rangeMs);

  const current = { $gte: startDate, $lte: endDate };
  const previous = { $gte: prevStartDate, $lte: prevEndDate };

  const [
    totalViews,
    prevTotalViews,
    uniqueVisitorsArr,
    prevUniqueVisitorsArr,
    totalQuotes,
    prevTotalQuotes,
    totalWaSubmissions,
    prevTotalWaSubmissions,
    viewsBySource,
    uniqueBySource,
    quotesBySource,
    waSubmissionsBySource,
  ] = await Promise.all([
    PageView.countDocuments({ createdAt: current }),
    PageView.countDocuments({ createdAt: previous }),
    PageView.distinct("visitorId", { createdAt: current }),
    PageView.distinct("visitorId", { createdAt: previous }),
    QuoteSubmission.countDocuments({ createdAt: current }),
    QuoteSubmission.countDocuments({ createdAt: previous }),
    WaSubmission.countDocuments({ createdAt: current }),
    WaSubmission.countDocuments({ createdAt: previous }),

    countBySource(PageView, startDate, endDate),
    uniqueVisitorsBySource(startDate, endDate),
    countBySource(QuoteSubmission, startDate, endDate),
    countBySource(WaSubmission, startDate, endDate),
  ]);

  return NextResponse.json({
    totalViews,
    viewsPercentChange: percentChange(totalViews, prevTotalViews),
    totalUniqueVisitors: uniqueVisitorsArr.length,
    uniqueVisitorsPercentChange: percentChange(
      uniqueVisitorsArr.length,
      prevUniqueVisitorsArr.length
    ),
    totalQuotes,
    quotesPercentChange: percentChange(totalQuotes, prevTotalQuotes),
    totalWaSubmissions,
    waSubmissionsPercentChange: percentChange(
      totalWaSubmissions,
      prevTotalWaSubmissions
    ),
    viewsBySource,
    uniqueBySource,
    quotesBySource,
    waSubmissionsBySource,
  });
}