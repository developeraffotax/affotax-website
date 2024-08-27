import mongoose from "mongoose";
import {HeroSchema} from "./HeroSection";

const PageSchema = new mongoose.Schema(
	{

		slug: {
			type: String
		},

        HeroSection: {
			type: HeroSchema,
		},

		SecondSection: {
			type: String,
		},

        ThirdSection: {
			type: String,
		},

		FourthSection: {
			type: String,
		},

		FifthSection: {
			type: String,
		},

        

		
	},
	{
		timestamps: true,
	}
);
// console.log(mongoose.models)
const Page = mongoose.models?.Page || mongoose.model("Page", PageSchema);

export default Page;
