'use client'


import { deleteBlog } from '@/lib/blogs';
import { ConfigProvider, Input, Space, Spin, Table, Tag } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from 'next/navigation';
import { FcSearch } from 'react-icons/fc';






export default function ViewBlogs({blogsData, refresh}) {


    const [isLoading, setIsLoading] = useState(false)
       
    const router = useRouter()
    
        const [fetchedData, setFetchedData] = useState(blogsData);
        const [filteredData, setFilteredData] = useState([]);

        const tableRef = useRef()

  

    useEffect(() => {

      setIsLoading(true)

      if (refresh) {
        window.location.replace('/admin/view-blogs')
      }

      const blogsDataMap = blogsData?.map((el, index) => {
          return {
              key: index + 1,
              ...el
          }
      })

      setFetchedData(blogsDataMap)
      setFilteredData(blogsDataMap)

 

      setIsLoading(false)

     
  }, [])








      //Search Filter
      const onChange = (event) => {
        
        const value = event.target.value;

        const filteredArr = fetchedData.filter((el) => {

            const typedValue = value.trim().toLowerCase();
            const titleValue = el.title.trim().toLowerCase();
            const isPresent = titleValue.includes(typedValue);
            
            if(!isPresent) {

                let typed = typedValue || '';
                if (typed.charAt(0) === '/') {   
                    typed = typed.slice(1);
                }
                
                const isUrlSame = el.slug?.includes(typed);
                return isUrlSame;

            }

            return isPresent
        });


        setFilteredData(filteredArr);

    }

















    const columns = [
        {
            title: 'Sr.',
            dataIndex: 'key',
            width: '6%',
            key: 'key',
            render: (text, record, index) => <strong className="flex font-poppins items-center justify-center h-full w-full bg-orange-100 text-orange-800 font-semibold  rounded-xl p-2" >{text}</strong>,
            
          },
        {
          title: 'Title',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
          
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
          
        },

        {
          title: 'Slug',
          dataIndex: 'slug',
          key: 'slug',
          
          render: (text) => <p className="font-poppins  bg-orange-100 text-orange-800 px-2 py-1 rounded-md  ">/{text}</p>,
          
        },
        
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => {
            
            return <Space size="middle"> <Link href={`/blog/${record.slug}`} target='_blank' ><AiOutlineEye className='text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> <Link href={`/admin/view-blogs/edit/${record._id}`}><BiEdit className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all'/></Link> <Link href={`/admin/view-blogs/delete/${record._id}`}><RiDeleteBin6Line className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> </Space>
          },
        },
      ];














    return (
        <>

<Input className=" mb-6 "  style={{ width: '30%', }} prefix={<FcSearch className="text-lg " />}  placeholder="Enter the Page Title OR URL" onChange={onChange}    allowClear />

<Table columns={columns} dataSource={filteredData} size='large' showHeader bordered  />


 
        
    
        </>
    )
}















//onClick={() => setData(prev => prev.filter(el => el._id !== record._id))}