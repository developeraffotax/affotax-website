import mongoose from "mongoose";

export const OurServicesSectionSchema = new mongoose.Schema({

	heading: {
		type: String
	},

	shortDescription: {
		type: String
	},


	arr: {
		type: [{
			title: String,
			content: String
		}]
	},



	slug: {
		type: String,
	},

	
});
