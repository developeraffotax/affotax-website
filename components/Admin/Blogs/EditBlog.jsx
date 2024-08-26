'use client'

import { useState, useRef, useEffect } from "react";
import { Alert, Button, Input, message, Upload } from 'antd';
import TextArea from "antd/es/input/TextArea";
import { UploadOutlined } from '@ant-design/icons';
import { InboxOutlined } from '@ant-design/icons';

import Dragger from "antd/es/upload/Dragger";

import { upload } from '@vercel/blob/client';
import { createBlog, updateBlog, UploadImage } from "@/actions/blog";
import { useFormState } from "react-dom"; 
import { useForm } from "antd/es/form/Form";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';






export default function EditBlog({id, oldTitle, oldDescription, oldImgUrl, oldMetaTitle, oldMetaDescription, oldValue}) {


  const [uploadSuccess, setUploadSuccess] = useState(false)
  const [isError, setIsError ] = useState(false)

  
  
  
  
  
  const [title, setTitle] = useState(oldTitle);
  const [description, setDescription] = useState(oldDescription);
  const [imgUrl, setImgUrl] = useState(oldImgUrl);
  

  const [metaTitle, setMetaTitle] = useState(oldMetaTitle);
  const [metaDescription, setMetaDescription] = useState(oldMetaDescription);

  
  const [value, setValue] = useState(oldValue);


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
      formData.append('imgUrl', imgUrl)
      formData.append('content', value)
      formData.append('id', id)




      

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
            <div className="w-full flex flex-col gap-4 justify-center items-center ">


            <div className="w-full flex gap-8 justify-center items-start p-4">
                


                <div className="w-full flex flex-col gap-2 ">
                <label>Title</label>
                <Input placeholder="Title of the Blog" value={title} onChange={(e) => setTitle(e.target.value)} />

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



                

               

                
                </div>


                
            </div>


            <div className="w-full h-40 flex flex-col  gap-2">
            <label>Content for the blog</label>
            <ReactQuill className="w-full  h-full" theme="snow" value={value} onChange={setValue} modules={{toolbar: toolbarOptions,}}   />
            </div>

            <div className="w-full flex justify-start mt-16"> 
            <Button className="w-[15%]"  onClick={submitHandler} type="primary">Update Blog</Button>
            </div>


            {uploadSuccess && <Alert message="New blog is added successfully!" type="success" showIcon closable />}
            {isError && <Alert message="Failed to add new blog!" type="error" showIcon closable />}


            </div>

        </>
    )
}