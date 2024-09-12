// import { connectDB } from '@/lib/connectDB';
// import ServicePage from '@/lib/Model/ServicePage/ServicePage';





// const packages = {
// 	title: "Recommended Packages",
// 	prices: [
// 		{
// 			id: "pkg1",
// 			priceTitle: "Basic Package",
// 			priceContent: "Turnover < 25K",
// 			price: "£99",
// 			packageIncludes: [
// 				"Annual Accounts",
// 				"Companies House Submission",
// 				"Corporation Tax",
// 				"CT600 Submission with HMRC",
// 			],
// 		},
// 		{
// 			id: "pkg2",
// 			priceTitle: "Standard Package",
// 			priceContent: "Turnover < 50K",
// 			price: "£149",
// 			packageIncludes: [
// 				"Annual Accounts",
// 				"Companies House Submission",
// 				"Corporation Tax",
// 				"CT600 Submission with HMRC",
// 				"Tax consultation",
// 			],
// 		},

// 		{
// 			id: "pkg3",
// 			priceTitle: "Premium Package",
// 			priceContent: "Turnover < 100K",
// 			price: "£249",
// 			packageIncludes: [
// 				"Annual Accounts",
// 				"Companies House Submission",
// 				"Corporation Tax",
// 				"CT600 Submission with HMRC",
// 				"Tax consultation",
// 				"Director Payroll",
// 			],
// 		}
// 	]
// }




// export async function getDataArr() {
//     const getData = async () => {

//         const db = await connectDB();
//         const pages = await ServicePage.find({});
//         return pages;
    
//     }
    
//     const pages = await getData();
    
//     const mappedArr = pages.map((el) => {
    
//         return {
//             ...el,
//             id: el._id,
    
//         }
//     })
    
    
//     mappedArr.push(packages)
    
//     return mappedArr;
// }