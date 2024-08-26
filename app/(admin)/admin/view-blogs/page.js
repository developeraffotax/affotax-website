
import ViewBlogs from '@/components/Admin/Blogs/ViewBlogs';
import { getBlogs, getData } from '@/lib/blogs';
import { connectDB } from '@/lib/connectDB';
import Blog from '@/lib/Model/Blog';
import { revalidatePath } from 'next/cache';






 export const dynamic = 'force-dynamic'

export default async function  ViewBlogsPage({searchParams}) {

    
   

    const db = await connectDB();
    const blogsDataArr = await Blog.find({});
    

   
    

    return (
        <>
        <ViewBlogs blogsData={blogsDataArr} refresh={searchParams.refresh}/>
        </>
    )
}