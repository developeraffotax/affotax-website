"use client";

import { useEffect, useState } from "react";
import { Alert, Button, Input, message, Select, Switch, Tabs, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from "@ant-design/icons";
import "react-quill/dist/quill.snow.css";
import ContentWithImageSection from "./ContentWithImageSection";
import { UploadImage } from "@/actions/blog";
import { createContentWithImageSection } from "@/actions/whoWeHelpPage";
import axios from "axios";
import UpdateContentWithImageSection from "./UpdateContentWithImage";
import { useRouter } from 'next/navigation'



export default function ContentWithImageWrapper() {





    const [url, setUrl] = useState("");

    const [isEditMode, setIsEditMode] = useState(false)


    const [activeTab, setActiveTab] = useState('')
	const [items, setItems] = useState([
       
    ]);





    const getPageData = async () => {
        



        try {
            const page = await axios.get(`/api/pages/${ url.split('/')[3]}`);
            
            if(page.status === 200) {
                setIsEditMode(true);
        const tempArr = page.data.ContentWithImageSection;

        const mappedArr = tempArr.map((el, index) => {
    
            return {
                key: el._id || null,
                label: `Section No. ${index + 1}`,
                children: <UpdateContentWithImageSection  {...el} url={url} />,
            }

        })

        setItems(mappedArr)
            }
        } catch(error) {
            message.error(`Failed to fetch this page! Kindly paste the valid link😠`);
        }
        


    }


    const urlBtnHandler = async () => {
       await getPageData()
    }




    const disableEditMode = () => {
        setIsEditMode(false);
        setItems([
            {
                key: '1',
                label: 'New Section',
                children: <ContentWithImageSection  url={localStorage?.getItem('page-url')} />,
              },
             
        ])
    }

	
    useEffect(() => {
        disableEditMode()
    }, [])






    const onChangeHandler = () => {

    }




        //Setting the page url on the first mounting
	useEffect(() => {
		const pageUrl = localStorage?.getItem('page-url');

		if(!pageUrl) {
			return;
		} else {
			setUrl(pageUrl)
		}


	}, [])








	return (
		<>
			<div className="w-full flex flex-col gap-4 justify-center items-center p-2">
            {isEditMode && <Button type="link" onClick={() => disableEditMode()}>I want to add a new Section😛</Button>}
            <div className=" w-full gap-8 flex items-center justify-between">
                
            <Input className="  " placeholder="The Url of the current Page"  variant="filled" value={url} onChange={(e) => setUrl(e.target.value) } />
            <Button type="primary" onClick={urlBtnHandler}>Load Data</Button>
            </div>

            <Tabs defaultActiveKey="1" className="w-full" items={items} onChange={onChangeHandler} />

            

            
            

            

				
			</div>
		</>
	);
}




