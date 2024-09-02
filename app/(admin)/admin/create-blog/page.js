'use client'


// import CreateBlog from "@/components/Admin/Blogs/CreateBlog";
import dynamic from "next/dynamic";

const CreateBlog = dynamic(
  () => {
    return import("@/components/Admin/Blogs/CreateBlog");
  },
  { ssr: false }
);

export default function CreateBlogPage() {
	return <CreateBlog />;
}
