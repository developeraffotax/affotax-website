"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select, Switch, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";

import { createContentWithImageSection, deleteContentWithImageSection, updateContentWithImageSection, UploadImage, } from "@/actions/whoWeHelpPage";
 import ReactQuill from "react-quill";

export default function UpdateContentWithImageSection({slug: fSlug, heading: fHeading, html: fHtml, imageUrl: fImageUrl, imagePosition: fImagePosition, _id, url}) {
	

	const [uploadSuccess, setUploadSuccess] = useState(false);
	const [isError, setIsError] = useState(false);

	const [heading, setHeading] = useState(fHeading);
	const [html, setHtml] = useState(fHtml);
	const [imageUrl, setImageUrl] = useState(fImageUrl);
	const [isImageRight, setIsImageRight] = useState(() => {
		return fImagePosition === 'Left' ? false : true
	});






	//Image Upload Handling Props
	const uploadProps = {
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


		formData.append("_id", _id);
		formData.append("heading", heading);
		formData.append("html", html);
		formData.append("imageUrl", imageUrl);
		formData.append("imagePosition", `${isImageRight ? 'Right' : 'Left'}`);

		formData.append("slug", url.split('/')[3]);

		const res = await updateContentWithImageSection(formData);

        console.log(_id, res)

		if (res.success) {
			setUploadSuccess(res.success);

			setHeading("");
			setHtml("");
			setImageUrl("");
			

		} else {
			setIsError(true);
		}
	};









    const dltSectionBtnHandler = async () => {
		setIsError(false);


        const formData = new FormData();


		formData.append("_id", _id);
		formData.append("slug", fSlug);
		


        try {

            
            
            const res = await deleteContentWithImageSection(formData);


            if (res.success === true) {
				message.success(`Section deleted successfully`);
			} else if (res.success === false) {
				message.error(`Failed to delete the section`);
			}
            





        } catch (error) {
            console.log(error);
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
				

				<div className="w-full flex gap-8 justify-center items-start ">
					<div className="w-full flex flex-col gap-2 ">
						<label>Heading</label>
						<Input placeholder="Heading of Section" value={heading} onChange={(e) => { setHeading(e.target.value); }} />
					</div>

					<div className="w-full flex flex-col  gap-2">
						<label> Image</label>
						<Upload {...uploadProps}> {" "} <Button icon={<UploadOutlined />}> {" "} Click to Upload{" "} </Button>{" "} </Upload>
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

					<div className="w-full flex justify-between items-center">
                    <Button className="w-[10%] min-w-44 mt-4" onClick={submitHandler} type="primary" > {" "} Update Section{" "} </Button>
					<Button className="w-[10%] min-w-44 mt-4" onClick={dltSectionBtnHandler} type="primary" danger> {" "} Delete Section{" "} </Button>
                    </div>
				</div>

				{uploadSuccess && ( <Alert message="Section updated successfully!🥰" type="success" showIcon closable /> )}
				{isError && ( <Alert message="Failed to update this Section!😥" type="error" showIcon closable /> )}
			</div>
		</>
	);
}




