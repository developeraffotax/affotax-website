import mongoose from "mongoose";

export const FaqSectionSchema = new mongoose.Schema({
	slug: {
		type: String,
	},
	question: {
		type: String,
	},

	answer: {
		type: String,
	},
});
