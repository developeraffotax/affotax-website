
import { Button, Dropdown, DatePicker, Card, Flex, Space, Segmented, Tabs } from "antd";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  BarChartOutlined,
  AreaChartOutlined,
  FilterOutlined,
  LineChartOutlined,
  ShoppingCartOutlined,
  DollarOutlined,
  GlobalOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import CountChart from "./Charts/Orders/CountChart";
import SalesChart from "./Charts/Orders/SalesChart";
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import PerformanceStats from "./Charts/Orders/PerformanceStats";
import PageViewsChart from "./Charts/site/PageViewsChart";
import QuoteSubmissionsChart from "./Charts/site/QuoteSubmissionsChart";

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

  const rangeMenuProps = {
    onClick: ({ key }) => {
      const allFilters = {
        ...monthlyFilters,
        ...quarterlyFilters,
        ...yearlyFilters,
      };
      setDateRange(allFilters[key]);
      setActiveLabel(key);
    },
    items: [
      {
        key: "grp-monthly",
        type: "group",
        label: "📆 Monthly Filters",
        children: Object.keys(monthlyFilters).map((label) => ({
          key: label,
          label: label,
        })),
      },
      {
        key: "grp-quarterly",
        type: "group",
        label: "📉 Quarterly Filters",
        children: Object.keys(quarterlyFilters).map((label) => ({
          key: label,
          label: label,
        })),
      },
      {
        key: "grp-yearly",
        type: "group",
        label: "📅 Yearly Filters",
        children: Object.keys(yearlyFilters).map((label) => ({
          key: label,
          label: label,
        })),
      },
    ],
  };

  const isFilterActive = dateRange !== null || activeLabel !== "Select Filter";

  // ---- Workspace Content Definitions ----
  const tabItems = [
    {
      key: "sales",
      label: (
        <span>
          <DollarOutlined /> Gross Sales
        </span>
      ),
      children: (
        <Card 
          bordered={false}
          styles={{ body: { padding: "24px 8px", minHeight: 460, display: "flex", flexDirection: "column" } }}
        >
          <div style={{ flex: 1, position: "relative", width: "100%" }}>
            <SalesChart dateRange={dateRange} type={chartType} />
          </div>
        </Card>
      ),
    },
    {
      key: "orders",
      label: (
        <span>
          <ShoppingCartOutlined /> Orders Volume
        </span>
      ),
      children: (
        <Card 
          bordered={false}
          styles={{ body: { padding: "24px 8px", minHeight: 460, display: "flex", flexDirection: "column" } }}
        >
          <div style={{ flex: 1, position: "relative", width: "100%" }}>
            <CountChart dateRange={dateRange} type={chartType} />
          </div>
        </Card>
      ),
    },
    {
      key: "traffic",
      label: (
        <span>
          <GlobalOutlined /> Web Traffic
        </span>
      ),
      children: (
        <Card 
          bordered={false}
          styles={{ body: { padding: "24px 8px", minHeight: 460, display: "flex", flexDirection: "column" } }}
        >
          <div style={{ flex: 1, position: "relative", width: "100%" }}>
            <PageViewsChart dateRange={dateRange} type={chartType} />
          </div>
        </Card>
      ),
    },
    {
      key: "quotes",
      label: (
        <span>
          <FileTextOutlined /> Quote Requests
        </span>
      ),
      children: (
        <Card 
          bordered={false}
          styles={{ body: { padding: "24px 8px", minHeight: 460, display: "flex", flexDirection: "column" } }}
        >
          <div style={{ flex: 1, position: "relative", width: "100%" }}>
            <QuoteSubmissionsChart dateRange={dateRange} type={chartType} />
          </div>
        </Card>
      ),
    },
  ];

  return (
    <Flex vertical gap="middle" style={{ width: "100%" }}>
      
      {/* Top Filter Workspace Control Deck */}
      <Flex justify="space-between" align="center" wrap="wrap" gap="middle" style={{ paddingBottom: 4 }}>
        <Space size="middle" wrap>
          <RangePicker
            value={dateRange}
            onChange={(values) => {
              if (values) setDateRange(values);
            }}
            format="DD MMM YYYY"
            allowClear={false}
            style={{ minWidth: 260 }}
          />
          
          <Dropdown menu={rangeMenuProps} placement="bottomLeft" arrow>
            <Button icon={<FilterOutlined />}>{activeLabel}</Button>
          </Dropdown>

          {isFilterActive && (
            <Button
              danger
              type="text"
              icon={<AiOutlineCloseCircle style={{ fontSize: '15px' }} />}
              onClick={() => {
                setDateRange(null);
                setActiveLabel("Select Filter");
              }}
            >
              Clear Filters
            </Button>
          )}
        </Space>

        {/* Global Chart Renderer Rule */}
        <Segmented
          value={chartType}
          onChange={(value) => setChartType(value)}
          options={[
            { label: 'Bar View', value: 'bar', icon: <BarChartOutlined /> },
            { label: 'Area View', value: 'area', icon: <AreaChartOutlined /> },
            { label: 'Line View', value: 'line', icon: <LineChartOutlined /> },
          ]}
        />
      </Flex>

      {/* Main Stats Header strip */}
      <div style={{ width: "100%" }}>
        <PerformanceStats dateRange={dateRange} activeLabel={activeLabel} />
      </div>

      {/* Tabbed Central Analytics Deck */}
      <Card styles={{ body: { padding: "8px 20px 20px 20px" } }}>
        <Tabs 
          defaultActiveKey="sales" 
          items={tabItems} 
          size="large"
          type="card"
          tabBarGutter={6}
          style={{ marginTop: 8 }}
        />
      </Card>

    </Flex>
  );
}



































































