'use client'

import { useState, useRef, useEffect } from "react";
import { Alert, Button, Input, message, Select, Upload } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';

import Dragger from "antd/es/upload/Dragger";

import { upload } from '@vercel/blob/client';
import { createBlog, UploadImage } from "@/actions/blog";
import { useFormState } from "react-dom"; 
import { useForm } from "antd/es/form/Form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';






export default function CreateBlog() {


  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [isError, setIsError ] = useState(false)

  
  
  
  
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  

  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');

  
  const [value, setValue] = useState('');

  const [keywords, setKeywords] = useState([]);

  const [url, setUrl] = useState('')


  useEffect(() => {
    setUrl(window?.location?.origin + '/blog/')
  }, [])
  
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

      const formData = new FormData()

      formData.append('title', title)
      formData.append('description', description)
      formData.append('metaTitle', metaTitle)
      formData.append('metaDescription', metaDescription)
      formData.append('imgUrl', imgUrl)
      formData.append('content', value)
      formData.append('keywords', keywords)




      

      const res = await createBlog(formData);

        if (res.success) {
          setUploadSuccess(res.success)

        setTitle('')
        setDescription('')
        setImgUrl('')
        setMetaTitle('')
        setMetaDescription()
        setValue('')
        setKeywords([])
        } else {
          setIsError(true)
        }





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
            <div className="w-full flex flex-col gap-4 justify-center items-center p-2">

            <Input className="hover:cursor-pointer  hover:bg-black/70 hover:text-white   active:scale-[.99] transition-all " placeholder="The Url of the current Page"  readOnly variant="filled" value={url} onClick={(e) => {
				e.target.select();

				document.execCommand('copy');
        window.getSelection().removeAllRanges();
       				
				message.success(`Url Copied!`);
			}}/>

            <div className="w-full flex gap-8 justify-center items-start ">
                


                <div className="w-full flex flex-col gap-2 ">
                <label>Title</label>
                <Input placeholder="Title of the Blog" value={title} onChange={(e) => {
                  setTitle(e.target.value);

                  const slug = (e.target.value).toLocaleLowerCase().trim().replaceAll(" ", "-").replace(/[^\w\-]/g, '');
                  
                  const url = window.location.origin + '/blog/' + slug;
                  setUrl(url);
                }} />

                <label>Description</label>
                <TextArea rows={4} placeholder="Write a short description here!" maxLength={300} value={description} onChange={(e) => setDescription(e.target.value)}/>


                <label>Select Image</label>
                <Upload  {...props}> <Button icon={<UploadOutlined />}>Click to Upload</Button> </Upload>

                </div>

               

                <div className="w-full flex flex-col  gap-2">

                <label>Meta Title</label>
                <Input placeholder="Meta title for the blog" value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} />


                <label>Meta Description</label>
                <TextArea rows={4} placeholder="Write a short meta description here!" maxLength={300} value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)}/>


                <label>Keywords</label>
                <Select mode="tags" style={{ width: '100%', }} placeholder="Keywords" onChange={(value) => {
                  console.log(value);
                  setKeywords(value)
                }} value={keywords} options={[]} />

               

                
                </div>


                
            </div>


            <div className="w-full flex flex-col  gap-2">
            <label>Content for the blog</label>
            <ReactQuill  className="w-full  "  theme="snow" value={value} onChange={setValue} modules={{toolbar: toolbarOptions,}}   />

            <Button className="w-[10%] mt-4"  onClick={submitHandler} type="primary">Add Post</Button>
            </div>

            <div className="w-full flex justify-start mt-16"> 
           
            </div>


            {uploadSuccess && <Alert message="New blog is added successfully!" type="success" showIcon closable />}
            {isError && <Alert message="Failed to add new blog!" type="error" showIcon closable />}


            </div>

        </>
    )
}