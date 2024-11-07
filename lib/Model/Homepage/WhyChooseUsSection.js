import mongoose from "mongoose";

export const WhyChooseUsSectionSchema = new mongoose.Schema({
	heading: String,

	arr: [
		{
			iconUrl: {
				type: String,
			},

			title: {
				type: String,
			},

			content: {
				type: String,
			},
		},
	],
});
