import mongoose from "mongoose";

export const HeroSchema = new mongoose.Schema(
	{
		heading: {
			type: String,
		},

		html: {
			type: String,
		},

		imageUrl: {
			type: String,
		},



	},
	
);
