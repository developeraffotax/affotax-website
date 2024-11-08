import mongoose from "mongoose";

export const LinksSectionSchema = new mongoose.Schema({
	heading: String,
	arr: [
		{
			title: String,
			path: String,
		},
	],
});
