//import EditBlog from "@/components/Admin/Blogs/EditBlog";
import { connectDB } from "@/lib/connectDB"
import dynamicCmp from "next/dynamic";
import Order from "@/lib/Model/Order";




const OrderCmp = dynamicCmp(
  () => {
    return import("@/components/Admin/Orders/Order");
  },
  { ssr: false }
);

export const dynamic = "force-dynamic";


export default async function  OrderPage({params}) {

    
    const db = await connectDB();
    
    
    const order = await Order.findOne({_id : params.slug});
    
   
        
              

    return (
        <>
            <OrderCmp orderData={JSON.stringify(order) } />
        </>
    )
}