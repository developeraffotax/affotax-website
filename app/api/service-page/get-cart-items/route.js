import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";

export async function POST(req) {
  await connectDB();

  const { ids } = await req.json();

  if (!ids || ids.length === 0) {
    return Response.json([]);
  }

  // ✅ Find only services that contain matching price IDs
  const pages = await ServicePage.find({
    "prices._id": { $in: ids },
  }).lean();

  // ✅ Filter only required prices
  const filtered = [];

//   pages.forEach((service) => {
//     service.prices.forEach((price) => {
//       if (ids.includes(price._id.toString())) {
//         filtered.push({
//           ...price.toObject(),
//           pageTitle: service.title,
//         });
//       }
//     });
//   });

  return Response.json(pages);
}