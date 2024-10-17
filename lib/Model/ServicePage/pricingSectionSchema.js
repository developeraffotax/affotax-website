import mongoose from "mongoose";

export const pricingSectionSchema = new mongoose.Schema({

	priceTitle: {
		type: String,
	},

	priceContent: {
		type: String,
	},

	price: {
		type: String,
	},

	packageIncludes: [String],

	addOns: [{ priceTitle: String, price: String, isChecked: {
		type: Boolean,
		default: false,
	} }],
});
