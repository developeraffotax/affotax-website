// models/PageView.js
import mongoose from "mongoose";

const pageViewSchema = new mongoose.Schema(
  {
    path: { type: String, required: true },
    visitorId: { type: String, required: true }, // cookie-based, not PII
    ip: String, // optional, for rough geo/dedup
  },
  { timestamps: true }
);

pageViewSchema.index({ path: 1, createdAt: -1 });

export default mongoose.models.PageView ||
  mongoose.model("PageView", pageViewSchema);