"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, List, message, Upload } from "antd";

import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import { FcOk } from "react-icons/fc";

import { createOurServicesSection, createWhyChooseUsSection, UploadImage } from "@/actions/whoWeHelpPage";
import { FaPlus } from "react-icons/fa";

export default function WhyChooseUsSection() {
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [heading, setHeading] = useState("");
	const [shortDescription, setShortDesciption] = useState("");

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [imageUrl, setImageUrl] = useState("");
	const [arr, setArr] = useState([]);

	const [url, setUrl] = useState("");

	//Setting the page url on the first mounting
	useEffect(() => {
		const pageUrl = localStorage?.getItem('page-url');

		if(!pageUrl) {
			return;
		} else {
			setUrl(pageUrl)
		}


	}, [])


	//Form Submit Handler
	const submitHandler = async () => {
		setIsError(false);

		const formData = new FormData();

		formData.append("heading", heading);
		formData.append("shortDescription", shortDescription);

		formData.append("arr", JSON.stringify(arr));

		formData.append("slug", url.split("/")[3]);

		const res = await createWhyChooseUsSection(formData);

		if (res.success) {
			setUploadSuccess(res.success);

			setHeading("");
			setShortDesciption("");

			setArr([]);
		} else {
			setIsError(true);
		}
	};

	const addServiceHandler = (e) => {
		if (!title || !content) {
			return;
		}
		console.log(imageUrl);
		setArr((prev) => {
			return [
				...prev,
				{
					title,
					content,
					imageUrl,
				},
			];
		});

		setTitle("");
		setContent("");
		setImageUrl("");
	};

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

	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
				<Input className=" " placeholder="The Url of the current Page"  variant="filled" value={url} onChange={(e) => setUrl(e.target.value)} />

				<div className="w-full flex gap-8 justify-center items-start ">
					<div className="w-[50%] flex flex-col gap-2 ">
						<label>Heading</label>
						<Input placeholder="Heading of this Section" value={heading} onChange={(e) => { setHeading(e.target.value); }} />
					</div>

					<div className="w-[50%] flex flex-col gap-2 ">
						<label>Short Description</label>
						<TextArea placeholder="Short Description for this Section" value={shortDescription} onChange={(e) => { setShortDesciption(e.target.value); }} />
					</div>
				</div>

				<h2 className="text-3xl font-poppins text-center font-semibold my-4 py-2 bg-gray-100/60 shadow-sm shadow-black/10 text-orange-400 rounded-lg  w-full ">
					{" "}
					Main Content{" "}
				</h2>

				<div className="w-full flex gap-8 justify-start items-start ">
					<div className="w-[50%] flex flex-col  gap-2">
						<div className="w-full flex flex-col gap-2 ">
							<label> Title</label>
							<Input placeholder=" Title" value={title} onChange={(e) => { setTitle(e.target.value); }} />
						</div>

						<div className="w-full flex flex-col gap-2 ">
							<label> Content</label>
							<TextArea placeholder=" Content" value={content} onChange={(e) => { setContent(e.target.value); }} />
						</div>

						<div className="w-full flex flex-col gap-2 ">
							<label>Select Image</label>
							<Upload {...props}> {" "} <Button icon={<UploadOutlined />}> {" "} Click to Upload{" "} </Button>{" "} </Upload>
						</div>

						<button onClick={addServiceHandler} className="mt-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110" aria-label="Add" > <FaPlus className="text-2xl" /> </button>
					</div>

					<div className="w-[50%] flex flex-col justify-center items-center ">
						<label className="text-center w-full font-semibold text-lg font-poppins mb-4 bg-gray-50 rounded-md shadow-sm shadow-black/10 py-2 flex justify-center items-center gap-1 "> {" "} List <FcOk />{" "} </label>
						<List
							className="w-full justify-center items-center" grid={{ gutter: 16, column: 2, }} pagination={{ pageSize: 6, }} itemLayout="horizontal" dataSource={arr}
							renderItem={(item, index) => (
								<List.Item key={index} className=" ">
									<li className="flex flex-col justify-center items-center gap-1  ">
										<div className="  flex justify-center items-center font-semibold  w-[60%]">
											<img src={item.imageUrl} alt={item.title} className="w-full rounded-xl max-h-64" width={300} height={300} />
										</div>
										<h3 className="font-semibold text-xl  max-w-52">
											{item.title}
										</h3>
										<p className="text-sm max-w-52">
											{item.content}
										</p>
									</li>
								</List.Item>
							)}
						/>
					</div>
				</div>

				<div className="w-full flex flex-col  gap-2">
					<Button className="w-[16%] min-w-56 mt-4" onClick={submitHandler} type="primary" disabled={arr.length > 0 ? false : true} > {" "} Add Why-Choose-Us Section{" "} </Button>
				</div>

				{uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to add Hero Section!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}
