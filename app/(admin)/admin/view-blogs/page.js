
import ViewBlogs from "@/components/Admin/Blogs/ViewBlogs";
import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";




export default async function ViewBlogsPage({ searchParams }) {
	const db = await connectDB();
	const blogsDataArr = await Blog.find({});

	return (
		<>
			<ViewBlogs blogsData={blogsDataArr} refresh={searchParams.refresh} />
		</>
	);
}
