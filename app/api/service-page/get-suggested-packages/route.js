 import { connectDB } from "@/lib/connectDB";
 import ServicePage from "@/lib/Model/ServicePage/ServicePage";

export async function POST(req) {
  await connectDB();

  try {
    

    const { suggestions } = await req.json();

    if (!suggestions?.length) {
      return Response.json([], { status: 200 });
    }

    // ✅ Get unique service ids
    const serviceIds = [
      ...new Set(suggestions.map(s => s.service))
    ];

    // ✅ Fetch services with prices
    const services = await ServicePage.find({
      _id: { $in: serviceIds }
    }).lean();

    let result = [];

    suggestions.forEach(pkg => {
      const service = services.find(
        s => s._id.toString() === pkg.service
      );

      if (!service) return;

      const price = service.prices.find(
        p => p._id.toString() === pkg.priceId
      );

      if (!price) return;

      result.push({
        ...price,
        pageTitle: service.title,
        serviceId: service._id
      });
    });

    return Response.json(result, { status: 200 });

  } catch (error) {
    console.error("Get Suggested Error:", error);

    return Response.json(
      { message: "Failed to fetch suggested packages" },
      { status: 500 }
    );
  }
}