// import { Button, Dropdown, DatePicker, Card, Row, Col, Flex, Space } from "antd";
// import { useState } from "react";
// import { AiOutlineCloseCircle } from "react-icons/ai";
// import {
//   BarChartOutlined,
//   AreaChartOutlined,
//   FilterOutlined,
//   LineChartOutlined,
// } from "@ant-design/icons";
// import CountChart from "./Charts/Orders/CountChart";
// import SalesChart from "./Charts/Orders/SalesChart";
// import dayjs from "dayjs";
// import quarterOfYear from "dayjs/plugin/quarterOfYear";
// import PerformanceStats from "./Charts/Orders/PerformanceStats";
// import PageViewsChart from "./Charts/site/PageViewsChart";
// import QuoteSubmissionsChart from "./Charts/site/QuoteSubmissionsChart";

// dayjs.extend(quarterOfYear);

// const { RangePicker } = DatePicker;

// export default function DashboardComponent() {
//   const [activeLabel, setActiveLabel] = useState("Select Filter");
//   const [chartType, setChartType] = useState("bar");
//   const [dateRange, setDateRange] = useState(null);

//   const getQuarterRange = () => {
//     const now = dayjs();
//     return [now.startOf("quarter"), now.endOf("quarter")];
//   };

//   const getLastQuarterRange = () => {
//     const now = dayjs().subtract(1, "quarter");
//     return [now.startOf("quarter"), now.endOf("quarter")];
//   };

//   const monthlyFilters = {
//     "This Month": [dayjs().startOf("month"), dayjs().endOf("month")],
//     "Last Month": [
//       dayjs().subtract(1, "month").startOf("month"),
//       dayjs().subtract(1, "month").endOf("month"),
//     ],
//   };

//   const quarterlyFilters = {
//     "This Quarter": getQuarterRange(),
//     "Last Quarter": getLastQuarterRange(),
//   };

//   const yearlyFilters = {
//     "This Year": [dayjs().startOf("year"), dayjs().endOf("year")],
//     "Last Year": [
//       dayjs().subtract(1, "year").startOf("year"),
//       dayjs().subtract(1, "year").endOf("year"),
//     ],
//     "This Financial Year": [
//       dayjs().subtract(1, "year").startOf("month"),
//       dayjs().endOf("month"),
//     ],
//     "Last Financial Year": [
//       dayjs().subtract(2, "year").startOf("month"),
//       dayjs().subtract(1, "year").endOf("month"),
//     ],
//   };

//   // ---- AntD 5 Dropdown Menu Props ----
//   const rangeMenuProps = {
//     onClick: ({ key }) => {
//       const allFilters = {
//         ...monthlyFilters,
//         ...quarterlyFilters,
//         ...yearlyFilters,
//       };
//       setDateRange(allFilters[key]);
//       setActiveLabel(key);
//     },
//     items: [
//       {
//         key: "grp-monthly",
//         type: "group",
//         label: "📆 Monthly Filters",
//         children: Object.keys(monthlyFilters).map((label) => ({
//           key: label,
//           label: label,
//         })),
//       },
//       {
//         key: "grp-quarterly",
//         type: "group",
//         label: "📉 Quarterly Filters",
//         children: Object.keys(quarterlyFilters).map((label) => ({
//           key: label,
//           label: label,
//         })),
//       },
//       {
//         key: "grp-yearly",
//         type: "group",
//         label: "📅 Yearly Filters",
//         children: Object.keys(yearlyFilters).map((label) => ({
//           key: label,
//           label: label,
//         })),
//       },
//     ],
//   };

