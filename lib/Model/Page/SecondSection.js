import mongoose from "mongoose";

export const ContentWithImageSectionSchema = new mongoose.Schema({
	slug: {
		type: String,
	},

	heading: {
		type: String,
	},

	html: {
		type: String,
	},

	imageUrl: {
		type: String,
	},

	imagePosition: {
		type: String,
	},
});
