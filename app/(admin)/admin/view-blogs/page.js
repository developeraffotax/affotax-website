
// import ViewBlogs from '@/components/Admin/Blogs/ViewBlogs';
import { getBlogs, getData } from '@/lib/blogs';
import { connectDB } from '@/lib/connectDB';
import Blog from '@/lib/Model/Blog';
import { revalidatePath } from 'next/cache';
import dynamic from 'next/dynamic';






//  export const dynamic = 'force-dynamic'


 const ViewBlogsComponent = dynamic(() => import('@/components/Admin/Blogs/ViewBlogs'), {
    ssr: false
 })

export default async function  ViewBlogsPage({searchParams}) {

    
   

    const db = await connectDB();
    const blogsDataArr = await Blog.find({});
    

   
    

    return (
        <>
        <ViewBlogsComponent blogsData={blogsDataArr} refresh={searchParams.refresh}/>
        </>
    )
}