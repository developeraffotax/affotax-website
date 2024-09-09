import mongoose from "mongoose";

export const faqSectionSchema = new mongoose.Schema({
	link: {
		type: String,
	},
	question: {
		type: String,
	},

	answer: {
		type: String,
	},
});
