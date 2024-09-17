import mongoose from "mongoose";






const PricingPageSchema = new mongoose.Schema(

	{

		title: {
			type: String
		},


		first: {
            pkgName: String,
            pkgPrice: String,
            pkgTurnover: String,
            packageIncludes: [String],
            footerText: String
        },

        second: {
            pkgName: String,
            pkgPrice: String,
            pkgTurnover: String,
            packageIncludes: [String],
            footerText: String
        },


        third: {
            pkgName: String,
            pkgPrice: String,
            pkgTurnover: String,
            packageIncludes: [String],
            footerText: String
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
// console.log(mongoose.models)
const PricingPage = mongoose.models?.PricingPage || mongoose.model("PricingPage", PricingPageSchema);

export default PricingPage;











