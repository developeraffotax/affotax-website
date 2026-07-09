// components/Charts/Site/PageViewsChart.jsx
"use client";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import axios from "axios";

export default function PageViewsChart({ dateRange, type }) {
  const [chartData, setChartData] = useState({
    categories: [],
    views: [],
    uniqueVisitors: [],
    interval: "",
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
        const { data } = await axios.get("/api/chart/site/pageviews/count", { params });
        setChartData(data);
      } catch (err) {
        console.error("Error fetching page views chart data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChartData();
  }, [dateRange]);

  const options = {
    chart: { type, toolbar: { show: false } },
    xaxis: {
      categories: chartData.categories,
      title: { text: chartData.interval === "daily" ? "Days" : "Months" },
      labels: { rotate: -45 },
    },
    yaxis: { title: { text: "Count" } },
    stroke: { curve: "smooth" },
    markers: { size: 4 },
    colors: ["#6366F1", "#F59E0B"],
    dataLabels: { enabled: true },
    tooltip: { y: { formatter: (val) => `${val}` } },
    plotOptions: { bar: { columnWidth: "40%" } },
  };

  const series = [
    { name: "Page Views", data: chartData.views },
    { name: "Unique Visitors", data: chartData.uniqueVisitors },
  ];

  if (loading) return <p>Loading chart...</p>;

  return (
    <div className="w-full">
      <Chart
        key={`${type}-${chartData.categories.length}`}
        options={options}
        series={series}
        type={type}
        height={350}
      />
    </div>
  );
}