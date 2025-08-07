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

		html: {
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
