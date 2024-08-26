import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";
import { revalidatePath } from "next/cache";
import { permanentRedirect, redirect } from "next/navigation";
import { Button, Result } from 'antd';
import Link from "next/link";





export default async function DeleteBlog({ params }) {

	const db = await connectDB();
	const response = await Blog.deleteOne({ _id: params.slug });

	revalidatePath('/admin/view-blogs')
	redirect("/admin/view-blogs?refresh=true");
	


	return (
		<Result
		status="success"
		title="Blog has been deleted successfully!"
		
		extra={[
		  
			<Link href='/admin/view-blogs?refresh=true'><Button type="primary"  >Go Back</Button></Link>
		  
		  
		]}
	  />
	)
}
