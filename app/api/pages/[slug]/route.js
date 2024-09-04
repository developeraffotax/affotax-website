

//content-with-image

import { connectDB } from "@/lib/connectDB";
import Page from "@/lib/Model/Page/Page";

export async function GET(request, { params }) {

    

    const slug = params.slug
    console.log(slug)
  const db = await connectDB()
    const page = await Page.findOne({slug: slug});



  
    return new Response(JSON.stringify(page), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }






//   export async function POST(request) {


//    const res =  await request.json()


//     console.log(res)
//     // Fetch data from an external source or database
//     const data = {
//       message: 'Hello from the API!',
//       timestamp: new Date().toISOString(),
//     };
  
//     return new Response(JSON.stringify(data), {
//       status: 200,
//       headers: { 'Content-Type': 'application/json' },
//     });
//   }




