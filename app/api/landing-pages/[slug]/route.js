

 

import { connectDB } from "@/lib/connectDB";
import LandingPage from "@/lib/Model/LandingPage/LandingPage";
 




export const revalidate = 0;


export async function GET(request, { params }) {

    

    const slug = params.slug
    console.log(slug)
  const db = await connectDB()
    const page = await LandingPage.findOne({slug: slug});



  
    return new Response(JSON.stringify(page), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
