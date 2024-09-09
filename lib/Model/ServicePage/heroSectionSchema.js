import mongoose from "mongoose";

export const heroSectionSchema = new mongoose.Schema({
	slug: {
		type: String,
	},

	title: {
		type: String,
	},
	//html
	content: {
		type: String,
	},
});
