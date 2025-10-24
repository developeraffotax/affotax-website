import mongoose from "mongoose";
import {HeroSchema} from "./HeroSection";
import { ContentWithImageSectionSchema } from "./SecondSection";
import { OurServicesSectionSchema } from "./ThirdSection";
import {WhyChooseUsSectionSchema } from "./FourthSection";
import { PricingSectionSchema } from "./PricingSection";
import { HowItWorksSectionSchema } from "./HowItWorksSection";
import { FaqSectionSchema } from "./FaqSection";
 

const LandingPageSchema = new mongoose.Schema(
	{

		title: {
			type: String
		},

		slug: {
			type: String,
			required: true,
			unique: true, // ✅ Enforce uniqueness at the DB level
			trim: true,
			lowercase: true,
			},

        HeroSection: {
			type: HeroSchema,
		},


		PricingSection: {
			type: PricingSectionSchema
		},

		HowItWorksSection: {
			type: HowItWorksSectionSchema
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

		FaqSection: {                                       
			type: [FaqSectionSchema],
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
const LandingPage = mongoose.models?.LandingPage || mongoose.model("LandingPage", LandingPageSchema);

export default LandingPage;
