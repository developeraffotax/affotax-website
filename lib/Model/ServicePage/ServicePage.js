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

	

	pricingSection: {
		type: [pricingSectionSchema],
	},

	whyChooseSection: {
		type: whyChooseSectionSchema,
	},

	faqSection: {
		type: [faqSectionSchema],
	},
});
// console.log(mongoose.models)
const ServicePage = mongoose.models?.ServicePage || mongoose.model("ServicePage", ServicePageSchema);

export default ServicePage;
