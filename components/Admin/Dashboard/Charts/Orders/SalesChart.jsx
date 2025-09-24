"use client";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export default function SalesChart({ dateRange, type, setTotalSales }) {
  const [chartData, setChartData] = useState({
    categories: [],
    sales: [],
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
        
        const { data } = await axios.get("/api/chart/orders/sales", {
          params: params,
          
        });

        setChartData({
          categories: data.categories,
          count: data.sales,
          interval: data.interval
        });

        setTotalSales({
          total: data.totalSales?.toFixed(2),
        })
      } catch (err) {
        console.error("Error fetching chart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [ dateRange]);

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
      title: { text: "Sales" },
      labels: {
      formatter: (val) => `£${val}`, // GBP sign on Y-axis
    },
    },
    stroke: { curve: "smooth" },
    markers: { size: 4 },
    colors: ["#14B8A6",  ],
    dataLabels: {
      enabled: true,
      formatter: (val) => `£${val}`, // GBP sign on data labels
    },
    tooltip: {
      y: {
        formatter: (val) => `£${val} sales`,
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
      name: "Sales",
      data: chartData.count,
    },
  ];

  if (loading) return <p>Loading chart...</p>;

  return (
    <div className="w-full">
      <Chart key={`${type}-${chartData.categories.length}`} options={options} series={series} type={type} height={350} />
    </div>
  );
}
