"use client";

import {  useState } from "react";
import { Alert, Button, Input, List } from "antd";
import TextArea from "antd/es/input/TextArea";
import "react-quill/dist/quill.snow.css";
import { FcOk } from "react-icons/fc";

import { createOurServicesSection } from "@/actions/whoWeHelpPage";
import { FaPlus } from "react-icons/fa";

export default function OurServicesSection() {

	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [heading, setHeading] = useState("");
	const [shortDescription, setShortDesciption] = useState("");

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [arr, setArr] = useState([]);

	const [url, setUrl] = useState("");



	//Form Submit Handler
	const submitHandler = async () => {
		setIsError(false);

		const formData = new FormData();

		formData.append("heading", heading);
		formData.append("shortDescription", shortDescription);

		formData.append("arr", JSON.stringify(arr));

		formData.append("slug", url.split("/")[3]);

		const res = await createOurServicesSection(formData);

		if (res.success) {
			setUploadSuccess(res.success);

			setHeading("");
			setShortDesciption("");

			setArr([]);
		} else {
			setIsError(true);
		}
	};





    //Service List Handler
	const addServiceHandler = (e) => {
		if (!title || !content) {
			return;
		}

		setArr((prev) => {
			return [
				...prev,
				{
					title,
					content,
				},
			];
		});

		setTitle("");
		setContent("");
	};

	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
				<Input className="hover:cursor-pointer " placeholder="The Url of the current Page" variant="filled" value={url} onClick={(e) => setUrl(e.target.value)} />
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
					Services{" "}
				</h2>

				<div className="w-full flex gap-8 justify-start items-start ">
					<div className="w-[50%] flex flex-col  gap-2">
						<div className="w-full flex flex-col gap-2 ">
							<label>Service Title</label>
							<Input placeholder="Service Title" value={title} onChange={(e) => { setTitle(e.target.value); }} />
						</div>

						<div className="w-full flex flex-col gap-2 ">
							<label>Service Content</label>
							<TextArea placeholder="Service Content" value={content} onChange={(e) => { setContent(e.target.value); }} />
						</div>

						<button onClick={addServiceHandler} className="mt-4 flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-110" aria-label="Add" > <FaPlus className="text-2xl" /> </button>
					</div>

					<div className="w-[50%] flex flex-col justify-center items-center ">
						<label className="text-center w-full font-semibold text-lg font-poppins mb-4 bg-gray-50 rounded-md shadow-sm shadow-black/10 py-2 flex justify-center items-center gap-1 "> {" "} Services List <FcOk />{" "} </label>
						<List className="w-full justify-center items-center" grid={{ gutter: 16, column: 2, }} pagination={{ pageSize: 6, }} itemLayout="horizontal" dataSource={arr}
							renderItem={(item, index) => (
								<List.Item className=" ">
									<List.Item.Meta
										avatar={
											<p className="w-6 h-6 rounded-full bg-orange-400 text-white font-semibold ">
												{index + 1}
											</p>
										}
										title={item.title}
										description={item.content}
									/>
								</List.Item>
							)}
						/>
					</div>
				</div>

				<div className="w-full flex flex-col  gap-2">
					<Button className="w-[16%] min-w-56 mt-4" onClick={submitHandler} type="primary" disabled={arr.length > 0 ? false : true} > {" "} Add Our Services Section{" "} </Button>
				</div>

				{uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to add Hero Section!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}
