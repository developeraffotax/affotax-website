"use client";

import { useEffect, useMemo, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export default function CountChart({ dateRange, type, setTotalOrders }) {
  const [chartData, setChartData] = useState({
    categories: [],
    count: [],
    interval: ''
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
        const params = {};

			if (dateRange) {
				const [startDate, endDate] = dateRange;
				params.start = startDate.toISOString();
				params.end = endDate.toISOString();
			}
       
      try {
        
        const { data } = await axios.get("/api/chart/orders/count", {
          params: params,
          
        });

        setChartData({
          categories: data.categories,
          count: data.count,
          interval: data.interval
        });

        setTotalOrders({
          total: data.totalOrders,
          
        })
      } catch (err) {
        console.error("Error fetching chart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [ dateRange, ]);








    const options = {
    chart: {
      type: type,
      toolbar: { show: false },
    },
    xaxis: {
      categories: chartData.categories,
      title: { text: chartData.interval === "daily" ? "Days" : "Months" },
      labels: { rotate: -45 },
    },
    yaxis: {
      title: { text: "No. of Orders" },
    },
    stroke: { curve: "smooth" },
   

    
     
     
    markers: { size: 4 },


    colors: ["#1461de",  ],
    dataLabels: {
      enabled: true,
      
    },
    tooltip: {
      y: {
        formatter: (val) => `${val} orders`,
      },
    },


     plotOptions: {
    bar: {
      columnWidth: chartData.categories.length * 80 > 800 
        ? "40%" // fallback to relative width
        : `${(80 / (chartData.categories.length * 100)) * 10000}%`, 
      // simpler: just lock columnWidth so they don’t exceed ~80px
      columnWidth: "40%", // default
    },
  },
    





  };

  const series = [
    {
      name: "Orders",
      data: chartData.count,
    },
  ];

  if (loading) return <p>Loading chart...</p>;

  return (
    <div className="w-full">
      <Chart  key={`${type}-${chartData.categories.length}`} options={options} series={series} type={type} height={350} />
    </div>
  );
}
