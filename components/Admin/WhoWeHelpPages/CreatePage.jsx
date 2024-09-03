"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select} from "antd";
import TextArea from "antd/es/input/TextArea";

import { createNewPage, } from "@/actions/whoWeHelpPage";



export default function CreatePage() {
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [title, setTitle] = useState("");

	const [metaTitle, setMetaTitle] = useState("");
	const [metaDescription, setMetaDescription] = useState("");
	const [keywords, setKeywords] = useState([]);

	const [slug, setSlug] = useState("");
	const [url, setUrl] = useState("");

	useEffect(() => {
		setUrl(window?.location?.origin + "/");
	}, []);

	//Form Submit Handler
	const submitHandler = async () => {
		setIsError(false);

		const formData = new FormData();

		formData.append("title", title);

		formData.append("metaTitle", metaTitle);
		formData.append("metaDescription", metaDescription);
		formData.append("keywords", keywords);

		formData.append("slug", slug);

		const res = await createNewPage(formData);
		localStorage?.setItem('page-url', url)
		console.log(res);

		if (res.success) {
			setUploadSuccess(res.success);

			setTitle("");
			
			setMetaTitle("");
			setMetaDescription();
			setKeywords([]);

			

	
		} else {
			setIsError(true);
		}
	};

	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
				<Input className="hover:cursor-pointer  active:scale-[.99]" placeholder="The Url of the current Page" variant="filled" value={url} onClick={(e) => { 
						e.target.select();
					 	document?.execCommand("copy");
						e.target.blur();
						message.success(`Url Copied!`);
						 }} />

				<div className="w-full flex gap-8 justify-center items-start ">
					<div className="w-full flex flex-col gap-2 ">
						<label>Title of the Page</label>
						<Input className=" " placeholder="Title of the Page" value={title} onChange={(e) => { setTitle(e.target.value); const slug = e.target.value .toLocaleLowerCase() .trim() .replaceAll(" ", "-") .replace(/[^\w\-]/g, ""); setSlug(slug); const url = window.location.origin + "/" + slug; setUrl(url); }} />
					</div>

					<div className="w-full flex flex-col  gap-2">
						<label>Meta Title</label>
						<Input placeholder="Meta title for the page" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />

						<label>Meta Description</label>
						<TextArea rows={4} placeholder="Write a short meta description here!" maxLength={800} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />

						<label>Keywords</label>
						<Select mode="tags" style={{ width: "100%" }} placeholder="Keywords" onChange={(value) => { console.log(value); setKeywords(value); }} value={keywords} />
					</div>
				</div>

				<div className="w-full flex flex-col  gap-2">
					<Button className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" > {" "} Add New Page{" "} </Button>
				</div>

				<div className="w-full flex justify-start mt-16"></div>

				{uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to add Hero Section!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}


