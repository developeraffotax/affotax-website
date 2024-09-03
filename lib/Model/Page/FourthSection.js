import mongoose from "mongoose";

export const WhyChooseUsSectionSchema = new mongoose.Schema({

	heading: {
		type: String
	},

	shortDescription: {
		type: String
	},


	arr: {
		type: [{
			title: String,
			content: String,
			imageUrl: String
		}]
	},


	slug: {
		type: String,
	},

	
});
