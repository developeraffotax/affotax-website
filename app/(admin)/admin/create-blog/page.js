"use client";

import dynamic from "next/dynamic";

// import CreateBlog from "@/components/Admin/Blogs/CreateBlog";


const CreateBlog = dynamic(() => import("@/components/Admin/Blogs/CreateBlog"), {
  ssr: false
})


export default function CreateBlogPage() {

	

	

return (
  <CreateBlog />
)



	













}
