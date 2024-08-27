import EditBlog from "@/components/Admin/Blogs/EditBlog";
import { connectDB } from "@/lib/connectDB"
import Blog from "@/lib/Model/Blog"


export default async function  EditBlogPage({params}) {

    
    const db = await connectDB();
    
    
    const oldDoc = await Blog.findOne({_id : params.slug});
    
    
    const plainOldDoc = {
        _id: oldDoc._id,
        title: oldDoc.title,
        description: oldDoc.description,
        imageUrl: oldDoc.imageUrl,
        metaTitle: oldDoc.metaTitle,
        metaDescription: oldDoc.metaDescription,
        content: oldDoc.content,
        keywords: oldDoc.keywords


    }
              

    return (
        <>
            <EditBlog id={plainOldDoc._id} oldTitle={plainOldDoc.title} oldDescription={plainOldDoc.description} oldImgUrl={plainOldDoc.imageUrl} oldMetaTitle={plainOldDoc.metaTitle} oldMetaDescription={plainOldDoc.metaDescription} oldValue={plainOldDoc.content} oldKeywords={plainOldDoc.keywords} />
        </>
    )
}