//   const isFilterActive = dateRange !== null || activeLabel !== "Select Filter";

//   return (
//     <Flex vertical gap="large" style={{ width: "100%" }}>
      
//       {/* Top Filter Bar Control Unit */}
//       <Card size="small" variant="borderless" style={{ background: "transparent" }}>
//         <Flex justify="space-between" align="center" wrap="wrap" gap="middle">
//           <Space size="middle" wrap>
//             <RangePicker
//               value={dateRange}
//               onChange={(values) => {
//                 if (values) setDateRange(values);
//               }}
//               format="DD MMM YYYY"
//               allowClear={false}
//               style={{ minWidth: 260 }}
//             />
            
//             <Dropdown menu={rangeMenuProps} placement="bottomLeft" arrow>
//               <Button icon={<FilterOutlined />}>{activeLabel}</Button>
//             </Dropdown>

//             {isFilterActive && (
//               <Button
//                 danger
//                 type="text"
//                 icon={<AiOutlineCloseCircle style={{ fontSize: '15px' }} />}
//                 onClick={() => {
//                   setDateRange(null);
//                   setActiveLabel("Select Filter");
//                 }}
//               >
//                 Clear Filters
//               </Button>
//             )}
//           </Space>

//           {/* Action Panel: Chart Type Switching Engine */}
//           <Space.Compact>
//             <Button 
//               type={chartType === "bar" ? "primary" : "default"} 
//               icon={<BarChartOutlined />} 
//               onClick={() => setChartType("bar")}
//             >
//               Bar
//             </Button>
//             <Button 
//               type={chartType === "area" ? "primary" : "default"} 
//               icon={<AreaChartOutlined />} 
//               onClick={() => setChartType("area")}
//             >
//               Area
//             </Button>
//             <Button 
//               type={chartType === "line" ? "primary" : "default"} 
//               icon={<LineChartOutlined />} 
//               onClick={() => setChartType("line")}
//             >
//               Line
//             </Button>
//           </Space.Compact>
//         </Flex>
//       </Card>

//       {/* Hero Performance Banner */}
//       <PerformanceStats dateRange={dateRange} activeLabel={activeLabel} />

//       {/* Grid Allocation System */}
//       <Row gutter={[24, 24]}>
        
//         {/* Orders Count Card */}
//         <Col xs={24} lg={12}>
//           <Card 
//             title="Orders Overview" 
//             extra={<span style={{ color: '#8c8c8c', fontSize: '12px' }}>Total volume</span>}
//             styles={{ body: { minHeight: 360, display: "flex", flexDirection: "column" } }}
//             hoverable
//           >
//             <div style={{ flex: 1, position: "relative", width: "100%" }}>
//               <CountChart dateRange={dateRange} type={chartType} />
//             </div>
//           </Card>
//         </Col>

//         {/* Sales Card */}
//         <Col xs={24} lg={12}>
//           <Card 
//             title="Sales Performance" 
//             extra={<span style={{ color: '#8c8c8c', fontSize: '12px' }}>Gross revenue trends</span>}
//             styles={{ body: { minHeight: 360, display: "flex", flexDirection: "column" } }}
//             hoverable
//           >
//             <div style={{ flex: 1, position: "relative", width: "100%" }}>
//               <SalesChart dateRange={dateRange} type={chartType} />
//             </div>
//           </Card>
//         </Col>

//         {/* Website Traffic Card */}
//         <Col xs={24} lg={12}>
//           <Card 
//             title="Website Traffic" 
//             extra={<span style={{ color: '#8c8c8c', fontSize: '12px' }}>Views vs Visitors</span>}
//             styles={{ body: { minHeight: 360, display: "flex", flexDirection: "column" } }}
//             hoverable
//           >
//             <div style={{ flex: 1, position: "relative", width: "100%" }}>
//               <PageViewsChart dateRange={dateRange} type={chartType} />
//             </div>
//           </Card>
//         </Col>

//         {/* Quote Requests Card */}
//         <Col xs={24} lg={12}>
//           <Card 
//             title="Quote Requests" 
//             extra={<span style={{ color: '#8c8c8c', fontSize: '12px' }}>Inbound pipeline</span>}
//             styles={{ body: { minHeight: 360, display: "flex", flexDirection: "column" } }}
//             hoverable
//           >
//             <div style={{ flex: 1, position: "relative", width: "100%" }}>
//               <QuoteSubmissionsChart dateRange={dateRange} type={chartType} />
//             </div>
//           </Card>
//         </Col>

//       </Row>
//     </Flex>
//   );
// }





