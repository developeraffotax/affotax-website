// app/api/log-view/route.js

import { connectDB } from "@/lib/connectDB";
import Pageview from "@/lib/Model/PageView";

 

export async function POST(req) {
  const { path, visitorId } = await req.json();
  await connectDB();
  await Pageview.create({ path, visitorId });
  return Response.json({ ok: true });
}