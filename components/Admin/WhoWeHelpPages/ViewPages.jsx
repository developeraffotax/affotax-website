'use client'

import { Space, Spin, Table } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LoadingOutlined } from '@ant-design/icons';






export default function ViewPages() {


    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState({
        is: false,
        msg: ''
    });

    


    const getAllPages = async () => {
        setError({is: false, msg: ''})
        setIsLoading(true);
        try {
            const res = await axios.get('/api/get-all-pages');

            setIsLoading(false);
            if (res.status === 200) {
                setData(res.data)
            } else {
                setError({is: true, msg: 'Error occured while fetching data!'})
            }
        } catch (error) {
            setIsLoading(false);
            setError({is: true, msg: 'Error occured while fetching data!'})
        }

    }

    useEffect(() => {
        
        getAllPages();


    }, [])






    const columns = [
        // {
        //     title: 'Sr.',
        //     dataIndex: 'key',
        //     key: 'key',
        //     // render: (text) => <strong>{text}</strong>,
            
        //   },
        {
          title: 'Page Title',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <a>{text}</a>,
          
        },
        {
          title: 'Slug',
          dataIndex: 'slug',
          key: 'slug',
          
        },
        
        
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => {
                console.log(record)
            return <Space size="middle"> <Link href={`/${record.slug}`} target='_blank' ><AiOutlineEye className='text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> <Link href={`/admin/create-page/create?page=${record.slug}`}><BiEdit className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all'/></Link> <Link href={`/admin/view-blogs/delete/${record._id}`}><RiDeleteBin6Line className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> </Space>
          },
        },
      ];



    return (
        <Table columns={columns} dataSource={data} size='large' showHeader loading={isLoading && <Spin indicator={<LoadingOutlined spin />} size="large" />}  />
    )
} 


