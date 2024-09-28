import dynamic from "next/dynamic";

const CreatePage = dynamic(
	() => {
		return import("@/components/Admin/ServicePages/CreatePage");
	},
	{ ssr: false }
);

export default function Create({ searchParams }) {
	console.log(
		">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" +
			searchParams.page
	);

	return <CreatePage pageSlug={searchParams.page || null} />;
}











db.servicepages.updateMany(
	{ "prices.price": { $regex: "^£" } },
	{
		$set: {
			"prices.$[elem].price": {
				$replaceOne: {
					input: "$price",
					find: "£",
					replacement: "",
				},
			},
		},
	},

	{
		arrayFilters: [{ "elem.price": { $regex: "^£" } }],
	}
);









// Query to update the price in prices remove the £ sign


// db.servicepages.updateMany(
//     { "prices.price": { $regex: "^£" } },
//     [
//         {
//             $set: {
//                 prices: {
//                     $map: {
//                         input: "$prices",
//                         as: "elem",
//                         in: {
//                             $mergeObjects: [
//                                 "$$elem",
//                                 {
//                                     price: {
//                                         $cond: {
//                                             if: { $regexMatch: { input: "$$elem.price", regex: "^£" } },
//                                             then: { $replaceOne: { input: "$$elem.price", find: "£", replacement: "" } },
//                                             else: "$$elem.price"
//                                         }
//                                     }
//                                 }
//                             ]
//                         }
//                     }
//                 }
//             }
//         }
//     ]
// );
