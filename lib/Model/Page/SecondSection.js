import mongoose from "mongoose";

export const SecondSchema = new mongoose.Schema({
	slug: {
		type: String,
	},

	title: {
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
