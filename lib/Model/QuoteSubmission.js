import mongoose from "mongoose";

 import { TRAFFIC_SOURCE_ENUMS } from "@/lib/constants";
 

const quoteSubmissionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["contact_us", "instant_quote", "who_we_help_quote"], required: true },
    email: {type: String, required: true},
    name: String,
    phoneNumber: String,
    source: { type: String, default: "direct", enum: TRAFFIC_SOURCE_ENUMS, }, // ← new
    // businessType: String,
    // turnover: String,
    // service: String,
    // message: String,
  },
  { timestamps: true }
);



// This creates a compound index on type and email
quoteSubmissionSchema.index({ type: 1, email: 1 });
quoteSubmissionSchema.index({ createdAt: 1, source: 1 });


const QuoteSubmission = mongoose.models?.QuoteSubmission || mongoose.model("QuoteSubmission", quoteSubmissionSchema);

export default QuoteSubmission;
