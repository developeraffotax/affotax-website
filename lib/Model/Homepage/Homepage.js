import mongoose from "mongoose";
import {HeroSchema} from "./HeroSection";
import { HowItWorksSectionSchema } from "./HowItWorksSection";
import { WhyChooseUsSectionSchema } from "./WhyChooseUsSection";
import { CTASectionSchema } from "./CTASection";
import { LinksSectionSchema } from "./LinksSection";

const HomepageSchema = new mongoose.Schema(
	{

        HeroSection: {
			type: HeroSchema,
		},

        HowItWorksSection: {
			type: HowItWorksSectionSchema,
		},

		WhyChooseUsSection: {
			type: WhyChooseUsSectionSchema,
		},

		CTASection: {
			type: CTASectionSchema,
		},

		LinksSection: {
			type: LinksSectionSchema,
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


		googleReviewsCount: {
			type: Number,
		},

		trustPilotCount: {
			type: Number,
		},


        

		
	},
	
);





const Homepage = mongoose.models?.Homepage || mongoose.model("Homepage", HomepageSchema);

export default Homepage;
