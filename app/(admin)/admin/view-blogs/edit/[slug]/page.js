import EditBlog from "@/components/Admin/Blogs/EditBlog";
import { connectDB } from "@/lib/connectDB"
import Blog from "@/lib/Model/Blog"


export default async function  EditBlogPage({params}) {

    
    const db = await connectDB();
    
    
    const oldDoc = await Blog.findOne({_id : params.slug});
    
    console.log(oldDoc)
              

    return (
        <>
            <EditBlog id={oldDoc._id} oldTitle={oldDoc.title} oldDescription={oldDoc.description} oldImgUrl={oldDoc.imageUrl} oldMetaTitle={oldDoc.metaTitle} oldMetaDescription={oldDoc.metaDescription} oldValue={oldDoc.content}/>
        </>
    )
}