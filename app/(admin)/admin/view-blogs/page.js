
// import ViewBlogs from "@/components/Admin/Blogs/ViewBlogs";
import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";
import dynamic from "next/dynamic";




const ViewBlogs = dynamic(
    () => {
      return import("@/components/Admin/Blogs/ViewBlogs");
    },
    { ssr: false }
  );







export default async function ViewBlogsPage({ searchParams }) {
	const db = await connectDB();
	const blogsDataArr = await Blog.find({});

	return (
		<>
			<ViewBlogs blogsData={blogsDataArr || null } refresh={searchParams.refresh || null } />
		</>
	);
}
