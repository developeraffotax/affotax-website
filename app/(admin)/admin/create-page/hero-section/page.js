"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined  } from "@ant-design/icons";


import { createHeroSection, UploadImage } from "@/actions/whoWeHelpPage";



export default function HeroSection() {

	

	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [heading, setHeading] = useState("");
    const [imageUrl, setImageUrl] = useState("");
	const [description1, setDescription1] = useState("");
	const [description2, setDescription2] = useState("");

	
	const [metaTitle, setMetaTitle] = useState("");
	const [metaDescription, setMetaDescription] = useState("");
	const [keywords, setKeywords] = useState([]);
	
	const [btnText, setBtnText] = useState("");
	const [btnLink, setBtnLink] = useState("");
	
	const [slug, setSlug] = useState("");
	const [url, setUrl] = useState('');
	

	useEffect(() => {
		setUrl(window?.location?.origin + '/blog/')
	  }, [])

	

    //Image Upload Handling Props
	const props = {
		name: "imgFile",
		customRequest: async (file) => {
			const form = new FormData();
			form.append("imgFile", file.file);
			const res = await UploadImage(form);

			setImageUrl(res.url);
			file.onSuccess();

			return;
		},

		multiple: false,

		onChange(info) {
			if (info.file.status === "done") {
				message.success(`${info.file.name} file uploaded successfully`);
			} else if (info.file.status === "error") {
				message.error(`${info.file.name} file upload failed.`);
			}
		},
	};


    //Form Submit Handler
	const submitHandler = async () => {
		//setUploadSuccess(false);
		setIsError(false);

		const formData = new FormData();

		formData.append("heading", heading);
		formData.append("imageUrl", imageUrl);
		formData.append("description1", description1);
		formData.append("description2", description2);

		formData.append("metaTitle", metaTitle);
		formData.append("metaDescription", metaDescription);
		formData.append("keywords", keywords);

		formData.append("btnText", btnText);
		formData.append("btnLink", btnLink);

		formData.append("slug", slug);

		const res = await createHeroSection(formData);

		console.log(res)

		if (res.success) {
			setUploadSuccess(res.success);

			setHeading("");
			setImageUrl("");
			setDescription1("");
			setDescription2("");

			setMetaTitle("");
			setMetaDescription();
			setKeywords([]);

			setBtnText("");
			setBtnLink("");
		} else {
			setIsError(true);
		}
	};




	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">


			<Input className="hover:cursor-pointer " placeholder="The Url of the current Page"  readOnly variant="filled" value={url} onClick={(e) => {
				const selection = e.target.select();

				

				document.execCommand('copy');

				e.target.blur()
				message.success(`Url Copied!`);
			}}/>
			

				<div className="w-full flex gap-8 justify-center items-start ">
					<div className="w-full flex flex-col gap-2 ">
						<label>Heading</label>
						<Input placeholder="Title of the Blog" value={heading} onChange={(e) => {
							setHeading(e.target.value);

							const slug = (e.target.value).toLocaleLowerCase().trim().replaceAll(" ", "-").replace(/[^\w\-]/g, '');
							setSlug(slug)

							const url = window.location.origin + '/' + slug;
							setUrl(url);
						}} />

						<label>Hero Image</label>
						<Upload {...props}> {" "} <Button icon={<UploadOutlined />}> Click to Upload </Button>{" "} </Upload>

						<label>Description 1</label>
						<TextArea rows={4} placeholder="Write a short description here!" maxLength={800} value={description1} onChange={(e) => setDescription1(e.target.value)} />

						<label>Description 2</label>
						<TextArea rows={4} placeholder="Write another short description here!" maxLength={800} value={description2} onChange={(e) => setDescription2(e.target.value)} />
					</div>

					<div className="w-full flex flex-col  gap-2">
						<label>Meta Title</label>
						<Input placeholder="Meta title for the blog" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />

						<label>Meta Description</label>
						<TextArea rows={4} placeholder="Write a short meta description here!" maxLength={300} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} />

						<label>Keywords</label>
						<Select mode="tags" style={{ width: "100%" }} placeholder="Keywords" onChange={(value) => { console.log(value); setKeywords(value); }} value={keywords} />

                        <label>Hero Button Text</label>
                        <Input placeholder="Hero Button Text" value={btnText} onChange={(e) => setBtnText(e.target.value)} />

                        <label>Hero Button Link</label>
                        <Input placeholder="Hero Button Text" value={btnLink} onChange={(e) => setBtnLink(e.target.value)} />
					</div>
				</div>

				<div className="w-full flex flex-col  gap-2">
					

					<Button    className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" > Add Hero Section </Button>
				</div>

				<div className="w-full flex justify-start mt-16"></div>

				{uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to add Hero Section!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}
