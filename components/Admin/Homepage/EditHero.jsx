import { Button, Input, message, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";
import { UploadOutlined } from "@ant-design/icons";
import { UploadImage } from "@/actions/blog";
import { CustomEditor } from "@/lib/Editor";

const EditHero = ({heroHeading, heroHtml, HeroImageUrl, setHeroHeading, setHeroHtml, setHeroImageUrl}) => {



	const props = {
		name: "imgFile",
		customRequest: async (file) => {
			console.log(file);
			const form = new FormData();
			form.append("imgFile", file.file);
			const res = await UploadImage(form);

			//setImgUrl(res.url);
            setHeroImageUrl(res.url)
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
    
<div className="w-full flex gap-8 justify-start items-start ">

<div className="w-full flex flex-col  gap-2">
    <label>Heading</label>
    <Input placeholder="Heading for the page" value={heroHeading} onChange={(e) => setHeroHeading(e.target.value)} />

    <label>Content</label>
	<CustomEditor value={heroHtml} setValue={setHeroHtml} />
    {/* <TextArea rows={5} placeholder="Write a short description here!" maxLength={2000} value={html} onChange={inputHandler} /> */}

    <label>Select Image</label>
	<Upload {...props}> {" "} <Button icon={<UploadOutlined />}> Click to Upload </Button>{" "} </Upload>
    
</div>
</div>
  )
};

export default EditHero;
