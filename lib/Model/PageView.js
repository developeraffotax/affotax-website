// models/PageView.js
import mongoose from "mongoose";
import { TRAFFIC_SOURCE_ENUMS } from "@/lib/constants";

const pageViewSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    visitorId: { type: String, required: true }, // cookie-based, not PII
    ip: String, // optional, for rough geo/dedup
    source: { type: String, default: "direct", enum: TRAFFIC_SOURCE_ENUMS, }, // ← new
 
  },
  { timestamps: true }
);

pageViewSchema.index({ path: 1, createdAt: -1 });

pageViewSchema.index({ createdAt: 1, source: 1 });
 
export default mongoose.models.PageView ||
  mongoose.model("PageView", pageViewSchema);

 