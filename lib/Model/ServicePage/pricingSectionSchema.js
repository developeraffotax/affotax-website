import mongoose from "mongoose";

export const pricingSectionSchema = new mongoose.Schema({
	// link: {
	// 	type: String,
	// },


	// heading: {
	// 	type: String,
	// },

	priceTitle: {
		type: String,
	},

    priceContent: {
		type: String,
	},

    price: {
		type: String,
	},

    packageIncludes: [String]
});
