"use client"

import { List } from "antd";
import dayjs from "dayjs";
import React, { useState } from "react";

const Logs = ({logsData}) => {

    const [logsArr, setLogsArr] = useState(JSON.parse(logsData));


    const Header = () => {
        return (
            <ul className="w-full grid grid-cols-5  gap-8 font-poppins items-center px-2 py-2 font-[400] ">
            <li>Code</li>
            <li>Message</li>
            <li className=" ">Amount</li>
            <li className=" ">
                <h3>Customer</h3>
                 
            </li>
            <li>
                Time
            </li>
        </ul>
        )
    }

  return (
    <List
    pagination={{  defaultPageSize: 10}}
    
    size="small"
    header={<Header />}
    // footer={<div>Footer</div>}
    bordered
    dataSource={logsArr}
    renderItem={(item) => {


        return <List.Item  className="bg-black  py-2  " style={{padding: 0}} >

            <ul className="w-full grid grid-cols-5  gap-8 font-poppins items-center bg-red-50 px-4 py-2 text-red-700 ">
                <li>{item.decline_code}</li>
                <li>{item.message}</li>
                <li className="font-[400] text-black ">£{(+item.amount)/100}</li>
                <li className="flex flex-col justify-start items-start gap-0 text-xs text-black">
                    <h3>{item.customer_name}</h3>
                    <h4>{item.customer_email}</h4>
                </li>
                <li>
                    {new Date(+(item.time)).toLocaleString()}
                </li>
            </ul>
        </List.Item>
    }}
  />
  )
};

export default Logs;
