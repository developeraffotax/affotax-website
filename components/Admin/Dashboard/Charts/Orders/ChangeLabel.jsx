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
import dayjs from "dayjs";





function ChangeLabel({ percent, dateRange }) {
  let label = "from last period";
  let start, end;

  if (Array.isArray(dateRange) && dateRange.length === 2) {
    start = dateRange[0];
    end = dateRange[1];
  }

  if (start && end) {
    const diff = dayjs(end).diff(dayjs(start), "day") + 1;
    if (diff < 32) {
      label = `from last ${diff} days`;
    } else {
      const months = Math.round(diff / 30);
      label = `from last ${months} months`;
    }
  } else {
    // fallback (default dashboard range)
    label = "from last year";
  }

  const isPositive = percent >= 0;

  return (
    <span
      className={`flex items-center text-sm font-medium mt-1 ${
        isPositive ? "text-green-600" : "text-red-600"
      }`}
    >
      {isPositive ? (
        <ArrowUpOutlined className="mr-1" />
      ) : (
        <ArrowDownOutlined className="mr-1" />
      )}
      {Math.abs(percent)}% {label}
    </span>
  );
}
 


export default ChangeLabel;