"use client";

import { createHowItWorksSection, UploadImage } from "@/actions/landingpage";
import { Alert, Button, Input, message } from "antd";
import TextArea from "antd/es/input/TextArea";
import mongoose from "mongoose";
import React, { useEffect, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

import axios from "axios";

const HowItWorks = () => {
	const [HowItWorksSectionHeading, setHowItWorksSectionHeading] =
		useState("");
	const [HowItWorksSectionArray, setHowItWorksSectionArray] = useState([]);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const [iconUrl, setIconUrl] = useState("");

	const [editId, setEditId] = useState("");

	const [isEditMode, setIsEditMode] = useState(false);
	const [url, setUrl] = useState("");

	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const onEdit = (id) => {
		setEditId(id);

		const toBeEditItem = HowItWorksSectionArray.find((el) => el._id === id);
		setTitle(toBeEditItem.title);
		setContent(toBeEditItem.content);
	};

	const onDelete = (id) => {
		if (id === editId) {
			return;
		}

		setHowItWorksSectionArray((prev) => {
			return [...prev].filter((el) => el._id !== id);
		});
	};

	const onComplete = () => {
		const newArr = [...HowItWorksSectionArray];

		if (editId) {
			const editIndex = newArr.findIndex((el) => el._id === editId);

			newArr[editIndex].title = title;
			newArr[editIndex].content = content;
			newArr[editIndex].iconUrl = iconUrl;

			setHowItWorksSectionArray(newArr);
		} else {
			setHowItWorksSectionArray((prev) => {
				newArr.push({
					_id: new mongoose.Types.ObjectId(),
					title: title,
					content: content,
					iconUrl: iconUrl,
				});

				return newArr;
			});
		}

		setEditId("");
		setTitle("");
		setContent("");
	};

	//Form Submit Handler
	const submitHandler = async () => {
		setIsError(false);

		const formData = new FormData();

		formData.append("heading", HowItWorksSectionHeading);

		formData.append("arr", JSON.stringify(HowItWorksSectionArray));

		formData.append("slug", url.split("/")[4]);

		const res = await createHowItWorksSection(formData);

		if (res.success) {
			if (isEditMode) {
				message.success("Section Updated Successfully! 😍");
			} else {
				setUploadSuccess(res.success);
				setHowItWorksSectionHeading("");
				setHowItWorksSectionArray([]);
			}
		} else {
			setIsError(true);
		}
	};

	const getPageData = async () => {
		try {
			const res = await axios.get(
				`/api/landing-pages/${url.split("/")[4]}`
			);

			if (res.status === 200) {
				setIsEditMode(true);
				const section = res.data.HowItWorksSection;

				setHowItWorksSectionHeading(section.heading);
				setHowItWorksSectionArray(section.arr);
				//  setArr(section.arr);
			}
		} catch (error) {
			message.error(
				`Failed to fetch this page! Kindly paste the valid link😠`
			);
		}
	};

	const disableEditMode = () => {
		setIsEditMode(false);

		setHowItWorksSectionHeading("");

		setHowItWorksSectionArray([]);
	};

	const props = {
		name: "imgFile",
		customRequest: async (file) => {
			const form = new FormData();
			form.append("imgFile", file.file);
			const res = await UploadImage(form);

			setIconUrl(res.url);
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

	//Setting the page url on the first mounting
	useEffect(() => {
		const pageUrl = localStorage?.getItem("landing-page-url");

		if (!pageUrl) {
			return;
		} else {
			setUrl(pageUrl);
		}
	}, []);

	return (
		<>
			{/* {isEditMode && <Button type="link" onClick={disableEditMode }>I want to add a new Our-Services-Section😛</Button>} */}

			<div className="w-full flex items-center justify-between gap-8">
				<Input
					className=" "
					placeholder="The Url of the current Page"
					variant="filled"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<Button type="primary" onClick={getPageData}>
					Load Data
				</Button>
			</div>

			<section className="w-full flex flex-row gap-16 justify-center items-start mt-8">
				<div className="w-[50%] flex flex-col justify-center items-center ">
					<div className="w-full">
						<label>Heading</label>
						<Input
							placeholder="Heading for this Section"
							value={HowItWorksSectionHeading}
							onChange={(e) =>
								setHowItWorksSectionHeading(e.target.value)
							}
						/>
					</div>

					<ul className="w-full ">
						{HowItWorksSectionArray.map((el) => {
							return (
								<li
									key={el._id}
									className="flex-start group relative flex lg:flex-col"
								>
									<div className="ml-6 lg:ml-0 lg:mt-10">
										{/* <div><img src={el.iconUrl} alt={el.title} /> </div> */}
										<div className="w-full flex justify-between items-center gap-8">
											<h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
												{el.title}
											</h3>
											<div className="flex gap-4">
												<BiEdit
													onClick={() =>
														onEdit(el._id)
													}
													className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer"
												/>
												<RiDeleteBin6Line
													onClick={() =>
														onDelete(el._id)
													}
													className="text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer"
												/>
											</div>
										</div>

										<h4 className="mt-2 text-base text-gray-700">
											{el.content}
										</h4>

										{/* <div className="  flex justify-center items-center font-semibold  w-[60%]">
											<img src={el.iconUrl} alt={el.title} className="w-full rounded-xl max-h-64" width={300} height={300} />
									</div> */}
									</div>
								</li>
							);
						})}
					</ul>
				</div>

				<div className="w-[50%] flex flex-col justify-center items-center px-16 py-8 gap-8 bg-gradient-to-l from-gray-50 to-slate-50 rounded-2xl shadow-md ">
					<div className="w-full ">
						<label>Title</label>
						<Input
							placeholder="Edit Title"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className="w-full ">
						<label>Content</label>
						<TextArea
							rows={4}
							placeholder="Edit Content"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
					</div>

					{/* <div className="w-full flex flex-col gap-2 ">
							<label>Select Image</label>
							<Upload {...props}> {" "} <Button icon={<UploadOutlined />}> {" "} Click to Upload{" "} </Button>{" "} </Upload>
						</div> */}

					<div className="w-full flex justify-between items-center gap-5 ">
						<button
							onClick={onComplete}
							type="button"
							className="py-2.5 pl-6 pr-3.5 text-sm bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 flex items-center hover:bg-indigo-100"
						>
							{" "}
							{editId ? "Update" : "Add New"}{" "}
							<svg
								class="ml-3"
								width="6"
								height="10"
								viewBox="0 0 6 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{" "}
								<path
									d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1"
									stroke="#5551FF"
									stroke-width="1.6"
									stroke-linecap="round"
									stroke-linejoin="round"
								></path>{" "}
							</svg>{" "}
						</button>

						{editId && (
							<button
								onClick={() => {
									setEditId("");
									setTitle();
									setContent();
								}}
								type="button"
								className="py-2.5 px-6 text-sm rounded-full font-semibold text-indigo-500 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700"
							>
								I want to add New🧡
							</button>
						)}
					</div>
				</div>
			</section>
			<div className="w-full flex flex-row items-center justify-between ">
				<Button
					className="w-[16%] min-w-56 mt-4"
					onClick={submitHandler}
					type="primary"
					disabled={HowItWorksSectionArray?.length > 0 ? false : true}
				>
					{" "}
					{isEditMode
						? "Update Our-Services-Section"
						: "Add Our-Services-Section"}{" "}
				</Button>
				{/* {isEditMode && <Button className="w-[10%] min-w-44 mt-4" onClick={dltBtnHandler} type="primary" danger> {" "} Delete this Section{" "} </Button>} */}
			</div>

			{uploadSuccess && (
				<Alert
					message="New Section added successfully!"
					type="success"
					showIcon
					closable
				/>
			)}
			{isError && (
				<Alert
					message="Failed to add New Section!"
					type="error"
					showIcon
					closable
				/>
			)}
		</>
	);
};

export default HowItWorks;
