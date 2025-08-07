import mongoose from "mongoose";






export const PricingSectionSchema = new mongoose.Schema(

	{

		title: {
			type: String
		},  

        // slug: {
        //     type: String
        // },


		first: {
            pkgName: {
                type: String,
                default: "Default"
            },
            pkgPrice:  {
                type: String,
                default: "Default"
            },
            pkgTurnover:  {
                type: String,
                default: "Default"
            },
            packageIncludes: [String],
            footerText:  {
                type: String,
                default: "Default"
            },
        },

        second: {
            pkgName:  {
                type: String,
                default: "Default"
            },
            pkgPrice:  {
                type: String,
                default: "Default"
            },
            pkgTurnover:  {
                type: String,
                default: "Default"
            },
            packageIncludes: [String],
            footerText:  {
                type: String,
                default: "Default"
            },
        },


        third: {
            pkgName:  {
                type: String,
                default: "Default"
            },
            pkgPrice:  {
                type: String,
                default: "Default"
            },
            pkgTurnover:  {
                type: String,
                default: "Default"
            },
            packageIncludes: [String],
            footerText:  {
                type: String,
                default: "Default"
            },
        },

        finalArr: [String]











        // third: {
        //     pkgName: String,
        //     pkgPrice: String,
        //     pkgTurnover: String,
        //     packageIncludes: [String],
        //     footerText: String
            
        // }

		



		

        

		
	},
	
);
 










