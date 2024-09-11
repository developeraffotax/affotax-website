import mongoose from "mongoose";
import { pricingSectionSchema } from "./pricingSectionSchema";
import { faqSectionSchema } from "./faqSectionSchema";
import { whyChooseSectionSchema } from "./whyChooseSectionSchema";


const ServicePageSchema = new mongoose.Schema({
	metaTitle: {
		type: String,
	},
	metaDescription: {
		type: String,
	},

	keywords: {
		type: [String],
	},

	link: {
		type: String,
	},


	title: {
		type: String,
	},
	//html
	content: {
		type: String,
	},

	

	prices: {                                          //Prices Section
		type: [pricingSectionSchema],
	},

	benefitsTitle: {                                     //Why Choose Section
		type: String
	},

	benefits: [whyChooseSectionSchema],                                  //Why Choose Section

	faqs: {                                      //Faq Section
		type: [faqSectionSchema],
	},
});
// console.log(mongoose.models)
const ServicePage = mongoose.models?.ServicePage || mongoose.model("ServicePage", ServicePageSchema);

export default ServicePage;
