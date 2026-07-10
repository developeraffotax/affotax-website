

// app/api/log-view/route.js
import { connectDB } from "@/lib/connectDB";
import Pageview from "@/lib/Model/PageView";
import { nanoid } from "nanoid";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { path } = await req.json();
    
    // Don't log admin or api paths just in case
    if (path.startsWith("/admin") || path.startsWith("/api")) {
      return Response.json({ ok: true });
    }

    const cookieStore = await cookies();
    let visitorId = cookieStore.get("visitor_id")?.value;

    if (!visitorId) {
      visitorId = nanoid();
      cookieStore.set("visitor_id", visitorId, {
        maxAge: 60 * 60 * 24 * 365, // 1 year
        httpOnly: true,
        path: "/",
      });
    }

    await connectDB();
    await Pageview.create({ path, visitorId });

    return Response.json({ ok: true });
  } catch (error) {
    return Response.json({ ok: false, error: error.message }, { status: 500 });
  }
}

 