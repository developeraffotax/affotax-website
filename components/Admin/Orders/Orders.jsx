"use client";

import { Space, Table, DatePicker, Button, Menu, Dropdown } from "antd";
import { AiOutlineEye, AiOutlineCloseCircle } from "react-icons/ai";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";

import axios from "axios";
import { OrdersContext } from "@/app/(admin)/admin/layout";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
dayjs.extend(quarterOfYear);

const { RangePicker } = DatePicker;

export default function Orders() {
	const [isLoading, setIsLoading] = useState(false);
	const [activeLabel, setActiveLabel] = useState("Select Filter");

	const [orders, setOrders] = useState([]);

	const [dateRange, setDateRange] = useState(null);

	const getQuarterRange = () => {
		const now = dayjs();
		return [now.startOf("quarter"), now.endOf("quarter")];
	};

	const getLastQuarterRange = () => {
		const now = dayjs().subtract(1, "quarter");
		return [now.startOf("quarter"), now.endOf("quarter")];
	};

	const monthlyFilters = {
		"This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
		"Last Month": [
			dayjs().subtract(1, "month").startOf("month"),
			dayjs().subtract(1, "month").endOf("month"),
		],
	};

	const quarterlyFilters = {
		"This Quarter": getQuarterRange(),
		"Last Quarter": getLastQuarterRange(),
	};

	const yearlyFilters = {
		"This Year": [dayjs().startOf("year"), dayjs().endOf("year")],
		"Last Year": [
			dayjs().subtract(1, "year").startOf("year"),
			dayjs().subtract(1, "year").endOf("year"),
		],
		"This Financial Year": [
			dayjs().subtract(1, "year").startOf("month"),
			dayjs().endOf("month"),
		],
		"Last Financial Year": [
			dayjs().subtract(2, "year").startOf("month"),
			dayjs().subtract(1, "year").endOf("month"),
		],
	};

	useEffect(() => {
		const getOrders = (async () => {
			const params = {};

			if (dateRange) {
				const [startDate, endDate] = dateRange;
				params.start = startDate.toISOString();
				params.end = endDate.toISOString();
			}

			try {
				setIsLoading(true);
				const { data, status } = await axios.get("/api/orders/get", {
					params: params,
				});
				console.log(data);
				if (status === 200) {
					setOrders(data.orders);
				}
			} catch (error) {
				console.log(error);
			} finally {
				setIsLoading(false);
			}
		})();
	}, [dateRange]);

	const { unread_count, set_unread_count } = useContext(OrdersContext);
	const update_order_handler = async (id) => {
		try {
			setIsLoading(true);
			const { data, status } = await axios.post(
				`/api/orders/update-isread?orderId=${id}`
			);

			if (status === 201) {
				setOrders((prev) => {
					const state = [...prev];

					const updated_order = state.findIndex(
						(el) => el._id === id
					);

					state[updated_order].isRead = true;

					return state;
				});

				set_unread_count((prev) => prev - 1);
			}
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const columns = [
		{
			title: "Order Number",
			dataIndex: "orderNumber",
			key: "orderNumber",
			render: (text, record) => (
				<Link
					href={`/admin/orders/${record._id}`}
					onClick={() => update_order_handler(record._id)}
				>
					{text}
				</Link>
			),
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
			render: (text) => (
				<p className="  font-semibold text-base   text-black px-2 py-1 rounded-md  ">
					{" "}
					£{text}{" "}
				</p>
			),
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
			render: (text) => (
				<p className="font-poppins  bg-orange-100 text-orange-800 px-2 py-1 rounded-md  ">
					{" "}
					{dayjs(text).format("DD-MMM-YYYY  hh:mm A")}{" "}
				</p>
			),
		},

		{
			title: "Action",
			key: "action",
			render: (_, record) => {
				console.log(record);
				return (
					<Space size="middle">
						{" "}
						<button
							className="flex gap-2 items-center text-sky-500 "
							onClick={() => update_order_handler(record._id)}
						>
							<AiOutlineEye className="text-sky-500 scale-150 active:scale-125 hover:scale-[1.7] transition-all" />{" "}
							Mark as Read
						</button>{" "}
					</Space>
				);
			},
		},
	];

	const rowClassName = (record) => {
		// You can apply a different class based on a condition, for example, based on age
		if (!record.isRead) {
			return "bg-orange-50 text-orange-800"; // This will apply the 'highlight-row' class to rows where the age is greater than 30
		}
		return "";
	};

	// const rangeMenu = (
	// 	<Menu
	// 		onClick={({ key }) => {
	// 			setActiveLabel(key)
	// 			setDateRange(predefinedRanges[key]);
	// 		}}
	// 		items={Object.keys(predefinedRanges).map((label) => ({
	// 			key: label,
	// 			label,
	// 		}))}
	// 	/>
	// );

	const rangeMenu = (
		<Menu
			onClick={({ key }) => {
				// Flatten all filters
				const allFilters = {
					...monthlyFilters,
					...quarterlyFilters,
					...yearlyFilters,
				};
				setDateRange(allFilters[key]);
				setActiveLabel(key);
			}}
		>
			<Menu.ItemGroup title="📆 Monthly Filters">
				{Object.keys(monthlyFilters).map((label) => (
					<Menu.Item key={label}>{label}</Menu.Item>
				))}
			</Menu.ItemGroup>

			<Menu.ItemGroup title="📉 Quarterly Filters">
				{Object.keys(quarterlyFilters).map((label) => (
					<Menu.Item key={label}>{label}</Menu.Item>
				))}
			</Menu.ItemGroup>

			<Menu.ItemGroup title="📅 Yearly Filters">
				{Object.keys(yearlyFilters).map((label) => (
					<Menu.Item key={label}>{label}</Menu.Item>
				))}
			</Menu.ItemGroup>
		</Menu>
	);

	return (
		<>
			<div className="flex flex-wrap gap-2 mb-4 items-center">
				<RangePicker
					value={dateRange}
					onChange={(values) => {
						if (values) setDateRange(values);
					}}
					format="DD-MM-YYYY"
					allowClear={false}
					className="ml-2"
				/>
				<Dropdown overlay={rangeMenu} placement="bottomLeft" arrow>
					<Button>{activeLabel}</Button>
				</Dropdown>

				<Button
					danger
					type="text"
					icon={<AiOutlineCloseCircle />}
					onClick={() => {
						setDateRange(null);
						setActiveLabel("Select Filter");
					}}
					className="ml-2"
				>
					Clear Filters
				</Button>
			</div>

			<Table
				columns={columns}
				dataSource={orders}
				size="large"
				showHeader
				bordered
				pagination
				rowClassName={rowClassName}
				loading={isLoading}
			/>
		</>
	);
}
