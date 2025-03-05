//import EditBlog from "@/components/Admin/Blogs/EditBlog";
import { connectDB } from "@/lib/connectDB"
import Blog from "@/lib/Model/Blog"
import dynamic from "next/dynamic";
import { format } from 'date-fns';
import dayjs from "dayjs";
import Order from "@/lib/Model/Order";




const OrderCmp = dynamic(
  () => {
    return import("@/components/Admin/Orders/Order");
  },
  { ssr: false }
);



export default async function  OrderPage({params}) {

    
    const db = await connectDB();
    
    
    const order = await Order.findOne({_id : params.slug});
    
   
        
              

    return (
        <>
            <OrderCmp orderData={JSON.stringify(order) } />
        </>
    )
}