

//content-with-image

import { connectDB } from "@/lib/connectDB";
import LandingPage from "@/lib/Model/LandingPage/LandingPage";
 











export const revalidate = 0;






export async function GET(request) {

  

    
  const db = await connectDB();
    const pages = await LandingPage.find().lean();



  
    return new Response(JSON.stringify(pages), {
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




