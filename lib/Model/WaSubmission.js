import mongoose from "mongoose";
import { TRAFFIC_SOURCE_ENUMS } from "../constants";

 

const waSubmissionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["website",   ], required: true, default: "website" },
    phoneNumber: {type: String, required: true},
    firstMessage: String,
    source: { type: String, default: "direct", enum: TRAFFIC_SOURCE_ENUMS, }, // ← new
    
     
  },
  { timestamps: true }
);



// This creates a compound index on type and email
 waSubmissionSchema.index({ type: 1, phoneNumber: 1 });
 
waSubmissionSchema.index({ createdAt: 1, source: 1 });



const WaSubmission = mongoose.models?.WaSubmission || mongoose.model("WaSubmission", waSubmissionSchema);

export default WaSubmission;
