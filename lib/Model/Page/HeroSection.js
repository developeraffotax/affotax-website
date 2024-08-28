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




		btnText: {
			type: String,
		},

		btnLink: {
			type: String,
		},
	},
	
);
