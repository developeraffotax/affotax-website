import mongoose from "mongoose";

export const whyChooseSectionSchema = new mongoose.Schema({
	link: {
		type: String,
	},
	heading: {
		type: String,
	},

	paragraph: {
		type: String,
	},
});
