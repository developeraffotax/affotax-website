import mongoose from "mongoose";
import {HeroSchema} from "./HeroSection";
import { SecondSchema } from "./SecondSection";
import { ThirdSchema } from "./ThirdSection";
import { FourthSchema } from "./FourthSection";
import { FifthSchema } from "./FifthSection";

const PageSchema = new mongoose.Schema(
	{

		title: {
			type: String
		},

		slug: {
			type: String
		},

        HeroSection: {
			type: HeroSchema,
		},

		SecondSection: {
			type: SecondSchema,
		},

        ThirdSection: {
			type: ThirdSchema,
		},

		FourthSection: {
			type: FourthSchema,
		},

		FifthSection: {
			type: FifthSchema,
		},




		metaTitle: {
			type: String,
		},
		metaDescription: {
			type: String,
		},

		keywords: {
			type: [String],
		},

        

		
	},
	{
		timestamps: true,
	}
);
// console.log(mongoose.models)
const Page = mongoose.models?.Page || mongoose.model("Page", PageSchema);

export default Page;
