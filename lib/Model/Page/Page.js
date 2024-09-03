import mongoose from "mongoose";
import {HeroSchema} from "./HeroSection";
import { ContentWithImageSectionSchema } from "./SecondSection";
import { OurServicesSectionSchema } from "./ThirdSection";
import {WhyChooseUsSectionSchema } from "./FourthSection";

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

		ContentWithImageSection: {
			type: [ContentWithImageSectionSchema],
		},

        OurServicesSection: {
			type: OurServicesSectionSchema,
		},

		WhyChooseUsSection: {
			type: WhyChooseUsSectionSchema,
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
