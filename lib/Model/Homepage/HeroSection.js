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



		btn1Text: {
			type: String,
		},

		btn2Text: {
			type: String,
		},

		btnColor: {
			type: String,
		},

		bgColor: {
			type: String,
		}
	},
	
);
