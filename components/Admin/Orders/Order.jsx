"use client";


import { List, Table, } from "antd";
import { useEffect,  useState } from "react";


export default function Order({ orderData }) {


	const [order, setOrder] = useState(JSON.parse(orderData));

	const [orderItems, setOrderItems] = useState([]);



	useEffect(() => {
		console.log(JSON.parse(orderData));

		const newOrderData = JSON.parse(orderData);
		setOrderItems((prev) => {
			return newOrderData.items.map((el) => {
				return {
					...el,
					key: el._id,
				};
			});
		});
	}, []);



	const columns = [
		{
			title: "Item Name",
			//   dataIndex: 'orderNumber',
			key: "item_name",
			render: (text, record) => (
				<p className="font-semibold ">{`${record.priceTitle} | ${record.pageTitle}`}</p>
			),
		},

		{
			title: "Price",
			dataIndex: "price",
			key: "price",
			render: (text) => <p className=" font-semibold   ">£{text}</p>,
		},
	];



	const expandedRowRender = (record, index, indent, expanded) => {
		console.log("THE RECORD IS >>>>>>>>>>>>>>>", record);
		return (
			<List
				// key={index}
				itemLayout="horizontal"
				dataSource={record.addOns}
				header={
					<h3 className="font-semibold text-base w-full text-start bg-orange-100 text-orange-800  p-1 px-4   ">
						AddOns for {record.pageTitle}
					</h3>
				}
				renderItem={(item, index) => (
					<List.Item className="p-0 ">
						<table className="">
							<tbody>
								<tr className="w-full grid grid-cols-2 justify-start gap-4 items-start  text-xs font-poppins    ">
									<td className=" font-[500]   text-start lg:px-4   ">
										{index + 1}. {item.priceTitle}
									</td>
									<td className=" font-[500]   text-end lg:px-4 ">
										£{item.price}
									</td>
								</tr>
							</tbody>
						</table>
					</List.Item>
				)}
			/>
		);
	};



	return (
		<>
			<div className="w-full flex justify-start items-start gap-5 ">
				<table className="border-collapse border w-full max-w-lg mb-4 ">
					<thead>
						<tr>
							<td colSpan={2}>
								<h3 className="font-semibold text-lg w-full text-start bg-orange-100 text-orange-800  p-1 px-4 ">
									Order Details
								</h3>
							</td>
						</tr>
					</thead>

					<tbody>
						<tr className=" font-poppins border-b  font-[500] ">
							<td className="px-2">Order Number</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								{order.orderNumber}
							</td>
						</tr>

						<tr className=" font-poppins border-b  font-[500]  ">
							<td className="px-2">Payment Status</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								{order.payment_status}
							</td>
						</tr>

						<tr className=" font-poppins border-b  font-[500]  ">
							<td className="px-2">Total Price without VAT</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								£{order.totalPriceWithoutVat}
							</td>
						</tr>

						<tr className=" font-poppins border-b  font-[500]  ">
							<td className="px-2">VAT | 20%</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								£{order.vat}
							</td>
						</tr>

						<tr className=" font-poppins border-b  font-[500]  ">
							<td className="px-2">Total Price</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								£{order.totalPrice}
							</td>
						</tr>
					</tbody>
				</table>



				<table className="border-collapse border w-full max-w-lg mb-4 ">
					<thead>
						<tr>
							<td colSpan={2}>
								<h3 className="font-semibold text-lg w-full text-start bg-orange-100 text-orange-800  p-1 px-4 ">
									Customer Details
								</h3>
							</td>
						</tr>
					</thead>

					<tbody>
						<tr className=" font-poppins border-b  font-[500] ">
							<td className="px-2">Customer Name</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								{order.customer_name}
							</td>
						</tr>

						<tr className=" font-poppins border-b  font-[500]  ">
							<td className="px-2">Customer Email</td>
							<td className="bg-gray-100 px-4 py-2 w-[50%]  ">
								{order.customer_email}
							</td>
						</tr>
					</tbody>
				</table>
			</div>



			<h2 className="font-poppins font-semibold text-base w-full text-center bg-orange-100 text-black  p-2   ">
				Ordered Items
			</h2>

			<Table
				className=""
				columns={columns}
				expandable={{
					 
					expandedRowRender: expandedRowRender,
					//   defaultExpandedRowKeys: ['0'],
				}}
				dataSource={orderItems}
				size="large"
				showHeader
				bordered
			/>
		</>
	);
}

 
