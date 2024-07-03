import Link from "next/link";
import React from "react";

const SubMenu = ({ name, link, index, length, onClick }) => {
	//let href = link !== "/services" ? `/services/${link}` : "/services";
	let href =`${link}`

	return (
		<Link href={href} onClick={onClick}>
			<li
				className={`px-8 py-2  border-b-primary bg-secondary text-tertiary hover:text-primary hover:cursor-pointer ${
					index !== length - 1 ? "border-b-2" : "border-b-0"
				}`}
			>
				<h3 className="text-nowrap">{name}</h3>
			</li>
		</Link>
	);
};

export default SubMenu;
