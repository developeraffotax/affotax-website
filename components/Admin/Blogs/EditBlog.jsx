'use client'

import { useState, useRef, useEffect } from "react";
import { Alert, Button, DatePicker, Input, message, Select, Upload } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from '@ant-design/icons';


import { createBlog, updateBlog, UploadImage } from "@/actions/blog";

import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import { FaUser } from "react-icons/fa";
import dayjs from 'dayjs';
import TinyMCE from "@/lib/TinyMCE";






export default function EditBlog({id, oldTitle, oldDescription, oldImgUrl, oldMetaTitle, oldMetaDescription, oldLdSchema, oldValue, oldKeywords, slug, oldDate, oldAuthor}) {


  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [isError, setIsError ] = useState(false)

  
  
  
  
  
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  const [imgUrl, setImgUrl] = useState(oldImgUrl);
  

  const [metaTitle, setMetaTitle] = useState(oldMetaTitle);
  const [metaDescription, setMetaDescription] = useState(oldMetaDescription);

  
  const [value, setValue] = useState(oldValue);

  const [keywords, setKeywords] = useState(oldKeywords)


  const [url, setUrl] = useState(window.location.origin + '/blog/' + slug);


  const [date, setDate] = useState(dayjs(oldDate));
	const [dateString, setDateString] = useState(oldDate);
	const [author, setAuthor] = useState(oldAuthor);

  const [ldSchema, setLdSchema] = useState(oldLdSchema)


  const props = {
    name: 'imgFile',
    customRequest: async (file) => {
      console.log(file)
      const form = new FormData();
      form.append('imgFile', file.file)
      const res = await UploadImage(form);
      
      setImgUrl(res.url)
     file.onSuccess()


      return;
    },

   
    // headers: {
    //   authorization: 'authorization-text',
    // },
    multiple: false,
    
    
    onChange(info) {
        
        








      
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };


    const submitHandler = async () => {
      
      setUploadSuccess(false);
      setIsError(false)

      const formData = new FormData();

      formData.append('title', title)
      formData.append('description', description)
      formData.append('metaTitle', metaTitle)
      formData.append('metaDescription', metaDescription)
      formData.append('ldSchema', ldSchema)
      formData.append('imgUrl', imgUrl)
      formData.append('content', value)
      formData.append('id', id)
      formData.append('keywords', keywords)
      formData.append('slug', slug)
      formData.append('date', dateString)
      formData.append('author', author)





      

      const res = await updateBlog(formData);

        // if (res.success) {
        //   setUploadSuccess(res.success)

        // setTitle('')
        // setDescription('')
        // setImgUrl('')
        // setMetaTitle('')
        // setMetaDescription()
        // setValue('')
        // } else {
        //   setIsError(true)
        // }





    }





    const datePickerOnChangeHandler = (dateObj, dateString) => {
      console.log(dateObj, dateString);
  
      setDate(dateObj)
      setDateString(dateString)
      };
  
  
  
  
      const authorOnchangeHandler = (e) => {
      console.log(e.target.value);
  
      setAuthor(e.target.value)
      }


















    const toolbarOptions = [
      ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      ['blockquote', 'code-block'],
      ['link', 'image', 'video', 'formula'],
    
      [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
      [{ 'direction': 'rtl' }],                         // text direction
    
        // custom dropdown
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
    
      [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      [{ 'font': [] }],
      [{ 'align': [] }],
    
      ['clean']                   
                            // remove formatting button
    ]







    return (
        <>
            <div className="w-full flex flex-col gap-4 justify-center items-center p-2 ">



            <Input className="hover:cursor-pointer     active:scale-[.99] transition-all " placeholder="The Url of the current Page"  readOnly variant="filled" value={url} onClick={(e) => {
				e.target.select();

				document?.execCommand('copy');
        window?.getSelection().removeAllRanges();
       				
				message.success(`Url Copied!`);
			}}/>



            <div className="w-full flex gap-8 justify-center items-start ">
                


                <div className="w-full flex flex-col gap-2 ">
                <label>Title</label>
                <Input placeholder="Title of the Blog" value={title} onChange={(e) => {
                  setTitle(e.target.value);

                  // const slug = (e.target.value).toLocaleLowerCase().trim().replaceAll(" ", "-").replace(/[^\w\-]/g, '');
                  
                  // const url = window.location.origin + '/blog/' + slug;
                  // setUrl(url);
                }} />

                <label>Description</label>
                <TextArea rows={4} placeholder="Write a short description here!" maxLength={600} value={description} onChange={(e) => setDescription(e.target.value)}/>




                <div  className="w-full flex flex-row  gap-2 mt-4"> 
                    <div className="w-[40%] flex flex-col gap-2 "> <label>Select Image</label> <Upload  {...props}> <Button icon={<UploadOutlined />}>Click to Upload</Button> </Upload> </div>
                    <div className="w-[40%] flex flex-col gap-2 "> <label>Select Date</label> <DatePicker  onChange={datePickerOnChangeHandler} value={date}/> </div>
                    <div className="w-[40%] flex flex-col gap-2 "> <label className="">Author's Name</label> <Input onChange={authorOnchangeHandler} value={author} placeholder="Author's Name" prefix={<FaUser className="opacity-40" />} /> </div>
                </div>

                

                


                </div>





               

               

                <div className="w-full flex flex-col  gap-2">

                <label>Meta Title</label>
                <Input placeholder="Meta title for the blog" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />


                <label>Meta Description</label>
                <TextArea rows={4} placeholder="Write a short meta description here!" maxLength={600} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)}/>




                <label>Keywords</label>
                <Select mode="tags" style={{ width: '100%', }} placeholder="Keywords" onChange={(value) => { setKeywords(value) }} value={keywords} options={[]} />

                
                <label>LD-Schema</label>
						    <TextArea rows={4} placeholder="Paste ld-schema here!"   value={ldSchema} onChange={(e) => setLdSchema(e.target.value)} />

               

                
                </div>


                
            </div>


            <div className="w-full  flex flex-col  gap-2">
            <label>Content for the blog</label>
            {/* <ReactQuill className="w-full  " theme="snow" value={value} onChange={setValue} modules={{toolbar: toolbarOptions,}}   /> */}
            <TinyMCE  value={value} setValue={setValue} />

            <Button className="w-[10%] mt-4"  onClick={submitHandler} type="primary">Update Blog</Button>
            </div>

            


            {uploadSuccess && <Alert message="New blog is added successfully!" type="success" showIcon closable />}
            {isError && <Alert message="Failed to add new blog!" type="error" showIcon closable />}


            </div>

        </>
    )
}