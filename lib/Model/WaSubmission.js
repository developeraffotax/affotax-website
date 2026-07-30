import mongoose from "mongoose";

 

const waSubmissionSchema = new mongoose.Schema(
  {
    type: { type: String, enum: ["website",   ], required: true, default: "website" },
    phoneNumber: {type: String, required: true},
    firstMessage: String,
     
  },
  { timestamps: true }
);



// This creates a compound index on type and email
 waSubmissionSchema.index({ type: 1, phoneNumber: 1 });



const WaSubmission = mongoose.models?.WaSubmission || mongoose.model("WaSubmission", waSubmissionSchema);

export default WaSubmission;
