"use client"

import { List } from "antd";
import React, { useState } from "react";

const Logs = ({logsData}) => {

    const [logsArr, setLogsArr] = useState(JSON.parse(logsData));




  return (
    <List
    size="small"
    header={<div>Header</div>}
    footer={<div>Footer</div>}
    bordered
    dataSource={logsArr}
    renderItem={(item) => {


        return <List.Item>

            <ul className="w-full flex justify-between items-center gap-2 ">
                <li>{item.decline_code}</li>
                <li>{item.message}</li>
                <li className="flex flex-col justify-start items-start gap-0 ">
                    <h3>{item.customer_name}</h3>
                    <h4>{item.customer_email}</h4>
                </li>
                <li></li>
            </ul>
        </List.Item>
    }}
  />
  )
};

export default Logs;
