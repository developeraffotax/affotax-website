"use client";

import Link from "next/link";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import React, { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { revalidatePath } from "next/cache";

const menu = [
	{
		name: "Accounts",
		submenu: [
			{ name: "Annual Accounts", link: "/annual-accounts" },
			{ name: "Dormant Accounts", link: "/dormant-accounts" },
			{ name: "LLP Accounts", link: "/llp-accounts" },
			{
				name: "Company Dissolution Service",
				link: "/company-dissolution-service",
			},
		],
	},
	{
		name: "Corporation Tax",
		submenu: [
			{ name: "Corporation Tax", link: "/corporation-tax-ct600" },
			{
				name: "File Corporation Tax Return Online",
				link: "/file-corporation-tax",
			},
			{
				name: "Register for Corporation Tax",
				link: "/register-for-corporation-tax",
			},
		],
	},
	{
		name: "Self Assessment",
		submenu: [
			{
				name: "Self Assessment Tax Return (SA100)",
				link: "/self-assessment-tax-return-sa100",
			},
			{
				name: "Submit Self Assessment Tax Return Online",
				link: "/submit-self-assessment-tax-return",
			},
			{
				name: "Register for Self Assessment Tax Return Online",
				link: "/register-for-self-assessment",
			},
			{
				name: "Self Assessment Change of Address",
				link: "/self-assessment-change-of-address",
			},
		],
	},
	{
		name: "Company Secretarial",
		submenu: [
			{
				name: "Annual Confirmation Statement",
				link: "/annual-confirmation-statement",
			},
			{
				name: "Registered Office Address UK",
				link: "/registered-office-address-uk",
			},
			{
				name: "Directors Service Address UK",
				link: "/directors-service-address-uk",
			},
			{ name: "PSC Register", link: "/psc-register" },
			{ name: "Change Company Name", link: "/change-company-name" },
			{
				name: "Companies House Change of Address",
				link: "/companies-house-change-of-address",
			},
			{ name: "Selling Shares", link: "/selling-shares" },
			{
				name: "Director Appointment & Resignation",
				link: "/director-appointment-resignation",
			},
		],
	},
	{
		name: "Payroll",
		submenu: [
			{
				name: "Register for PAYE",
				link: "/register-for-paye",
			},
			{
				name: "Directors Payroll",
				link: "/directors-payroll",
			},
			{ name: "PAYE Employee", link: "/paye-employee" },
			{
				name: "Auto Enrollment Pension",
				link: "/auto-enrolment-pension",
			},
			{ name: "Online P11D Form", link: "/p11d-form" },
			{
				name: "P45 Form",
				link: "/p45-form",
			},
			{
				name: "P60 Form",
				link: "/p60-form",
			},
			{ name: "UK Payslip Generator", link: "/payslip-generator" },
		],
	},

	{
		name: "VAT",
		submenu: [
			{
				name: "UK VAT Registration Online",
				link: "/vat-registration",
			},
			{
				name: "Quarterly VAT Return",
				link: "/quarterly-vat-return",
			},
			{ name: "EORI Number", link: "/eori-number" },
		],
	},

	{
		name: "Bookkeeping",
		submenu: [
			{
				name: "Bookkeeping For 12 Months",
				link: "/bookkeeping-for-12-month",
			},
			{
				name: "Xero Bookkeeping (Monthly)",
				link: "/xero-bookkeeping",
			},
			{
				name: "QuickBooks Bookkeeping (Monthly)",
				link: "/quickbooks-bookkeeping",
			},
			{ name: "Excel Bookkeeping (Monthly)", link: "/excel-bookkeeping" },
		],
	},

	{
		name: "Company Formation",
		submenu: [
			{
				name: "UK Company Registration (UK Resident)",
				link: "/uk-company-registration-uk-resident",
			},
			{
				name: "UK Limited Company for Non-Residents",
				link: "/uk-limited-company-for-non-residents",
			},
			{
				name: "LLP Company Formation in the UK",
				link: "/llp-company-formation",
			},
		],
	},
];










const SubMenu = ({ name, index, length, }) => {


	const router = useRouter()


	const liClickHandler = () => {
		
		
		
		router.refresh()
		
		
		
	}


	return (
		<li	onClick={liClickHandler}
			className={`pl-8 pr-4 py-2  border-b-primary bg-secondary text-tertiary hover:text-primary hover:cursor-pointer relative innerMenu  ${
				index !== length - 1 ? "border-b-2" : "border-b-0"
			}`}
		>
			{menu.map((ele) => {
				return (
					<div key={ele.name}>
						{ele.name === name ? (
							<ul className="absolute  flex-col text-nowrap transition-all  top-0 left-[230px] py-4 z-0  hidden">
								{ele.submenu.map((el) => {
									return (
										<Link
											key={el.name + 'desktop--nav'}
											href={el.link}
											className="px-8 py-2 border-b-2  border-b-primary bg-secondary text-tertiary z-0 items-center flex justify-start hover:text-primary hover:cursor-pointer"
										>
											{" "}
											<MdOutlineKeyboardArrowRight />{" "}
											{el.name}{" "}
										</Link>
									);
								})}
							</ul>
						) : null}
					</div>
				);
			})}

			<h3 className="text-nowrap flex w-full justify-between gap-5 items-center ">
				{name} <MdOutlineKeyboardArrowRight />
			</h3>
		</li>
	);
};

export default SubMenu;

//
