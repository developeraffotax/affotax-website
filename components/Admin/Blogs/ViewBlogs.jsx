'use client'


import { deleteBlog } from '@/lib/blogs';
import { ConfigProvider, Space, Spin, Table, Tag } from 'antd';
import axios from 'axios';
import Link from 'next/link';
import { MdDelete } from "react-icons/md";
import { useEffect, useRef, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from 'next/navigation';






export default function ViewBlogs({blogsData, refresh}) {


    const [isLoading, setIsLoading] = useState(false)
       
    const router = useRouter()
    
        const [data, setData] = useState(blogsData)

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

      setData(blogsDataMap)

      console.log(tableRef)

      setIsLoading(false)

     
  }, [])



















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
          title: 'Action',
          key: 'action',
          render: (_, record) => {
                console.log(record)
            return <Space size="middle"> <Link href={`/blog/${record.slug}`} target='_blank' ><AiOutlineEye className='text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> <Link href={`/admin/view-blogs/edit/${record._id}`}><BiEdit className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all'/></Link> <Link href={`/admin/view-blogs/delete/${record._id}`}><RiDeleteBin6Line className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> </Space>
          },
        },
      ];














    return (
        <>



<Table columns={columns} dataSource={data} size='large' showHeader bordered  />


 
        
    
        </>
    )
}















//onClick={() => setData(prev => prev.filter(el => el._id !== record._id))}