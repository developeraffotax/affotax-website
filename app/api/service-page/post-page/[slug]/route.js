
import { connectDB } from "@/lib/connectDB";
import ServicePage from "@/lib/Model/ServicePage/ServicePage";







export async function DELETE(request, {params}) {

	try {

		console.log(params);
		
		const db = await connectDB();
		
        const res = await ServicePage.deleteOne({link: params.slug})

		console.log(res);

		return new Response(JSON.stringify(res), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});


	} catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message: 'Failed to delete Page'}), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});

    } 
}








export async function POST(request, {params}) {

	try {

		const servicePage = await request.json();
		const db = await connectDB();


		const page = await ServicePage.updateOne({link: params.slug}, {$set : servicePage})


		console.log(page)

		return new Response(JSON.stringify(page), {
			status: 201,
			headers: { "Content-Type": "application/json" },
		});
	} catch (error) {
        console.log(error)
        return new Response(JSON.stringify({message: 'Failed to add new Page'}), {
			status: 500,
			headers: { "Content-Type": "application/json" },
		});

    } 
}




