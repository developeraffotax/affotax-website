"use client";

import { useEffect, useState } from "react";
import {
	Alert,
	Avatar,
	Button,
	Divider,
	Input,
	List,
	message,
	Select,
	Spin,
} from "antd";
import TextArea from "antd/es/input/TextArea";

import axios from "axios";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { MdDownloadDone } from "react-icons/md";
import { LoadingOutlined } from "@ant-design/icons";

export default function CreatePage({ pageSlug }) {
	// Pricing Section State
	const [priceTitle, setPriceTitle] = useState("");
	const [priceContent, setPriceContent] = useState("");
	const [price, setPrice] = useState("");

	const [addOnEditingValue, setAddOnEditingValue] = useState({
		priceTitle: "",
		price: "",
	});
	const [addOnEditingIndex, setAddOnEditingIndex] = useState("");
	const [addOn, setAddOn] = useState({ priceTitle: "", price: "" });
	const [addOnsArr, setAddOnsArr] = useState([]);

	const [editingValue, setEditingValue] = useState("");
	const [pkgEditIndex, setPkgEditIndex] = useState("");

	const [packageIncludes, setPackageIncludes] = useState("");
	const [packageIncludesArr, setPackageIncludesArr] = useState([]);

	const [pricingEditIndex, setPricingEditIndex] = useState("");
	const [pricesArr, setPricesArr] = useState([]);

	// Why Choose  Section State
	const [benefitsTitle, setBenefitsTitle] = useState("");

	const [benefit, setBenefit] = useState({
		heading: "",
		paragraph: "",
	});

	const [benefitsEditIndex, setBenefitsEditIndex] = useState("");
	const [benefitsArr, setBenefitsArr] = useState([]);

	// Faqs  Section State
	const [faqEditIndex, setFaqEditIndex] = useState("");

	const [question, setQuestion] = useState("");
	const [answer, setAnswer] = useState("");

	const [faqArr, setFaqArr] = useState([]);

	// Page State
	const [isEditMode, setIsEditMode] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	const [errorMsg, setErrorMsg] = useState("");

	const [title, setTitle] = useState("");
	const [html, setHtml] = useState("");

	const [metaTitle, setMetaTitle] = useState("");
	const [metaDescription, setMetaDescription] = useState("");
	const [keywords, setKeywords] = useState([]);

	const [slug, setSlug] = useState("");
	const [url, setUrl] = useState(() => {
		if (!pageSlug) {
			return "";
		}
		return window?.location?.origin + "/" + pageSlug;
	});

	// Suggested Packages
	const [allServices, setAllServices] = useState([]);
	const [selectedServiceId, setSelectedServiceId] = useState("");
	const [selectedPriceId, setSelectedPriceId] = useState("");
	const [selectedServicePrices, setSelectedServicePrices] = useState([]);
	const [suggestedPackagesArr, setSuggestedPackagesArr] = useState([]);

	useEffect(() => {
		const fetchServices = async () => {
			const res = await axios.get("/api/service-page/get-all");
			if (res.status === 200) {
				setAllServices(res.data);
			}
		};

		fetchServices();
	}, []);

	const handleServiceSelect = (value) => {
		setSelectedServiceId(value);

		const service = allServices.find((s) => s._id === value);

		if (service) {
			setSelectedServicePrices(service.prices);
		} else {
			setSelectedServicePrices([]);
		}

		setSelectedPriceId("");
	};

	const addSuggestedPackageHandler = () => {
		if (!selectedServiceId || !selectedPriceId) return;

		const exists = suggestedPackagesArr.some(
			(item) =>
				item.service === selectedServiceId &&
				item.priceId === selectedPriceId,
		);

		if (exists) {
			return message.warning("This package is already added.");
		}

		setSuggestedPackagesArr((prev) => [
			...prev,
			{
				service: selectedServiceId,
				priceId: selectedPriceId,
			},
		]);

		setSelectedServiceId("");
		setSelectedPriceId("");
		setSelectedServicePrices([]);
	};

	useEffect(() => {
		if (pageSlug) {
			getPageData();
			localStorage?.setItem("service-page-url", url);
			console.log(url);
		} else {
			setUrl(window?.location?.origin + "/");
		}
	}, []);

	console.log(pricesArr);

	// UPDATE / CREATE HANDLER
	const submitHandler = async () => {
		setIsLoading(true);

		const link = url
			.split("/")[3]
			.trim()
			.toLowerCase()
			.replaceAll(" ", "-")
			.replace(/[^\w\-]/g, "");

		const pattern = /^[a-z0-9-]+$/;

		const result = pattern.test(link);

		if (!link || !result) {
			return message.error(
				"Kindly Add a proper url | It can only contain a-z 0-9 and -",
			);
		}

		const servicePage = {
			metaTitle: metaTitle,
			metaDescription: metaDescription,
			keywords: keywords,

			link: link,
			title: title,
			content: html,

			prices: pricesArr,
			benefitsTitle: benefitsTitle,
			benefits: benefitsArr,
			faqs: faqArr,
			suggestedPackages: suggestedPackagesArr, // 👈 add this
		};

		let apiUrl;

		if (isEditMode) {
			apiUrl = `/api/service-page/post-page/${pageSlug}`;
		} else {
			apiUrl = "/api/service-page/post-page";
		}

		try {
			const res = await axios.post(apiUrl, servicePage);

			console.log(res);

			localStorage?.setItem("service-page-url", url);

			if (res.status === 201) {
				if (!isEditMode) {
					setMetaTitle("");
					setMetaDescription("");
					setKeywords([]);

					setTitle("");
					setHtml("");

					setPricesArr([]);
					setBenefitsTitle("");
					setBenefit({ heading: "", paragraph: "" });
					setBenefitsArr([]);
					setFaqArr([]);
					setSuggestedPackagesArr([]);
				}

				message.success(
					`${isEditMode ? "Page Updated" : "New Page Added Successfully"}`,
				);
			} else {
				console.log(res);
				message.error(
					`${isEditMode ? "Failed to update page!" : "Failed to add new page!"}`,
				);
			}
		} catch (error) {
			console.log(error);
			message.error(
				`${isEditMode ? "Failed to update page!" : error?.response?.data?.message || "Failed to add new page!"}`,
			);
		} finally {
			setIsLoading(false);
		}
	};

	// // DELETE PAGE HANDLER

	// const deletePageHandler = () => {

	// 	setIsLoading(true);

	// 	try {

	// 		const res = axios.delete(`/api/service-page/post-page/${pageSlug}`)

	// 		if (res.status === 201) {

	// 		}

	// 	} catch (error) {

	// 	}

	// }

	const getPageData = async () => {
		setIsLoading(true);
		try {
			// let res;

			// if (pageSlug) {
			// 	 res = await axios.get(`/api/pages/${pageSlug}`);
			// 	 setUrl(window?.location?.origin + "/" + pageSlug);
			// } else {

			// }

			//let res = await axios.get(`/api/service-page/get-one/${ url.split('/')[3]}`);

			let res = await axios.get(`/api/service-page/get-one/${pageSlug}`);

			console.log(res);

			if (res.status === 200) {
				setIsEditMode(true);
				const page = res.data;

				console.log(res);

				setMetaTitle(page.metaTitle);
				setMetaDescription(page.metaDescription);
				setKeywords(page.keywords);

				setTitle(page.title);
				setHtml(page.content);

				setPricesArr(page.prices);
				setBenefitsTitle(page.benefitsTitle);

				setBenefitsArr(page.benefits);
				setFaqArr(page.faqs);
				setSuggestedPackagesArr(page.suggestedPackages || []);
			}
		} catch (error) {
			message.error(
				`Failed to fetch this page! Kindly paste the valid link😠`,
			);
		} finally {
			setIsLoading(false);
		}
	};

	const dltPageBtnHandler = async () => {
		// setIsError(false);
		//  const formData = new FormData();
		//  formData.append("link",  url.split('/')[3]);
		// try {
		//      const res = await deleteNewPage(formData);
		//     if (res.success === true) {
		// 		message.success(`Page deleted successfully`);
		// 		setIsEditMode(false);
		// 	} else if (res.success === false) {
		// 		message.error(`Failed to delete the page`);
		// 	}
		// } catch (error) {
		// 	message.error(`Failed to delete the page`);
		//     console.log(error);
		// }
	};

	// const disableEditMode = () => {
	// 	setIsEditMode(false);

	// 	setTitle('');
	// 	setMetaTitle('');
	// 	setMetaDescription('');
	// 	setKeywords('');

	// }

	// PRICING addOn HANDLER
	const addOnsArrHandler = () => {
		if (addOn.priceTitle.length === 0 || addOn.price.length === 0) {
			return;
		}

		setAddOnsArr((prev) => {
			return [...prev, addOn];
		});

		setAddOn({ priceTitle: "", price: "" });
	};

	const addOnEditHandler = (el, index) => {
		setAddOnEditingValue({ priceTitle: el.priceTitle, price: el.price });
		setAddOnEditingIndex(index.toString());
	};

	const addOnDltHandler = (index) => {
		setAddOnsArr((prev) => {
			return prev.filter((el, i) => i !== index);
		});
	};

	const addOnSubmitHandler = () => {
		const newArr = [...addOnsArr];

		newArr[parseInt(addOnEditingIndex)] = addOnEditingValue;

		setAddOnsArr(newArr);

		setAddOnEditingIndex("");
	};

	// PRICING SECTION HANDLERS
	const handlePackageIncludes = () => {
		if (packageIncludes.length === 0) {
			return;
		}

		setPackageIncludesArr((prev) => {
			return [...prev, packageIncludes];
		});

		setPackageIncludes("");
	};

	const pricesArrHandler = () => {
		if (
			priceTitle.length === 0 ||
			priceContent.length === 0 ||
			price.length === 0
		) {
			return;
		}

		if (pricingEditIndex) {
			const index = parseInt(pricingEditIndex);

			setPricesArr((prev) => {
				const newArr = [...prev];

				newArr[index].priceTitle = priceTitle;
				newArr[index].priceContent = priceContent;
				newArr[index].price = price;
				newArr[index].packageIncludes = packageIncludesArr;
				newArr[index].addOns = addOnsArr;

				return newArr;
			});

			setPricingEditIndex("");
		} else {
			const newPricing = {
				priceTitle: priceTitle,
				priceContent: priceContent,
				price: price,
				packageIncludes: packageIncludesArr,
				addOns: addOnsArr,
			};

			const newPricesArr = [...pricesArr, newPricing];

			setPricesArr(newPricesArr);
		}

		setPriceTitle("");
		setPriceContent("");
		setPrice("");
		setPackageIncludes("");
		setPackageIncludesArr([]);
		setAddOnsArr([]);
	};

	// PACKAGE INCLUDE EDIT HANDLERS

	const packageIncludesDltHandler = (index) => {
		setPackageIncludesArr((prev) => {
			return prev.filter((el, i) => i !== index);
		});
	};

	const packageIncludesEditHandler = (el, index) => {
		setEditingValue(el);

		setPkgEditIndex(index.toString());
	};

	const packageIncludesSubmitHandler = () => {
		const newArr = [...packageIncludesArr];

		newArr[parseInt(pkgEditIndex)] = editingValue;

		setPackageIncludesArr(newArr);

		setPkgEditIndex("");

		//setPkgEditIndex(index.toString());
	};

	// PRICING SECTION EDIT HANDLERS

	const pricingSectionDltHandler = (index) => {
		setPricesArr((prev) => {
			return prev.filter((el, i) => i !== index);
		});
	};

	const pricingSectionEditHandler = (item, index) => {
		setPricingEditIndex(index.toString());

		const { priceTitle, priceContent, price, packageIncludes, addOns } =
			item;

		setPriceTitle(priceTitle);
		setPriceContent(priceContent);
		setPrice(price);
		setPackageIncludesArr(packageIncludes);
		setAddOnsArr(addOns);
	};

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

	const handleBenefitsArr = () => {
		if (benefitsEditIndex) {
			const index = parseInt(benefitsEditIndex);

			setBenefitsArr((prev) => {
				const newArr = [...prev];
				newArr[index].heading = benefit.heading;
				newArr[index].paragraph = benefit.paragraph;

				return newArr;
			});

			setBenefitsEditIndex("");
		} else {
			setBenefitsArr((prev) => {
				return [...prev, benefit];
			});
		}

		setBenefit({ heading: "", paragraph: "" });
	};

	const benefitsArrDltHandler = (index) => {
		setBenefitsArr((prev) => prev.filter((el, i) => i !== index));
	};

	const benefitsArrEditHandler = (item, index) => {
		setBenefitsEditIndex(index.toString());
		setBenefit({ heading: item.heading, paragraph: item.paragraph });
	};

	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			packageIncludesSubmitHandler();
		} else {
			return;
		}
	};

	const handleKeyDownAddOn = (e) => {
		if (e.key === "Enter") {
			addOnSubmitHandler();
		} else {
			return;
		}
	};

	const startsWithLanding = (value) => {
		if (typeof value !== "string") return false;
		return value.toLowerCase().startsWith("landing-");
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
			{isLoading && (
				<Spin
					indicator={<LoadingOutlined spin />}
					size="large"
					fullscreen
				/>
			)}

			{!isLoading && (
				<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
					{/* {isEditMode && <Button type="link" onClick={disableEditMode }>I want to add a new Page😛</Button>} */}

					<div className="w-full flex items-center justify-between gap-8">
						<Input
							className=""
							placeholder="The Url of the current Page"
							variant="filled"
							value={url}
							onChange={(e) => setUrl(e.target.value)}
						/>

						{/* <Button type="primary" onClick={getPageData}>Load Data</Button>		  */}
					</div>
					<Divider style={{ borderColor: "#eb8110" }}>
						{" "}
						Top Section{" "}
					</Divider>

					<div className="w-full flex gap-8 justify-center items-start ">
						<div className="w-[70%] flex flex-col gap-2 ">
							<label>Title of the Page</label>
							<Input
								className=" "
								placeholder="Title of the Page"
								value={title}
								onChange={(e) => {
									setTitle(e.target.value);
								}}
							/>

							<label>Top Content</label>
							<ReactQuill
								className="  "
								theme="snow"
								value={html}
								onChange={setHtml}
								modules={{ toolbar: toolbarOptions }}
							/>
						</div>

						<div className="w-[30%] flex flex-col  gap-2">
							<label>Meta Title</label>
							<Input
								placeholder="Meta title for the page"
								value={metaTitle}
								onChange={(e) => setMetaTitle(e.target.value)}
							/>

							<label>Meta Description</label>
							<TextArea
								rows={4}
								placeholder="Write a short meta description here!"
								maxLength={800}
								value={metaDescription}
								onChange={(e) =>
									setMetaDescription(e.target.value)
								}
							/>

							<label>Keywords</label>
							<Select
								mode="tags"
								style={{ width: "100%" }}
								placeholder="Keywords"
								onChange={(value) => {
									console.log(value);
									setKeywords(value);
								}}
								value={keywords}
							/>
						</div>
					</div>

					<Divider style={{ borderColor: "#eb8110" }}>
						{" "}
						Pricing Section{" "}
					</Divider>

					<div className="w-full gap-8 flex justify-center items-center ">
						<div className="w-[70%]">
							<label>Price-Title</label>
							<Input
								placeholder=""
								value={priceTitle}
								onChange={(e) => setPriceTitle(e.target.value)}
							/>

							<label>Price-Content</label>
							<Input
								placeholder=""
								value={priceContent}
								onChange={(e) =>
									setPriceContent(e.target.value)
								}
							/>

							<label>Price</label>
							<Input
								placeholder=""
								value={price}
								onChange={(e) => setPrice(e.target.value)}
							/>

							<label>Package Includes</label>
							<div className="flex items-center justify-between w-full gap-2  ">
								<Input
									placeholder=""
									value={packageIncludes}
									onChange={(e) =>
										setPackageIncludes(e.target.value)
									}
								/>

								<button
									onClick={handlePackageIncludes}
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
							<ul className="list-disc text-wrap rounded-xl bg-orange-50 text-orange-800 font-semibold mt-4 shadow-sm shadow-black/30">
								{" "}
								{packageIncludesArr?.map((el, index) => {
									return (
										<li
											key={index + "package-inc-arr"}
											className={`flex justify-between items-center  p-2  ${index + 1 === packageIncludesArr.length ? "" : "border-b"}`}
										>
											{/* {el} */}
											<div className="flex items-start justify-start gap-1 w-full">
												<span className=" font-semibold">
													{index + 1}.{" "}
												</span>
												{parseInt(pkgEditIndex) ===
												index ? (
													<div className="w-[50%]">
														<Input
															error
															className=""
															onKeyDown={
																handleKeyDown
															}
															value={editingValue}
															onChange={(e) =>
																setEditingValue(
																	e.target
																		.value,
																)
															}
														/>
													</div>
												) : (
													<p>{el}</p>
												)}
											</div>
											<div className="flex justify-center items-center gap-4">
												{parseInt(pkgEditIndex) ===
												index ? (
													<MdDownloadDone
														onClick={() =>
															packageIncludesSubmitHandler()
														}
														className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
													/>
												) : (
													<BiEdit
														onClick={() =>
															packageIncludesEditHandler(
																el,
																index,
															)
														}
														className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
													/>
												)}
												<RiDeleteBin6Line
													onClick={() =>
														packageIncludesDltHandler(
															index,
														)
													}
													className="text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer"
												/>
											</div>
										</li>
									);
								})}{" "}
							</ul>

							<label className="mt-8 font-poppins font-semibold ">
								Pricing Add Ons
							</label>
							<div className="flex items-center justify-between w-full gap-2  ">
								<div className="flex items-center justify-between w-full gap-2  ">
									<Input
										placeholder="Enter Price Title Here"
										value={addOn.priceTitle}
										onChange={(e) =>
											setAddOn((prev) => ({
												...prev,
												priceTitle: e.target.value,
											}))
										}
									/>
									<Input
										placeholder="Enter Price Here"
										value={addOn.price}
										onChange={(e) =>
											setAddOn((prev) => ({
												...prev,
												price: e.target.value,
											}))
										}
									/>
								</div>

								<button
									onClick={addOnsArrHandler}
									type="button"
									className="w-11 h-11 bg-orange-50 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-500  hover:bg-orange-100"
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
							<ul className="list-disc text-wrap rounded-xl bg-teal-50 text-teal-800 font-semibold mt-4 shadow-sm shadow-black/30">
								{" "}
								{addOnsArr?.map((el, index) => {
									return (
										<li
											key={index + "addOns-arr"}
											className={`flex justify-between items-center  p-2  ${index + 1 === addOnsArr.length ? "" : "border-b"}`}
										>
											{/* {el} */}
											<div className="flex items-start justify-start gap-1 w-full">
												<span className=" font-semibold">
													{index + 1}.{" "}
												</span>
												{parseInt(addOnEditingIndex) ===
												index ? (
													<div className="w-[90%] flex justify-between items-center gap-4">
														<Input
															error
															className=""
															onKeyDown={
																handleKeyDownAddOn
															}
															value={
																addOnEditingValue.priceTitle
															}
															onChange={(e) =>
																setAddOnEditingValue(
																	(prev) => ({
																		...prev,
																		priceTitle:
																			e
																				.target
																				.value,
																	}),
																)
															}
														/>
														<Input
															error
															className=""
															onKeyDown={
																handleKeyDownAddOn
															}
															value={
																addOnEditingValue.price
															}
															onChange={(e) =>
																setAddOnEditingValue(
																	(prev) => ({
																		...prev,
																		price: e
																			.target
																			.value,
																	}),
																)
															}
														/>
													</div>
												) : (
													<p className="flex justify-between items-center w-full px-8 ">
														<span>
															{el.priceTitle}
														</span>
														<span>
															£. {el.price}
														</span>
													</p>
												)}
											</div>
											<div className="flex justify-center items-center gap-4">
												{parseInt(addOnEditingIndex) ===
												index ? (
													<MdDownloadDone
														onClick={() =>
															addOnSubmitHandler()
														}
														className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
													/>
												) : (
													<BiEdit
														onClick={() =>
															addOnEditHandler(
																el,
																index,
															)
														}
														className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
													/>
												)}
												<RiDeleteBin6Line
													onClick={() =>
														addOnDltHandler(index)
													}
													className="text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer"
												/>
											</div>
										</li>
									);
								})}{" "}
							</ul>

							<button
								onClick={pricesArrHandler}
								className="mt-4 flex items-center justify-center  bg-orange-400 text-white rounded-md shadow-lg hover:bg-orange-500 px-8 py-2 transition-transform transform hover:scale-110"
								aria-label="Add"
							>
								{" "}
								Add Pricing{" "}
							</button>
						</div>

						<div className="w-[30%] p-8 bg-zinc-50 rounded-lg shadow-sm">
							<List
								dataSource={pricesArr}
								renderItem={(item, index) => (
									<List.Item key={index + "pricing-arr"}>
										<div className="w-full">
											<div className="flex items-center justify-between ">
												<h3 className="text-xl font-semibold ">
													{" "}
													{item.priceTitle}{" "}
												</h3>
												<strong> {item.price}</strong>
											</div>
											<p className="py-2">
												{item.priceContent}
											</p>

											<ul className="mt-2">
												{item?.packageIncludes?.map(
													(el, index) => {
														return (
															<li
																key={el}
																className="bg-orange-100 text-orange-800 py-1 px-2 mb-2 rounded-md"
															>
																{" "}
																<b>
																	{" "}
																	{index +
																		1}.{" "}
																	{el}{" "}
																</b>{" "}
															</li>
														);
													},
												)}
											</ul>

											{item?.addOns?.length > 0 && (
												<ul className="mt-4">
													<strong>Add Ons</strong>
													{item?.addOns?.map(
														(el, index) => {
															return (
																<li
																	key={
																		el.priceTitle +
																		"addOn-arr"
																	}
																	className="bg-teal-100 text-teal-800 py-1  mb-2 rounded-md flex justify-between px-4 "
																>
																	{" "}
																	<b>
																		{" "}
																		{index +
																			1}
																		.{" "}
																		{
																			el.priceTitle
																		}{" "}
																	</b>{" "}
																	<span>
																		£.
																		{
																			el.price
																		}
																	</span>{" "}
																</li>
															);
														},
													)}
												</ul>
											)}

											<div className="flex justify-center items-center gap-2">
												<BiEdit
													onClick={() =>
														pricingSectionEditHandler(
															item,
															index,
														)
													}
													className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
												/>
												<RiDeleteBin6Line
													onClick={() =>
														pricingSectionDltHandler(
															index,
														)
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

					<Divider style={{ borderColor: "#eb8110" }}>
						{" "}
						Why-Choose-Our-Services Section{" "}
					</Divider>
					<div className="w-full flex gap-8 justify-start items-start ">
						<div className="w-[70%] flex flex-col gap-2 ">
							<label>Title of the Section</label>
							<Input
								className=" "
								placeholder="Heading for section"
								value={benefitsTitle}
								onChange={(e) => {
									setBenefitsTitle(e.target.value);
								}}
							/>

							<div className="flex w-full gap-2 mt-4 items-end">
								<div className="w-[30%]">
									<label className="">Heading</label>
									<Input
										className=" "
										placeholder="Heading"
										value={benefit.heading}
										onChange={(e) => {
											setBenefit((prev) => ({
												...prev,
												heading: e.target.value,
											}));
										}}
									/>
								</div>

								<div className="w-[70%]">
									<label>Paragraph</label>
									<Input
										className=" "
										placeholder="Paragraph"
										value={benefit.paragraph}
										onChange={(e) => {
											setBenefit((prev) => ({
												...prev,
												paragraph: e.target.value,
											}));
										}}
									/>
								</div>

								<button
									onClick={handleBenefitsArr}
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
						</div>

						<div className="w-[30%] p-8 bg-zinc-50 rounded-lg shadow-sm">
							<h2 className="font-poppins font-semibold text-2xl text-center mb-4">
								{benefitsTitle}
							</h2>
							<List
								dataSource={benefitsArr}
								renderItem={(item, index) => (
									<List.Item key={index + "benefits-arr-"}>
										<div className="w-full ">
											<div className=" w-full  flex items-center justify-between gap-2 ">
												<div className=" w-full  flex items-center justify-start gap-2 ">
													<span className=" flex font-poppins items-center justify-center h-8 w-8 bg-orange-100 text-orange-800 font-semibold  rounded-md p-2">
														{index + 1}.
													</span>
													<h3 className="text-xl font-semibold ">
														{" "}
														{item.heading}{" "}
													</h3>
												</div>

												<div className="flex justify-center items-center gap-2">
													<BiEdit
														onClick={() =>
															benefitsArrEditHandler(
																item,
																index,
															)
														}
														className="text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer "
													/>
													<RiDeleteBin6Line
														onClick={() =>
															benefitsArrDltHandler(
																index,
															)
														}
														className="text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer"
													/>
												</div>
											</div>

											<p> {item.paragraph}</p>
										</div>
									</List.Item>
								)}
							/>
						</div>
					</div>

					<Divider style={{ borderColor: "#eb8110" }}>
						{" "}
						Faqs Section{" "}
					</Divider>

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
													<p class="text-gray-500 text-sm">
														{item.answer}
													</p>
												</div>
											</div>

											<div className="flex justify-center items-center gap-2">
												<BiEdit
													onClick={() =>
														faqEditHandler(
															item,
															index,
														)
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

					<Divider style={{ borderColor: "#eb8110" }}>
						Suggested Packages Section
					</Divider>

					<div className="w-full flex gap-8">
						<div className="w-[70%] flex flex-col gap-4">
							<label>Select Service</label>
							<Select
								showSearch
								allowClear
								optionFilterProp="label"
								filterOption={(input, option) =>
									option?.label
										?.toLowerCase()
										.includes(input.toLowerCase())
								}
								value={selectedServiceId}
								onChange={handleServiceSelect}
								placeholder="Select a Service"
								options={allServices
									.filter((s) => s.pageType === "service")
									.map((service, i) => ({
										label: `${i + 1}. ${service.title}`,
										value: service._id,
									}))}
							/>

							<label>Select Pricing</label>
							<Select
								value={selectedPriceId}
								onChange={setSelectedPriceId}
								placeholder="Select a Pricing"
								disabled={!selectedServicePrices.length}
								options={selectedServicePrices.map((price) => ({
									label: `${price.priceTitle} - £${price.price}`,
									value: price._id,
								}))}
							/>

							{/* <Button type="primary"   onClick={addSuggestedPackageHandler}>
      Add Suggested Package
    </Button> */}

							<button
								onClick={addSuggestedPackageHandler}
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

						<div className="w-[30%] p-6 bg-zinc-50 rounded-lg shadow-sm">
							<List
								dataSource={suggestedPackagesArr}
								renderItem={(item, index) => {
									const service = allServices.find(
										(s) => s._id === item.service,
									);
									const price = service?.prices?.find(
										(p) => p._id === item.priceId,
									);

									return (
										<List.Item key={index}>
											<div className="w-full flex justify-between items-center">
												<div>
													<h4>{service?.title}</h4>
													<p>
														{price?.priceTitle} - £
														{price?.price}
													</p>
												</div>

												<RiDeleteBin6Line
													className="text-red-500 cursor-pointer"
													onClick={() =>
														setSuggestedPackagesArr(
															(prev) =>
																prev.filter(
																	(_, i) =>
																		i !==
																		index,
																),
														)
													}
												/>
											</div>
										</List.Item>
									);
								}}
							/>
						</div>
					</div>

					<Divider style={{ borderColor: "#eb8110" }}>
						{" "}
						Final Submit Section{" "}
					</Divider>

					<div className="w-full flex flex-row items-center justify-between  ">
						{/* <Button className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" >{isEditMode ? 'Update Page' : 'Add New Page'} </Button> */}

						<button
							onClick={submitHandler}
							className="relative rounded-xl px-5 py-2.5 overflow-hidden group bg-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-orange-400 transition-all ease-out duration-300"
						>
							{" "}
							<span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>{" "}
							<span className="relative text-base font-semibold">
								{" "}
								{isEditMode
									? "Update Page"
									: "Add New Page"}{" "}
							</span>{" "}
						</button>

						{/* {isEditMode && ( <Button className="w-[10%] min-w-44 mt-4" onClick={dltPageBtnHandler} type="primary" danger > {" "} Delete this Page{" "} </Button> )} */}
					</div>

					<div className="w-full flex justify-start mt-16"></div>

					{/* {uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )} */}
					{/* {isError && ( <Alert message="Failed to add New Page!" type="error" showIcon closable /> )} */}
				</div>
			)}
		</>
	);
}
