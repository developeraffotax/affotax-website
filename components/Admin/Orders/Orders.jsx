"use client";

import { Table } from "antd";
import Link from "next/link";
import { useState } from "react";
import dayjs from "dayjs";



export default function Orders({ ordersData }) {

	const [orders, setOrders] = useState(JSON.parse(ordersData));


	const columns = [
		{
			title: "Order Number",
			dataIndex: "orderNumber",
			key: "orderNumber",
			render: (text, record) => ( <Link href={`/admin/orders/${record._id}`}>{text}</Link> ),
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
	];

  

	return (
		<>
			<Table columns={columns} dataSource={orders} size="large" showHeader bordered  pagination/>
		</>
	);
}
