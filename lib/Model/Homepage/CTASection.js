import mongoose from "mongoose";

export const CTASectionSchema = new mongoose.Schema({
	heading: String,
	html: String,
});