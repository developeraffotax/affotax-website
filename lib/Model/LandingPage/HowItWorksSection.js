import mongoose from "mongoose";

export const HowItWorksSectionSchema = new mongoose.Schema(
	{


		heading: String,

		arr: [
			{
				iconUrl: {
					type: String,
				},
		
				title: {
					type: String,
				},
		
				content: {
					type: String,
				},
			}
		],

		slug: {
			type: String
		},
		


	},
	
);
