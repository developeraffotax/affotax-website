import Link from "next/link";
import React from "react";

const SubMenu = ({ name, link, index, length, onClick }) => {
  return (
    <Link href={`/services/${link}`} onClick={onClick}>
      <li className={`px-8 py-2  border-b-primary bg-secondary text-tertiary hover:text-primary hover:cursor-pointer ${ index !== length - 1 ? "border-b-2" : "border-b-0" }`} >
        <h3 className="text-nowrap">{name}</h3>
      </li>
    </Link>
  );
};

export default SubMenu;
