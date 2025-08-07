"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, List, message } from "antd";

import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { createFaqSection } from "@/actions/landingpage";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

export default function FaqSection() {
	const [isEditMode, setIsEditMode] = useState(false);

	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	// Faqs  Section State
	const [faqEditIndex, setFaqEditIndex] = useState("");

	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	const [faqArr, setFaqArr] = useState([]);

	const [url, setUrl] = useState("");

	//Setting the page url on the first mounting
	useEffect(() => {
		const pageUrl = localStorage?.getItem("landing-page-url");

		if (!pageUrl) {
			return;
		} else {
			setUrl(pageUrl);
		}
	}, []);

	//Form Submit Handler
	const submitHandler = async () => {
		//setUploadSuccess(false);
		setIsError(false);

		const formData = new FormData();

		formData.append("faqArr", JSON.stringify(faqArr));

		formData.append("slug", url.split("/")[4]);

		const res = await createFaqSection(formData);

		if (res.success) {
			if (isEditMode) {
				message.success("FAQ Section updated Successfully! Yayyy🎉");
			} else {
				setUploadSuccess(res.success);

				setQuestion("");
				setAnswer("");

				setFaqArr([]);
			}
		} else {
			setIsError(true);
		}
	};

	const getPageData = async () => {
		console.log(url);

		try {
			const page = await axios.get(
				`/api/landing-pages/${url.split("/")[4]}`
			);

			console.log(page);

			if (page.status === 200) {
				setIsEditMode(true);
				// const FaqSection = page.data.FaqSection;

				console.log(" the section ❤💛", page.data);
				setFaqArr(page.data.FaqSection);
			}
		} catch (error) {
			message.error(
				`Failed to fetch this page! Kindly paste the valid link😠`
			);
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

	// FAQ HANDLERS
	const faqArrHandler = () => {
		if (question.length === 0 || answer.length === 0) {
			return;
		}

		if (faqEditIndex) {
			const index = parseInt(faqEditIndex);

			setFaqArr((prev) => {
				const updatedArr = [...prev];

				updatedArr[index].question = question;
				updatedArr[index].answer = answer;

				return updatedArr;
			});

			setFaqEditIndex("");
		} else {
			setFaqArr((prev) => {
				return [
					...prev,
					{
						question,
						answer,
					},
				];
			});
		}

		setQuestion("");
		setAnswer("");
	};

	const faqEditHandler = (item, index) => {
		setFaqEditIndex(index.toString());

		setQuestion(item.question);
		setAnswer(item.answer);
	};

	const faqDltHandler = (index) => {
		setFaqArr((prev) => {
			return prev.filter((el, i) => i !== index);
		});
	};

	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
				{/* {isEditMode && <Button type="link" onClick={disableEditMode }>I want to add a new Hero Section😛</Button>} */}
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

				<div className="w-full flex gap-8 justify-start items-start ">
					<div className="w-[70%] flex flex-col gap-2 ">
						<label>Question</label>
						<Input
							className=" "
							placeholder="Write a Question"
							value={question}
							onChange={(e) => {
								setQuestion(e.target.value);
							}}
						/>

						<label>Answer</label>
						<ReactQuill
							className="  "
							theme="snow"
							value={answer}
							onChange={setAnswer}
							modules={{ toolbar: toolbarOptions }}
						/>
						{/* <TextArea rows={4} placeholder="Write a short answer here!" maxLength={1200} value={answer} onChange={(e) => setAnswer(e.target.value)} /> */}
						<button
							onClick={faqArrHandler}
							type="button"
							className="w-11 h-11  bg-orange-50 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-orange-100"
						>
							{" "}
							<svg
								width="10"
								height="10"
								viewBox="0 0 10 10"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								{" "}
								<path
									d="M1.22229 5.00013H8.77785M5.00007 8.77791V1.22235"
									stroke="#e07000"
									stroke-width="1.6"
									strokeLinecap="round"
									strokeLinejoin="round"
								></path>{" "}
							</svg>{" "}
						</button>
					</div>

					<div className="w-[30%]">
						<List
							dataSource={faqArr}
							renderItem={(item, index) => (
								<List.Item key={index + "faqs-arr"}>
									<div class="w-full flex justify-between  gap-4 items-start mb-8">
										<div className="w-full flex justify-start items-center ">
											<div class="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-orange-500 text-white border-4 border-white text-xl font-semibold">
												<svg
													width="24px"
													fill="white"
													height="24px"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													{" "}
													<g data-name="Layer 2">
														{" "}
														<g data-name="menu-arrow">
															{" "}
															<rect
																width="24"
																height="24"
																transform="rotate(180 12 12)"
																opacity="0"
															></rect>{" "}
															<path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>{" "}
															<circle
																cx="12"
																cy="19"
																r="1"
															></circle>{" "}
														</g>{" "}
													</g>{" "}
												</svg>
											</div>
											<div class="text-md">
												<h1 class="text-gray-900 font-semibold mb-2">
													{item.question}
												</h1>
												<div
													class="text-gray-500 text-sm"
													dangerouslySetInnerHTML={{
														__html: item.answer,
													}}
												></div>
											</div>
										</div>

										<div className="flex justify-center items-center gap-2">
											<BiEdit
												onClick={() =>
													faqEditHandler(item, index)
												}
												className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
											/>
											<RiDeleteBin6Line
												onClick={() =>
													faqDltHandler(index)
												}
												className="text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer"
											/>
										</div>
									</div>
								</List.Item>
							)}
						/>
					</div>
				</div>

				<div className="w-full flex flex-row justify-between items-center  ">
					<Button
						className="w-[10%] min-w-44 mt-4"
						onClick={submitHandler}
						type="primary"
					>
						{" "}
						{isEditMode
							? "Update Faq Section"
							: "Add Faq Section"}{" "}
					</Button>
					{/* {isEditMode && <Button className="w-[10%] min-w-44 mt-4" onClick={dltSectionBtnHandler} type="primary" danger> {" "} Delete Faq Section{" "} </Button>} */}
				</div>

				<div className="w-full flex justify-start mt-16"></div>

				{uploadSuccess && (
					<Alert
						message="Faq Section is added successfully!"
						type="success"
						showIcon
						closable
					/>
				)}
				{isError && (
					<Alert
						message="Failed to add Faq Section!"
						type="error"
						showIcon
						closable
					/>
				)}
			</div>
		</>
	);
}
