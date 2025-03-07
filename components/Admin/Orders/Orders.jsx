"use client";

import { Space, Table } from "antd";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { AiOutlineEye } from "react-icons/ai";
import axios from "axios";
import { OrdersContext } from "@/app/(admin)/admin/layout";



export default function Orders( ) {

	const [isLoading, setIsLoading] = useState(false)

	const [orders, setOrders] = useState([]);

	useEffect(() => {

		 
		const getOrders = (async () => {
			try {
				setIsLoading(true)
				const {data, status} = await axios.get('/api/orders/get');
				console.log(data)
				if(status === 200) {
					setOrders(data.orders)
				}
			} catch (error) {
				console.log(error)
			} finally {
				setIsLoading(false)
			}


		})()
		




	}, [])

	const {unread_count, set_unread_count} = useContext(OrdersContext)
	const update_order_handler = async (id) => {
		
		
		try {
			setIsLoading(true)
			const { data, status} = await axios.post(`/api/orders/update-isread?orderId=${id}`);

			if(status === 201) {
				setOrders((prev) => {

					const state = [...prev]

					const updated_order = state.findIndex(el => el._id === id);

					state[updated_order].isRead = true;

					
					return state
				})

				set_unread_count(prev => prev - 1)
			}
		} catch (error) {
			console.log(error)
		} finally {
			setIsLoading(false)
		}

	}

	const columns = [
		{
			title: "Order Number",
			dataIndex: "orderNumber",
			key: "orderNumber",
			render: (text, record) => ( <Link href={`/admin/orders/${record._id}`} onClick={() => update_order_handler(record._id)} >{text}</Link> ),
		},
		{
			title: "Payment Status",
			dataIndex: "payment_status",
			key: "payment_status",
		},

		{
			title: "Total Price",
			dataIndex: "totalPrice",
			key: "totalPrice",
			render: (text) => ( <p className="  font-semibold text-base   text-black px-2 py-1 rounded-md  "> £{text} </p> ),
		},

		{
			title: "Total Price Without VAT",
			dataIndex: "totalPriceWithoutVat",
			key: "totalPriceWithoutVat",
			render: (text) => <p className=" ">£{text}</p>,
		},

		{
			title: "VAT | 20%",
			dataIndex: "vat",
			key: "vat",
			render: (text) => <p className=" ">£{text}</p>,
		},

		{
			title: "Ordered At",
			dataIndex: "createdAt",
			key: "createdAt",
			render: (text) => ( <p className="font-poppins  bg-orange-100 text-orange-800 px-2 py-1 rounded-md  "> {dayjs(text).format("DD-MMM-YYYY  hh:mm A")} </p> ),
		},

		{
				  title: 'Action',
				  key: 'action',
				  render: (_, record) => {
						console.log(record)
					return <Space size="middle"> <button className="flex gap-2 items-center text-sky-500 " onClick={() => update_order_handler(record._id)}><AiOutlineEye className='text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all' /> Mark as Read</button> </Space>
				  },
				},
	];

 

		const rowClassName = (record) => {
		  // You can apply a different class based on a condition, for example, based on age
		  if (!record.isRead) {
			return 'bg-orange-50 text-orange-800'; // This will apply the 'highlight-row' class to rows where the age is greater than 30
		  }
		  return '';
		};


	return (
		<>
			<Table columns={columns} dataSource={orders} size="large" showHeader bordered  pagination rowClassName={rowClassName} loading={isLoading}/>
		</>
	);
}
