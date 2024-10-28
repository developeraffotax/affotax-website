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
import Search from "antd/es/input/Search";





export default function ViewServicePages() {

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
            const res = await axios.get('/api/service-page/get-all');

            setIsLoading(false);
            if (res.status === 200) {

                const mappedArr = res.data.map((el, index) => {
                    return {
                        ...el,
                        sr: index + 1
                    }
                })

                setData(mappedArr)
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

        console.log(modalDltLink)

        try {
            
            setIsLoading(true)
            const res = await axios.delete(`/api/service-page/post-page/${modalDltLink}`)

            

            if (res.status === 201) {
                setData((prev) => {
                    return prev.filter(el => el.link !== modalDltLink) 
                })
    
                message.success('The Page has been deleted successfully!')
            } else {
                message.error('Error occured while deleting data!')
            }

           
            
        } catch (error) {
            console.log(error)
            message.error('Error occured while deleting data!')
        } finally {
            setModalDltLink('');
            setIsLoading(false);
            
        }
        
    }   





    
    const showModal = (link) => {
        setOpen(true);

        setModalDltLink(link)
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
            render: (text, record, index) => <strong className="flex font-poppins items-center justify-center h-full w-full bg-orange-100 text-orange-800 font-semibold  rounded-xl p-2" >{record.sr}</strong>,
            
          },
        {
          title: 'Page Title',
          dataIndex: 'title',
          key: 'title',
          render: (text) => <p className="font-poppins   ">{text}</p>,
          
        },
        {
          title: 'Link',
          dataIndex: 'link',
          key: 'link',
          
          render: (text) => <p className="font-poppins  bg-orange-100 text-orange-800 px-2 py-1 rounded-md  ">/{text}</p>,
          
        },
        
        
        {
          title: 'Action',
          
          render: (_, record) => {
                console.log(record , 'THE RECORD IS ')
                console.log(_, 'TH E_ IS ')




            return <Space size="middle"> <Link href={`/${record.link}`} target='_blank' ><AiOutlineEye className='text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></Link> <Link href={`/admin/service-page/create?page=${record.link}`}><BiEdit className='text-green-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all'/></Link> <button onClick={() => showModal(record.link)}><RiDeleteBin6Line className='text-red-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /></button> <Modal
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
            {/* <Search placeholder="input search text"   enterButton /> */}

        <Table columns={columns}   dataSource={data} size='large' showHeader pa loading={isLoading && <Spin indicator={<LoadingOutlined spin />} size="large" />}  />
        </>
    )
} 


