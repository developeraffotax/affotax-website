"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined  } from "@ant-design/icons";
import { createHeroSection, deleteHeroSection, UploadImage } from "@/actions/whoWeHelpPage";
import axios from "axios";



export default function HeroSection() {

	const [isEditMode, setIsEditMode] = useState(false);
	
	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [heading, setHeading] = useState("");
    const [imageUrl, setImageUrl] = useState("");
	const [description1, setDescription1] = useState("");
	const [description2, setDescription2] = useState("");

	
	
	const [btnText, setBtnText] = useState("");
	const [btnLink, setBtnLink] = useState("");
	

	const [url, setUrl] = useState('');
	


	//Setting the page url on the first mounting
	useEffect(() => {
		const pageUrl = localStorage?.getItem('page-url');

		if(!pageUrl) {
			return;
		} else {
			setUrl(pageUrl)
		}


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


		formData.append("btnText", btnText);
		formData.append("btnLink", btnLink);

		formData.append("slug", url.split('/')[3]);

		const res = await createHeroSection(formData);

		

		if (res.success) {
			setUploadSuccess(res.success);

			setHeading("");
			setImageUrl("");
			setDescription1("");
			setDescription2("");

			setBtnText("");
			setBtnLink("");
		} else {
			setIsError(true);
		}
	};





	
    const getPageData = async () => {
        

		console.log(url)

        try {
            const page = await axios.get(`/api/pages/${ url.split('/')[3]}`);
			

			console.log(page)

            if(page.status === 200) {
                setIsEditMode(true);
        		const HeroSection = page.data.HeroSection;


				setHeading(HeroSection.heading);
				setImageUrl(HeroSection.imageUrl);
				setDescription1(HeroSection.description1);
				setDescription2(HeroSection.description2);

				setBtnText(HeroSection.btnText);
				setBtnLink(HeroSection.btnLink);



			
            }
        } catch(error) {
            message.error(`Failed to fetch this page! Kindly paste the valid link😠`);
        }
        


    }








	
    const dltSectionBtnHandler = async () => {
		 setIsError(false);

         const formData = new FormData();
		 formData.append("slug",  url.split('/')[3]);
		
        try {
            
	         const res = await deleteHeroSection(formData);


            if (res.success === true) {
				message.success(`Section deleted successfully`);
				setIsEditMode(false);
			} else if (res.success === false) {
				message.error(`Failed to delete the section`);
			}
            


        } catch (error) {
            console.log(error);
        }

		
	};




	const disableEditMode = () => {
		setIsEditMode(false);

			setHeading("");
			setImageUrl("");
			setDescription1("");
			setDescription2("");

			setBtnText("");
			setBtnLink(""); 
			
	}





    



	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">

			{isEditMode && <Button type="link" onClick={disableEditMode }>I want to add a new Hero Section😛</Button>}
			<div className="w-full flex items-center justify-between gap-8">
			<Input className=" " placeholder="The Url of the current Page"  variant="filled" value={url} onChange={ e => setUrl(e.target.value) }/>
			<Button type="primary" onClick={getPageData}>Load Data</Button>
			</div>
			

				<div className="w-full flex gap-8 justify-center items-start ">
					<div className="w-full flex flex-col gap-2 ">
						<label>Heading</label>
						<Input placeholder="Title of the Blog" value={heading} onChange={(e) => { setHeading(e.target.value); }} />

						<label>Hero Image</label>
						<Upload {...props}> {" "} <Button icon={<UploadOutlined />}> Click to Upload </Button>{" "} </Upload>

						<label>Description 1</label>
						<TextArea rows={4} placeholder="Write a short description here!" maxLength={800} value={description1} onChange={(e) => setDescription1(e.target.value)} />

						<label>Description 2</label>
						<TextArea rows={4} placeholder="Write another short description here!" maxLength={800} value={description2} onChange={(e) => setDescription2(e.target.value)} />
					</div>

					<div className="w-full flex flex-col  gap-2">
						

                        <label>Hero Button Text</label>
                        <Input placeholder="Hero Button Text" value={btnText} onChange={(e) => setBtnText(e.target.value)} />

                        <label>Hero Button Link</label>
                        <Input placeholder="Hero Button Text" value={btnLink} onChange={(e) => setBtnLink(e.target.value)} />
					</div>
				</div>

				<div className="w-full flex flex-row justify-between items-center  ">
					

					<Button    className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" > {isEditMode ? 'Update Hero Section' : 'Add Hero Section'} </Button>
					{isEditMode && <Button className="w-[10%] min-w-44 mt-4" onClick={dltSectionBtnHandler} type="primary" danger> {" "} Delete Hero Section{" "} </Button>}
					
				</div>

				<div className="w-full flex justify-start mt-16"></div>

				{uploadSuccess && ( <Alert message="Hero Section is added successfully!" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to add Hero Section!" type="error" showIcon closable /> )}
			</div>
		</>
	);
}



