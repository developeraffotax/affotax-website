"use client"

import { Button, Input, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { UploadOutlined } from "@ant-design/icons";
import { UploadImage } from "@/actions/blog";
import { v4 as uuidv4 } from 'uuid';
import mongoose from "mongoose";

const EditWhyChooseUs = ({ WhyChooseUsSectionHeading, WhyChooseUsSectionArray, setWhyChooseUsSectionHeading, setWhyChooseUsSectionArray, }) => {
	// create array handlers here for this section



    const [imgFile, setImgFile] = useState(null);



    const [title, setTitle] = useState('');
     const [content, setContent] = useState('');

     const [iconUrl, setIconUrl] = useState('');

    const [editId, setEditId] = useState('');

    









    const onEdit = (id) => {

        setEditId(id);

        setImgFile(null)

        const toBeEditItem = WhyChooseUsSectionArray.find((el) => el._id === id);
        setTitle(toBeEditItem.title)
        setContent(toBeEditItem.content)
        setIconUrl(toBeEditItem.iconUrl)
        




    }



    const onDelete = (id) => {

        
        setWhyChooseUsSectionArray((prev) => {

            return [...prev].filter((el) => el._id !== id);


        })
        





    }





    const onComplete = async () => {


        const newArr = [...WhyChooseUsSectionArray]

        if (editId ){
            const editIndex = newArr.findIndex((el) => el._id === editId);

            newArr[editIndex].title = title;
            newArr[editIndex].content = content;

                if (imgFile) {

                    console.log('in the image file')
                    const form = new FormData();
                    form.append("imgFile", imgFile);
                    const res = await UploadImage(form);
                    
                    newArr[editIndex].iconUrl = res.url;

                    setWhyChooseUsSectionArray(newArr)
                } else {
                    setWhyChooseUsSectionArray(newArr)
                }

        } else {

                const obj = {
                    _id: new mongoose.Types.ObjectId(),
                    title: title,
                    content: content,
                    iconUrl: ''
                }

                if (imgFile) {

                    console.log('in the image file')
                    const form = new FormData();
                    form.append("imgFile", imgFile);
                    const res = await UploadImage(form);
                    
                    obj.iconUrl = res.url;

                    newArr.push(obj)
                    setWhyChooseUsSectionArray(newArr)

                } else {
                    obj.iconUrl = '';

                    newArr.push(obj)
                    setWhyChooseUsSectionArray(newArr)
                }


        }


        

        setIconUrl('');
        setImgFile(null);
        setEditId('');
        setTitle('');
        setContent('');
    }








	// const props = {
	// 	name: "imgFile",
	// 	customRequest: async (file) => {
	// 		console.log(file);
	// 		const form = new FormData();
	// 		form.append("imgFile", file.file);
	// 		const res = await UploadImage(form);

	// 		setIconUrl(res.url);
	// 		file.onSuccess();

	// 		return;
	// 	},

	// 	multiple: false,

	// 	onChange(info) {
	// 		if (info.file.status === "done") {
	// 			message.success(`${info.file.name} file uploaded successfully`);
	// 		} else if (info.file.status === "error") {
	// 			message.error(`${info.file.name} file upload failed.`);
	// 		}
	// 	},
	// };




console.log(WhyChooseUsSectionArray)







	return (
		<section className="w-full flex flex-row gap-16 justify-center items-start ">
			<div className="w-[50%] flex flex-col justify-center items-center ">
				<div className="w-full">
					<label>Heading</label>
					<Input placeholder="Heading for this Section" value={WhyChooseUsSectionHeading} onChange={(e) => setWhyChooseUsSectionHeading(e.target.value) } />
				</div>

				<ul className="w-full ">
					{WhyChooseUsSectionArray.map((el) => {
						return (
							<li key={el._id} className="flex-start group relative flex lg:flex-col" >
								<div className="ml-6 lg:ml-0 lg:mt-10">
									{/* <div><img src={el.iconUrl} alt={el.title} /> </div> */}
									<div className="w-full flex justify-between items-center gap-8">
                                    <h3 className="text-xl font-bold text-gray-900 before:mb-2 before:block before:font-mono before:text-sm before:text-gray-500">
										{el.title}
									</h3>
                                    <div className="flex gap-4">
                                        <BiEdit onClick={() => onEdit(el._id)} className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer'/>
                                        <RiDeleteBin6Line onClick={() => onDelete(el._id)}  className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all cursor-pointer' />
                                    </div>
                                    </div>

									<h4 className="mt-2 text-base text-gray-700">
										{el.content}
									</h4>
								</div>
                                
							</li>
						);
					})}
				</ul>
			</div>

			<div className="w-[50%] flex flex-col justify-center items-center px-16 py-8 gap-8 bg-gradient-to-l from-gray-50 to-slate-50 rounded-2xl shadow-md ">


           <div className="w-full ">
            <label>Title</label>
            <Input placeholder="Edit Title" value={title} onChange={(e) => setTitle(e.target.value)} />
           </div>

            <div className="w-full ">
                <label>Content</label>
                <TextArea rows={4} placeholder="Edit Content" value={content} onChange={(e) => setContent(e.target.value)} />

            </div>

            <div className="w-full flex justify-between items-start gap-4">
                {/* <label>Upload Icon</label>
                <Upload {...props}> {" "} <Button icon={<UploadOutlined />}> Click to Upload </Button>{" "} </Upload> */}
                
                <form className="">
                <label class="text-base text-gray-500 font-semibold mb-2 block">Upload Image</label>
      <input type="file" onChange={(e) => setImgFile(e.target.files[0])}
        class="w-full text-gray-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
      <p class="text-xs text-gray-400 mt-2">PNG and JPG are Allowed.</p>
                
                </form>

                <div className="relative mt-4 ">

                {iconUrl &&  <span className="w-20 h-20 rounded-md absolute bg-indigo-200 -top-2 -left-2 z-10 "></span>}
                <div className="w-20 rounded-md shadow-md overflow-hidden z-30 relative "> <img src={iconUrl} /></div>


                </div>

            </div>

            <div className="w-full  flex justify-between items-center gap-5">

                <button onClick={onComplete} type='button' className='py-2.5 pl-6 pr-3.5 text-sm bg-indigo-50 text-indigo-500 rounded-full cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 flex items-center hover:bg-indigo-100'> {editId ? 'Update' : 'Add New'} <svg class='ml-3' width='6' height='10' viewBox='0 0 6 10' fill='none' xmlns='http://www.w3.org/2000/svg'> <path d='M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1' stroke='#5551FF' stroke-width='1.6' stroke-linecap='round' stroke-linejoin='round'></path> </svg> </button>
                {editId && <button onClick={() => {setEditId(''); setTitle(""); setContent(); setIconUrl();}} type='button' className='py-2.5 px-6 text-sm rounded-full font-semibold text-indigo-500 transition-all duration-500 hover:bg-indigo-100 hover:shadow-xs hover:text-indigo-700'>I want to add New🧡</button>
                }
            </div>
            

            </div>
		</section>
	);
};

export default EditWhyChooseUs;
