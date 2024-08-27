import mongoose from "mongoose";

export const HeroSchema = new mongoose.Schema(
	{
		heading: {
			type: String,
		},

		slug: {
			type: String,
		},

		imageUrl: {
			type: String,
		},

		description1: {
			type: String,
		},

		description2: {
			type: String,
		},

		

		metaTitle: {
			type: String,
		},
		metaDescription: {
			type: String,
		},

		keywords: {
			type: [String],
		},



		btnText: {
			type: String,
		},

		btnLink: {
			type: String,
		},
	},
	
);
