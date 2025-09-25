import { Button, Dropdown, Menu, DatePicker, Space } from "antd";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
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
import CountChart from "./Charts/Orders/CountChart";
import SalesChart from "./Charts/Orders/SalesChart";
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import PerformanceStats from "./Charts/Orders/PerformanceStats";

dayjs.extend(quarterOfYear);

const { RangePicker } = DatePicker;

export default function DashboardComponent() {
  const [activeLabel, setActiveLabel] = useState("Select Filter");
  const [chartType, setChartType] = useState("bar");
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

  // ---- Menus ----
  const rangeMenu = (
    <Menu
      onClick={({ key }) => {
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

  const chartTypeMenu = (
    <Menu
      onClick={({ key }) => {
        setChartType(key);
      }}
    >
      <Menu.Item key="bar" icon={<BarChartOutlined />}>
        Bar Chart
      </Menu.Item>
      <Menu.Item key="area" icon={<AreaChartOutlined />}>
        Area Chart
      </Menu.Item>
      <Menu.Item key="line" icon={<LineChartOutlined />}>
        Line Chart
      </Menu.Item>
    </Menu> 
  );

  return (
    <div className="space-y-8">
      {/* Filter Section */}
      <div className="flex flex-wrap gap-3 items-center justify-between">
        <Space wrap>
          <RangePicker
            value={dateRange}
            onChange={(values) => {
              if (values) setDateRange(values);
            }}
            format="DD MMM YYYY"
            allowClear={false}
          />
          <Dropdown overlay={rangeMenu} placement="bottomLeft" arrow>
            <Button icon={<FilterOutlined />}>{activeLabel}</Button>
          </Dropdown>

          <Dropdown overlay={chartTypeMenu} placement="bottomLeft" arrow>
            <Button>
              {chartType === "bar" ? <BarChartOutlined /> : <AreaChartOutlined />}{" "}
              {chartType === "bar"
                ? "Bar"
                : chartType === "area"
                ? "Area"
                : "Line"}
            </Button>
          </Dropdown>

          <Button
            danger
            type="text"
            icon={<AiOutlineCloseCircle />}
            onClick={() => {
              setDateRange(null);
              setActiveLabel("Select Filter");
            }}
          >
            Clear Filters
          </Button>
        </Space>
      </div>

 
      <PerformanceStats dateRange={dateRange} activeLabel={activeLabel}/>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Orders Count Chart */}
        <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-xl p-4 bg-white min-h-[400px]">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Orders Overview
            </h2>
            <p className="text-sm text-gray-500">Total number of orders</p>
          </div>
          <CountChart dateRange={dateRange} type={chartType}  />
        </div>

        {/* Sales Chart */}
        <div className="shadow-[0_0_10px_rgba(0,0,0,0.2)] rounded-xl p-4 bg-white min-h-[400px]">
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              Sales Performance
            </h2>
            <p className="text-sm text-gray-500">Sales trend</p>
          </div>
          <SalesChart dateRange={dateRange} type={chartType}   />
        </div>
      </div>
    </div>
  );
}
