import {
	BarChartOutlined,
	AreaChartOutlined,
	FilterOutlined,
	LineChartOutlined,
	ArrowUpOutlined,
	ArrowDownOutlined,
	ShoppingCartOutlined,
	DollarOutlined,
	UserOutlined,
} from "@ant-design/icons";
import axios from "axios";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import ChangeLabel from "./ChangeLabel";

const PerformanceStats = ({ dateRange, activeLabel }) => {

	 


	const [totalOrders, setTotalOrders] = useState({
		total: 0,
		change: 0,
	});

	const [totalSales, setTotalSales] = useState({
		total: 0,
		change: 0,
	});

		const [totalCustomers, setTotalCustomers] = useState({
		total: 0,
		change: 0,
	});

	const [isLoading, setIsLoading] = useState(false);



	// add near your existing state declarations
const [totalViews, setTotalViews] = useState({ total: 0, change: 0 });
const [uniqueVisitors, setUniqueVisitors] = useState({ total: 0, change: 0 });
const [totalQuotes, setTotalQuotes] = useState({ total: 0, change: 0 });

// extend getStats to also hit the new endpoint
const getSiteStats = useCallback(async () => {
  const params = {};
  if (dateRange) {
    const [startDate, endDate] = dateRange;
    params.start = startDate.toISOString();
    params.end = endDate.toISOString();
  }

  try {
    const { data } = await axios.get("/api/chart/site/stats", { params });

    setTotalViews({ total: data.totalViews, change: data.viewsPercentChange });
    setUniqueVisitors({ total: data.totalUniqueVisitors, change: data.uniqueVisitorsPercentChange });
    setTotalQuotes({ total: data.totalQuotes, change: data.quotesPercentChange });
  } catch (err) {
    console.error("Error fetching site stats:", err);
  }
}, [dateRange]);

 

	const getStats = useCallback(async () => {
		const params = {};
		setIsLoading(true);
		if (dateRange) {
			const [startDate, endDate] = dateRange;
			params.start = startDate.toISOString();
			params.end = endDate.toISOString();
		}

		try {
			const { data } = await axios.get("/api/chart/orders/stats", {
				params: params,
			});

			console.log("Stats data:", data);
			setTotalOrders({
				total: data.totalOrders,
				change: data.ordersPercentChange,
			});

			setTotalSales({
				total: data.totalSales,
				change: data.salesPercentChange,
			});


			// setTotalCustomers({
			// 	total: data.totalCustomers,
			// 	change: data.customersPercentChange,
			// })
		 
		} catch (err) {
			console.error("Error fetching chart data:", err);
		} finally {
			setIsLoading(false);
		}
	}, [dateRange]);


	useEffect(() => {
		getStats();
		 getSiteStats();
	}, [getStats,  getSiteStats]);





	return (
		<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
			{/* Total Orders */}
			<div className="rounded-xl p-5 bg-gradient-to-br from-blue-50 to-blue-100 shadow-md flex items-center justify-between transition-all hover:scale-[1.02]">
				<div>
					<p className="text-sm text-gray-600">Total Orders</p>
					<h3 className="text-2xl font-bold text-gray-800">
						{totalOrders.total}
					</h3>
					<span className="flex items-center text-green-600 text-sm font-medium mt-1">
						 
						 <ChangeLabel percent={totalOrders.change} dateRange={dateRange}/>
					</span>
				</div>
				<div className="p-3 bg-blue-500 rounded-full text-white shadow-lg">
					<ShoppingCartOutlined style={{ fontSize: "22px" }} />
				</div>
			</div>
			 
			<div className="rounded-xl p-5 bg-gradient-to-br from-green-50 to-green-100 shadow-md flex items-center justify-between transition-all hover:scale-[1.02]">
				<div>
					<p className="text-sm text-gray-600">Total Sales</p>
					<h3 className="text-2xl font-bold text-gray-800">
						£{totalSales.total}
					</h3>
					<span className="flex items-center text-green-600 text-sm font-medium mt-1">
					 <ChangeLabel percent={totalSales.change} dateRange={dateRange}/>
						</span>
				</div>
				<div className="p-3 bg-green-500 rounded-full text-white shadow-lg">
					<DollarOutlined style={{ fontSize: "22px" }} />
				</div>
			</div>
			{/* Customers */}
			{/* <div className="rounded-xl p-5 bg-gradient-to-br from-purple-50 to-purple-100 shadow-md flex items-center justify-between">
				<div>
					<p className="text-sm text-gray-600">Total Customers</p>
					<h3 className="text-2xl font-bold text-gray-800">{totalCustomers.total}</h3>
					<span className="flex items-center text-red-600 text-sm font-medium mt-1">
             <ChangeLabel percent={totalCustomers.change} dateRange={dateRange}/>
            </span>
				</div>
				<div className="p-3 bg-purple-500 rounded-full text-white shadow-lg">
					<UserOutlined style={{ fontSize: "22px" }} />
				</div>
			</div> */}










			<div className="rounded-xl p-5 bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md flex items-center justify-between transition-all hover:scale-[1.02]">
  <div>
    <p className="text-sm text-gray-600">Page Views</p>
    <h3 className="text-2xl font-bold text-gray-800">{totalViews.total}</h3>
    <span className="flex items-center text-sm font-medium mt-1">
      <ChangeLabel percent={totalViews.change} dateRange={dateRange} />
    </span>
  </div>
  <div className="p-3 bg-indigo-500 rounded-full text-white shadow-lg">
    <AreaChartOutlined style={{ fontSize: "22px" }} />
  </div>
</div>

<div className="rounded-xl p-5 bg-gradient-to-br from-pink-50 to-pink-100 shadow-md flex items-center justify-between transition-all hover:scale-[1.02]">
  <div>
    <p className="text-sm text-gray-600">Unique Visitors</p>
    <h3 className="text-2xl font-bold text-gray-800">{uniqueVisitors.total}</h3>
    <span className="flex items-center text-sm font-medium mt-1">
      <ChangeLabel percent={uniqueVisitors.change} dateRange={dateRange} />
    </span>
  </div>
  <div className="p-3 bg-pink-600 rounded-full text-white shadow-lg">
    <UserOutlined style={{ fontSize: "22px" }} />
  </div>
</div>

<div className="rounded-xl p-5 bg-gradient-to-br from-orange-50 to-orange-100 shadow-md flex items-center justify-between transition-all hover:scale-[1.02]">
  <div>
    <p className="text-sm text-gray-600">Quote Requests</p>
    <h3 className="text-2xl font-bold text-gray-800">{totalQuotes.total}</h3>
    <span className="flex items-center text-sm font-medium mt-1">
      <ChangeLabel percent={totalQuotes.change} dateRange={dateRange} />
    </span>
  </div>
  <div className="p-3 bg-orange-500 rounded-full text-white shadow-lg">
    <FilterOutlined style={{ fontSize: "22px" }} />
  </div>
</div>







		</div>
	);
};

export default PerformanceStats;
