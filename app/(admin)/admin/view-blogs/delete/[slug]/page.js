import { connectDB } from "@/lib/connectDB";
import Blog from "@/lib/Model/Blog";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Button, Result } from "antd";
import Link from "next/link";
import { del } from "@vercel/blob";
import { v4 as uuidv4 } from 'uuid';




export default async function DeleteBlog({ params }) {
	try {

		const blogToDelete = await Blog.findOne({ _id: params.slug });

		//Delete the blob file from vercel blob store
		if (blogToDelete.imageUrl) {
			await del(blogToDelete.imageUrl);
		}

		const db = await connectDB();
		const response = await Blog.deleteOne({ _id: params.slug });

		

	} catch (error) {
		return (
			<Result status="success" title="Failed to delete the blog! Try again later" subTitle={error?.message || "Unknown Error Occured"} extra={[ <Link key={uuidv4()} href="/admin/view-blogs"> <Button type="primary">Go Back</Button> </Link>, ]} />
		);
	}

	revalidatePath('/blogs')
	redirect("/admin/view-blogs?refresh=true");
}
