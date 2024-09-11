'use client'

import { message, Modal, Space, Spin, Table } from "antd";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LoadingOutlined } from '@ant-design/icons';
import { deleteNewPage } from "@/actions/whoWeHelpPage";
import { CgDanger } from "react-icons/cg";





export default function ViewPages() {

    const [open, setOpen] = useState(false);
    const [modalDltLink, setModalDltLink] = useState('')

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







    const deletePage = async () => {

        setOpen(false);

        const formData = new FormData();
        formData.append('slug', modalDltLink);

        try {
            
            setIsLoading(true)
            const isDeleted = await deleteNewPage(formData);

            if (!isDeleted) {
                message.error('Error occured while deleting data!')
            }

            setData((prev) => {
                return prev.filter(el => el.slug !== modalDltLink) 
            })

            message.success('The Page has been deleted successfully!');

            
        } catch (error) {
            message.error('Error occured while deleting data!')
        } finally {
            setModalDltLink('')
            setIsLoading(false);
            
        }
        
    }   



    const getRowClassName = (record, index) => {
        return index % 2 === 0 ? 'row-even' : 'row-odd';
      };



    
    const showModal = (slug) => {

        setOpen(true);
        setModalDltLink(slug)
      };


      const handleCancel = () => {
        setOpen(false);
        setModalDltLink('')
      };



    const columns = [
        {
            title: 'Sr.',
            width: '6%',
            key: 'serial-number',
            render: (text, record, index) => <strong className="flex font-poppins items-center justify-center h-full w-full bg-orange-100 text-orange-800 font-semibold  rounded-xl p-2" >{index + 1}</strong>,
            
          },
        {
          title: 'Page Title',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <p className="font-poppins   ">{text}</p>,
          
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
                console.log(_)
            return <Space size="middle"> <Link href={`/${record.slug}`} target='_blank' ><AiOutlineEye className='text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> <Link href={`/admin/create-page/create?page=${record.slug}`}><BiEdit className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all'/></Link> <button onClick={() => showModal(record.slug)}><RiDeleteBin6Line className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></button> <Modal
            open={open}
            title="Are you sure?"
            onOk={() => deletePage()}
            okType='danger'
            okText='Delete'
            onCancel={handleCancel}

          >
            <p className="text-md ">Are you sure you want to delete this page? <br />     <span className="text-red-500 text-sm  flex justify-start items-center gap-1 ">
            <CgDanger className="scale-125" /> Caution! This action is not reversible!</span></p>
            
          </Modal> </Space>
          },
        },
      ];



    return (
       <>
        <Table columns={columns}   dataSource={data} size='large' showHeader loading={isLoading && <Spin indicator={<LoadingOutlined spin />} size="large" />}  />
        </>
    )
} 


