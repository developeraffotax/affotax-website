// app/api/log-view/route.js
import { connectDB } from "@/lib/connectDB";
import PageView from "@/lib/Model/PageView";
import { nanoid } from "nanoid";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { path, source = "direct" } = await req.json();

    if (path?.startsWith("/admin") || path?.startsWith("/api")) {
      return Response.json({ ok: true });
    }

    const cookieStore = await cookies();
    let visitorId = cookieStore.get("visitor_id")?.value;

    if (!visitorId) {
      visitorId = nanoid();
      cookieStore.set("visitor_id", visitorId, {
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: true,
        path: "/",
      });
    }

    await connectDB();
    await PageView.create({ path, visitorId, source });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}