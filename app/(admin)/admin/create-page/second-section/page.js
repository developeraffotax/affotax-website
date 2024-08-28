"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";

import {
	createHeroSection,
	createSecondSection,
	UploadImage,
} from "@/actions/whoWeHelpPage";
import ReactQuill from "react-quill";

export default function SecondSection() {
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [heading, setHeading] = useState("");
	const [html, setHtml] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [isImageRight, setIsImageRight] = useState(true);


	const [slug, setSlug] = useState("");
	const [url, setUrl] = useState("");



	useEffect(() => {
		setUrl(window?.location?.origin + "/");
	}, []);



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
		setIsError(false);

		const formData = new FormData();

		formData.append("heading", heading);
		formData.append("html", html);
		formData.append("imageUrl", imageUrl);
		formData.append("imagePosition", `${isImageRight ? 'Right' : 'Left'}`);

		formData.append("slug", slug);

		const res = await createSecondSection(formData);

		if (res.success) {
			setUploadSuccess(res.success);

			setHeading("");
			setHtml("");
			setImageUrl("");
			setImagePosition("");

			setMetaTitle("");
			setMetaDescription();
			setKeywords([]);
		} else {
			setIsError(true);
		}
	};



	const toolbarOptions = [
		["bold", "italic", "underline", "strike"], // toggled buttons
		["blockquote", "code-block"],
		["link", "image", "video", "formula"],

		[{ header: 1 }, { header: 2 }], // custom button values
		[{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
		[{ script: "sub" }, { script: "super" }], // superscript/subscript
		[{ indent: "-1" }, { indent: "+1" }], // outdent/indent
		[{ direction: "rtl" }], // text direction

		// custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		[{ font: [] }],
		[{ align: [] }],

		["clean"],
		// remove formatting button
	];




	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
				<Input className="hover:cursor-pointer " placeholder="The Url of the current Page" readOnly variant="filled" value={url} onClick={(e) => { const selection = e.target.select(); document.execCommand("copy"); e.target.blur(); message.success(`Url Copied!`); }} />

				<div className="w-full flex gap-8 justify-center items-start ">
					<div className="w-full flex flex-col gap-2 ">
						<label>Heading</label>
						<Input placeholder="Title of the Blog" value={heading} onChange={(e) => { setHeading(e.target.value); const slug = e.target.value .toLocaleLowerCase() .trim() .replaceAll(" ", "-") .replace(/[^\w\-]/g, ""); setSlug(slug); const url = window.location.origin + "/" + slug; setUrl(url); }} />
					</div>

					<div className="w-full flex flex-col  gap-2">
						<label> Image</label>
						<Upload {...props}> {" "} <Button icon={<UploadOutlined />}> {" "} Click to Upload{" "} </Button>{" "} </Upload>
					</div>

					<div className="w-full flex flex-col  gap-2">
						<label> Image Position</label>
						<div className="w-6">
							<Switch checkedChildren="R" unCheckedChildren="L" defaultChecked value={isImageRight} onChange={(e) => setIsImageRight(prev => !prev)}/>
						</div>
					</div>
				</div>

				<div className="w-full flex flex-col  gap-2">
					<label>Content for the Section 2</label>
					<ReactQuill className="w-full  " theme="snow" value={html} onChange={setHtml} modules={{ toolbar: toolbarOptions }} />

					<Button className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" > {" "} Add Second Section{" "} </Button>
				</div>

				{uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to add Hero Section!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}
