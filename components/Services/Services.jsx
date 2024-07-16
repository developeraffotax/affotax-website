import React from "react";
import Menu from "./Menu";
import Top from "./Top";
import EmailPhone from "../Home/Subpages/EmailPhone";

// export const metadata = {
// 	title: 'The Most Affordable Accountancy Services in the UK',
// 	description: 'Our Accountancy services – company accounts, tax returns, VAT returns, bookkeeping services, self-assessment, payroll services, etc. for SMEs across the UK.'
// }


const Services = () => {
	return (
		<div>
			<Top  className=''/>
			<Menu />
			<EmailPhone />
		</div>
	);
};

export default Services;
