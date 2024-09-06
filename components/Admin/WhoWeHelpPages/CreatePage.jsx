"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select} from "antd";
import TextArea from "antd/es/input/TextArea";

import { createNewPage, deleteNewPage, } from "@/actions/whoWeHelpPage";
import axios from "axios";



export default function CreatePage({pageSlug}) {

	const [isEditMode, setIsEditMode] = useState(false);


	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [title, setTitle] = useState("");

	const [metaTitle, setMetaTitle] = useState("");
	const [metaDescription, setMetaDescription] = useState("");
	const [keywords, setKeywords] = useState([]);

	const [slug, setSlug] = useState("");
	const [url, setUrl] = useState(() => {
		if(!pageSlug) {
			return "";
		}
		return window?.location?.origin + "/" + pageSlug;
	});

	useEffect(() => {
		if (pageSlug) {
			
			getPageData();
			localStorage?.setItem('page-url', url)
			console.log(url)

		} else {
			setUrl(window?.location?.origin + "/");
		}
	}, []);

	// useEffect(() => {
	// 	
	// }, [url])

	//Form Submit Handler
	const submitHandler = async () => {
		setIsError(false);

		const formData = new FormData();

		formData.append("title", title);

		formData.append("metaTitle", metaTitle);
		formData.append("metaDescription", metaDescription);
		formData.append("keywords", keywords);

		formData.append("slug", url.split('/')[3]);

		const res = await createNewPage(formData);
		localStorage?.setItem('page-url', url)
		console.log(res);

		if (res.success) {
			setUploadSuccess(res.success);

			if(!isEditMode) {
				setTitle("");
				setMetaTitle("");
				setMetaDescription();
				setKeywords([]);
			}

			message.success(`${isEditMode ? 'Page Updated' : 'New Page Added Successfully'}`);

	
		} else {
			setIsError(true);
		}
	};





	const getPageData = async () => {
        


        try {

			// let res;

			// if (pageSlug) {
			// 	 res = await axios.get(`/api/pages/${pageSlug}`);
			// 	 setUrl(window?.location?.origin + "/" + pageSlug);
			// } else {
				
			// }
			
			let res = await axios.get(`/api/pages/${ url.split('/')[3]}`);
			
            if(res.status === 200) {
                setIsEditMode(true);
        		const page = res.data;


				setTitle(page.title);
				setMetaTitle(page.metaTitle);
				setMetaDescription(page.metaDescription);
				setKeywords(page.keywords);

			
            }
        } catch(error) {
            message.error(`Failed to fetch this page! Kindly paste the valid link😠`);
        }
        


    }





	const dltPageBtnHandler = async () => {
		setIsError(false);

         const formData = new FormData();
		 formData.append("slug",  url.split('/')[3]);
		
        try {
            
	         const res = await deleteNewPage(formData);


            if (res.success === true) {
				message.success(`Page deleted successfully`);
				setIsEditMode(false);
			} else if (res.success === false) {
				message.error(`Failed to delete the page`);
			}
            


        } catch (error) {
			message.error(`Failed to delete the page`);
            console.log(error);
        }

	}











	
	const disableEditMode = () => {
		setIsEditMode(false);

		setTitle('');
		setMetaTitle('');
		setMetaDescription('');
		setKeywords('');
			
	}

	// onClick={(e) => { 
	// 	e.target.select();
	// 	 document?.execCommand("copy");
	// 	e.target.blur();
	// 	message.success(`Url Copied!`);
	// 	 }}


	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">

			{isEditMode && <Button type="link" onClick={disableEditMode }>I want to add a new Page😛</Button>}

			<div className="w-full flex items-center justify-between gap-8">

			<Input className="" placeholder="The Url of the current Page" variant="filled" value={url}  onChange={(e) => setUrl(e.target.value)} />

				<Button type="primary" onClick={getPageData}>Load Data</Button>		 
			</div>
				

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

				<div className="w-full flex flex-row items-center justify-between  ">
					<Button className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" >{isEditMode ? 'Update Page' : 'Add New Page'} </Button>
					{isEditMode && <Button className="w-[10%] min-w-44 mt-4" onClick={dltPageBtnHandler} type="primary" danger> {" "} Delete this Page{" "} </Button>}
				</div>

				<div className="w-full flex justify-start mt-16"></div>

				{/* {uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )} */}
				{isError && ( <Alert message="Failed to add New Page!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}


