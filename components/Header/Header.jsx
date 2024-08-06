"use client";
import { useContext, useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu, } from "react-icons/rx";
import SubMenu from "./SubMenu";
import Backdrop from "../Backdrop/Backdrop";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useRouter } from 'next/navigation'
import { BsCartCheck } from "react-icons/bs";
import CartIcon from "./CartIcon";
import { CartContext } from "@/app/(user)/layout";





const subMenu = [
  { name: "Annual Accounts", link: "/annual-accounts" },
  { name: "Corporation Tax", link: "/corporation-tax-ct600" },
  { name: "Self Assessment", link: "/self-assessment-tax-return-sa100" },
  { name: "Payroll", link: "/register-for-paye" },
  { name: "VAT", link: "/vat-registration" },
  { name: "Company Secretarial", link: "/annual-confirmation-statement" },
  { name: "Bookkeeping", link: "/bookkeeping-for-12-month" },
  { name: "Company Formation", link: "/uk-company-registration-(uk-resident)" },
];






export default function Header() {
  const pathRef = useRef();

  const [isMobileNav, setIsMobileNav] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState(false);
  const router = useRouter();

  const cartContext = useContext(CartContext);

  

  const handleNav = () => {
    setIsMobileNav((prev) => !prev);
  };

  return (
    <>
      {/* DESKTOP NAVIGATION */}
      <header className=" body-font w-full bg-[#23314e] font-semibold text-secondary h-auto  px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-0 max-lg:w-full fixed top-0 left-0 z-50 shadow-md shadow-black/20 ">
        <div className="    mx-auto container  max-lg:hidden">
          <div className="flex flex-row items-center justify-between ">
            <div className="  py-5 z-50">
              <Link href="/">
                <svg width="150" viewBox="0 0 280.00000000000006 72.06504786422265" className="css-1j8o68f"> <defs id="SvgjsDefs1925"></defs> <g id="SvgjsG1926" featurekey="nameFeature-0" transform="matrix(1.6205390551742131,0,0,1.6205390551742131,-0.25928677428647584,-24.8266624671191)" fill="#ff7f45"> <path d="M17.44 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M10.4 29.48 l5.08 0 l-2.52 -7.12 z M28.997000000000003 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 9.44 l-6 0 l0 -24.48 z M51.394000000000005 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 9.44 l-6 0 l0 -24.48 z M84.71100000000001 34.64 c4.36 0 6.6 -2.8 6.6 -6.88 c0 -4.32 -2.4 -6.88 -6.6 -6.88 c-4.4 0 -6.6 2.8 -6.6 6.88 c0 4.24 2.44 6.88 6.6 6.88 z M84.71100000000001 40.2 c-7.52 0 -12.6 -5.12 -12.6 -12.44 c0 -7.56 5.32 -12.44 12.6 -12.44 c7.56 0 12.6 5.08 12.6 12.44 c0 7.6 -5.28 12.44 -12.6 12.44 z M100.388 15.52 l20.4 0 l0 5.56 l-7.2 0 l0 18.92 l-6 0 l0 -18.92 l-7.2 0 l0 -5.56 z M139.865 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M132.82500000000002 29.48 l5.08 0 l-2.52 -7.12 z M160.94200000000004 32.64 l-5 7.36 l-7 0 l8.52 -12.52 l-8.12 -11.96 l7 0 l4.6 6.8 l4.6 -6.8 l7 0 l-8.08 11.96 l8.48 12.52 l-7 0 z"></path> </g> <g id="SvgjsG1927" featurekey="sloganFeature-0" transform="matrix(0.9667506656062486,0,0,0.9667506656062486,-1.102095629715984,52.594690509953224)" fill="#fcfeff"> <path d="M4.14 13.26 l0 6.74 l-3 0 l0 -12.24 l3 0 l3.82 6.76 l3.82 -6.76 l3 0 l0 12.24 l-3 0 l0 -6.74 l-2.32 3.98 l-3 0 z M27.4495 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M23.929499999999997 14.74 l2.54 0 l-1.26 -3.56 z M35.619 7.76 l3 0 l0 5.74 l3.94 -5.74 l3.72 0 l-4.28 6.12 l4.44 6.12 l-3.68 0 l-4.14 -5.76 l0 5.76 l-3 0 l0 -12.24 z M50.0485 7.76 l3 0 l0 12.24 l-3 0 l0 -12.24 z M65.898 7.76 l3 0 l0 12.24 l-3 0 l-4.8 -7.16 l0 7.16 l-3 0 l0 -12.24 l3 0 l4.8 7.16 l0 -7.16 z M84.8075 12.5 l0 6.8 c-1.42 0.54 -3.2 0.84 -4.72 0.84 c-3.9 0 -6.52 -2.34 -6.52 -6.2 c0 -4.22 3.14 -6.28 6.98 -6.28 c0.26 0 0.54 0 0.86 0.02 c0.3 0.02 0.62 0.06 0.96 0.08 c0.62 0.08 1.24 0.16 1.84 0.34 l0 3.06 c-0.22 -0.1 -0.46 -0.18 -0.74 -0.26 c-0.3 -0.06 -0.6 -0.12 -0.92 -0.18 c-0.64 -0.12 -1.32 -0.16 -1.98 -0.16 c-2.54 0 -4 0.78 -4 3.38 c0 2.54 1.34 3.3 3.62 3.3 c0.24 0 0.5 -0.02 0.78 -0.04 c0.26 -0.02 0.54 -0.04 0.84 -0.06 l0 -1.86 l-2.6 0 l0 -2.78 l5.6 0 z M95.9665 7.76 l10.2 0 l0 2.78 l-3.6 0 l0 9.46 l-3 0 l0 -9.46 l-3.6 0 l0 -2.78 z M118.09599999999999 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M114.576 14.74 l2.54 0 l-1.26 -3.56 z M131.0255 16.32 l-2.5 3.68 l-3.5 0 l4.26 -6.26 l-4.06 -5.98 l3.5 0 l2.3 3.4 l2.3 -3.4 l3.5 0 l-4.04 5.98 l4.24 6.26 l-3.5 0 z M155.62449999999998 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M152.10449999999997 14.74 l2.54 0 l-1.26 -3.56 z M163.79399999999998 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M177.38349999999997 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M196.433 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M196.433 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M210.38249999999996 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M214.92249999999999 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M226.652 20 l-4.3 0 l0 -12.24 l4.3 0 c3.74 0 6.3 2.44 6.3 6.12 c0 3.78 -2.7 6.12 -6.3 6.12 z M225.35199999999998 10.54 l0 6.68 l1.3 0 c2.12 0 3.3 -1.34 3.3 -3.34 c0 -0.46 -0.06 -0.88 -0.18 -1.3 c-0.52 -1.46 -1.66 -2.04 -3.12 -2.04 l-1.3 0 z M245.1815 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M241.6615 14.74 l2.54 0 l-1.26 -3.56 z M262.37100000000004 13.719999999999999 c0.88 0.62 1.4 1.54 1.4 2.62 c0 2.08 -1.92 3.66 -3.92 3.66 l-6.5 0 l0 -12.24 l6.1 0 c1.6 0 2.92 0.86 3.62 2.28 c0.2 0.46 0.3 0.92 0.3 1.4 c0 0.9 -0.36 1.64 -1 2.28 z M256.351 10.54 l0 1.96 l3.1 0 c0.52 0 0.92 -0.5 0.92 -1 c0 -0.52 -0.38 -0.96 -0.92 -0.96 l-3.1 0 z M256.351 15.280000000000001 l0 1.94 l3.5 0 c0.54 0 0.92 -0.44 0.92 -0.96 c0 -0.26 -0.1 -0.5 -0.28 -0.7 c-0.18 -0.18 -0.4 -0.28 -0.64 -0.28 l-3.5 0 z M277.3605 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M281.66999999999996 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z"></path> </g> </svg>
              </Link>
            </div>

            <nav className={` z-50 flex flex-wrap items-center text-base  justify-center  max-lg:flex-col max-lg:gap-2 transition-all max-md:bg-black max-md:pt-5  max-md:w-full ${ isMobileNav ? "max-md:-translate-x-0" : "max-md:-translate-x-[-1000px]" }`}>
              <Link href={"/"} className="mr-5 hover:text-primary hover:cursor-pointer"> Home </Link>
              <Link href={"/pricing"} className="mr-5 hover:text-primary hover:cursor-pointer"> Pricing </Link>
              <div className="relative services ">
                <Link href={"/services"} className="mr-5 hover:text-primary hover:cursor-pointer "> Services </Link>
                <ul
                  className={`bg-secondary py-2 absolute hidden flex-col  z-20  `}>
                  {subMenu.map((el, index) => {
                    return (
                      <SubMenu name={el.name} link={el.link} key={uuid()} index={index} length={subMenu.length} />
                    );
                  })}
                </ul>
              </div>

              {/* <Link href={"/blogs"} className="mr-5 hover:text-primary hover:cursor-pointer"> Blogs </Link> */}
              <Link href={"/about-us"} className="mr-5 hover:text-primary hover:cursor-pointer"> About Us </Link>
              <Link href={"/contact-us"} className="mr-5 hover:text-primary hover:cursor-pointer"> Contact Us </Link>
            </nav>

            <div className={`flex gap-6  transition-all ${ isMobileNav ? "max-md:-translate-x-0" : "max-md:-translate-x-[-1000px]" }`}>
                <button onClick={() => router.push('/contact-us')} className="  items-center text-center rounded-md bg-primary border-0  px-3 focus:outline-none hover:bg-primary/95 text-base mt-4 md:mt-0 max-lg:py-2 max-md:w-[50%] z-50">
              Get a Quote
              </button>
              

              <div className="flex flex-col">
                <div className="flex items-center .svgDiv">
                  <svg style={{ marginRight: "5px" }} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" ref={pathRef} className="fill-secondary" clipRule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="#ffffff"></path> </g> </svg>
                  <span style={{ cursor: "pointer" }}> <a className="hover:text-primary text-secondary" style={{ textDecoration: "none" }} href="mailto:info@affotax.com"> info@affotax.com </a> </span>
                </div>

                <div className="flex items-center">
                  <svg style={{ marginRight: "5px" }} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" className="fill-secondary " clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#ffffff"></path> </g> </svg>
                  <span style={{ cursor: "pointer" }}> <a className="hover:text-primary text-secondary" style={{ textDecoration: "none" }} href="tel:02081446811"> 02081446811 </a> </span>
                </div>
              </div>
            </div>

            <CartIcon  cartContext={cartContext}/>
          </div>
        </div>






        {/* MOBILE NAVIGATION */}

        {isMobileNav && ( <Backdrop clickHandler={() => { setIsMobileNav(false); setShowSubMenu(false); }} /> )}
        <div className=" items-center justify-between flex-col w-full py-4 px-8 hidden max-lg:flex ">
          <div className=" flex justify-between w-full p-5 z-50">
            <Link href="/"> <svg width="150" viewBox="0 0 280.00000000000006 72.06504786422265" className="css-1j8o68f"> <defs id="SvgjsDefs1925"></defs> <g id="SvgjsG1926" featurekey="nameFeature-0" transform="matrix(1.6205390551742131,0,0,1.6205390551742131,-0.25928677428647584,-24.8266624671191)" fill="#ff7f45"> <path d="M17.44 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M10.4 29.48 l5.08 0 l-2.52 -7.12 z M28.997000000000003 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 9.44 l-6 0 l0 -24.48 z M51.394000000000005 15.52 l18.2 0 l0 5.56 l-12.2 0 l0 3.92 l9.8 0 l0 5.56 l-9.8 0 l0 9.44 l-6 0 l0 -24.48 z M84.71100000000001 34.64 c4.36 0 6.6 -2.8 6.6 -6.88 c0 -4.32 -2.4 -6.88 -6.6 -6.88 c-4.4 0 -6.6 2.8 -6.6 6.88 c0 4.24 2.44 6.88 6.6 6.88 z M84.71100000000001 40.2 c-7.52 0 -12.6 -5.12 -12.6 -12.44 c0 -7.56 5.32 -12.44 12.6 -12.44 c7.56 0 12.6 5.08 12.6 12.44 c0 7.6 -5.28 12.44 -12.6 12.44 z M100.388 15.52 l20.4 0 l0 5.56 l-7.2 0 l0 18.92 l-6 0 l0 -18.92 l-7.2 0 l0 -5.56 z M139.865 35.04 l-9 0 l-1.76 4.96 l-6.52 0 l9.8 -24.48 l6 0 l9.8 24.48 l-6.56 0 z M132.82500000000002 29.48 l5.08 0 l-2.52 -7.12 z M160.94200000000004 32.64 l-5 7.36 l-7 0 l8.52 -12.52 l-8.12 -11.96 l7 0 l4.6 6.8 l4.6 -6.8 l7 0 l-8.08 11.96 l8.48 12.52 l-7 0 z"></path> </g> <g id="SvgjsG1927" featurekey="sloganFeature-0" transform="matrix(0.9667506656062486,0,0,0.9667506656062486,-1.102095629715984,52.594690509953224)" fill="#fcfeff"> <path d="M4.14 13.26 l0 6.74 l-3 0 l0 -12.24 l3 0 l3.82 6.76 l3.82 -6.76 l3 0 l0 12.24 l-3 0 l0 -6.74 l-2.32 3.98 l-3 0 z M27.4495 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M23.929499999999997 14.74 l2.54 0 l-1.26 -3.56 z M35.619 7.76 l3 0 l0 5.74 l3.94 -5.74 l3.72 0 l-4.28 6.12 l4.44 6.12 l-3.68 0 l-4.14 -5.76 l0 5.76 l-3 0 l0 -12.24 z M50.0485 7.76 l3 0 l0 12.24 l-3 0 l0 -12.24 z M65.898 7.76 l3 0 l0 12.24 l-3 0 l-4.8 -7.16 l0 7.16 l-3 0 l0 -12.24 l3 0 l4.8 7.16 l0 -7.16 z M84.8075 12.5 l0 6.8 c-1.42 0.54 -3.2 0.84 -4.72 0.84 c-3.9 0 -6.52 -2.34 -6.52 -6.2 c0 -4.22 3.14 -6.28 6.98 -6.28 c0.26 0 0.54 0 0.86 0.02 c0.3 0.02 0.62 0.06 0.96 0.08 c0.62 0.08 1.24 0.16 1.84 0.34 l0 3.06 c-0.22 -0.1 -0.46 -0.18 -0.74 -0.26 c-0.3 -0.06 -0.6 -0.12 -0.92 -0.18 c-0.64 -0.12 -1.32 -0.16 -1.98 -0.16 c-2.54 0 -4 0.78 -4 3.38 c0 2.54 1.34 3.3 3.62 3.3 c0.24 0 0.5 -0.02 0.78 -0.04 c0.26 -0.02 0.54 -0.04 0.84 -0.06 l0 -1.86 l-2.6 0 l0 -2.78 l5.6 0 z M95.9665 7.76 l10.2 0 l0 2.78 l-3.6 0 l0 9.46 l-3 0 l0 -9.46 l-3.6 0 l0 -2.78 z M118.09599999999999 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M114.576 14.74 l2.54 0 l-1.26 -3.56 z M131.0255 16.32 l-2.5 3.68 l-3.5 0 l4.26 -6.26 l-4.06 -5.98 l3.5 0 l2.3 3.4 l2.3 -3.4 l3.5 0 l-4.04 5.98 l4.24 6.26 l-3.5 0 z M155.62449999999998 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M152.10449999999997 14.74 l2.54 0 l-1.26 -3.56 z M163.79399999999998 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M177.38349999999997 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 4.72 l-3 0 l0 -12.24 z M196.433 17.32 c2.18 0 3.3 -1.4 3.3 -3.44 c0 -2.16 -1.2 -3.44 -3.3 -3.44 c-2.2 0 -3.3 1.4 -3.3 3.44 c0 2.12 1.22 3.44 3.3 3.44 z M196.433 20.1 c-3.76 0 -6.3 -2.56 -6.3 -6.22 c0 -3.78 2.66 -6.22 6.3 -6.22 c3.78 0 6.3 2.54 6.3 6.22 c0 3.8 -2.64 6.22 -6.3 6.22 z M210.38249999999996 10.58 l0 2.92 l2.8 0 c0.92 0 1.46 -0.54 1.46 -1.46 s-0.54 -1.46 -1.46 -1.46 l-2.8 0 z M214.92249999999999 15.48 c0.56 0.76 1.12 1.52 1.7 2.26 c0.56 0.74 1.12 1.5 1.68 2.26 l-3.66 0 c-0.72 -0.96 -1.42 -1.92 -2.12 -2.88 c-0.7 -0.94 -1.42 -1.9 -2.14 -2.86 l0 5.74 l-3 0 l0 -12.24 l5.8 0 c2.28 0 4.22 1.74 4.22 4.04 c0 1.62 -1 3.04 -2.48 3.68 z M226.652 20 l-4.3 0 l0 -12.24 l4.3 0 c3.74 0 6.3 2.44 6.3 6.12 c0 3.78 -2.7 6.12 -6.3 6.12 z M225.35199999999998 10.54 l0 6.68 l1.3 0 c2.12 0 3.3 -1.34 3.3 -3.34 c0 -0.46 -0.06 -0.88 -0.18 -1.3 c-0.52 -1.46 -1.66 -2.04 -3.12 -2.04 l-1.3 0 z M245.1815 17.52 l-4.5 0 l-0.88 2.48 l-3.26 0 l4.9 -12.24 l3 0 l4.9 12.24 l-3.28 0 z M241.6615 14.74 l2.54 0 l-1.26 -3.56 z M262.37100000000004 13.719999999999999 c0.88 0.62 1.4 1.54 1.4 2.62 c0 2.08 -1.92 3.66 -3.92 3.66 l-6.5 0 l0 -12.24 l6.1 0 c1.6 0 2.92 0.86 3.62 2.28 c0.2 0.46 0.3 0.92 0.3 1.4 c0 0.9 -0.36 1.64 -1 2.28 z M256.351 10.54 l0 1.96 l3.1 0 c0.52 0 0.92 -0.5 0.92 -1 c0 -0.52 -0.38 -0.96 -0.92 -0.96 l-3.1 0 z M256.351 15.280000000000001 l0 1.94 l3.5 0 c0.54 0 0.92 -0.44 0.92 -0.96 c0 -0.26 -0.1 -0.5 -0.28 -0.7 c-0.18 -0.18 -0.4 -0.28 -0.64 -0.28 l-3.5 0 z M277.3605 17.22 l0 2.78 l-9.1 0 l0 -12.24 l3 0 l0 9.46 l6.1 0 z M281.66999999999996 7.76 l9.1 0 l0 2.78 l-6.1 0 l0 1.96 l4.9 0 l0 2.78 l-4.9 0 l0 1.94 l6.1 0 l0 2.78 l-9.1 0 l0 -12.24 z"></path> </g> </svg> </Link>

            <button className="bg-primary  rounded-md active:scale-90 w-[12%] flex justify-center items-center" onClick={handleNav}> {isMobileNav ? <RxCross2 /> : <RxHamburgerMenu />} </button>
          </div>

          <div className={`z-50 absolute translate-y-16 flex-col gap-3 py-8 mt-4 transition-all bg-[#23314e] w-full items-center justify-center ${ isMobileNav ? "flex" : "hidden" }`}>
            <nav
              className={`flex items-center justify-center text-center text-base  flex-col gap-2 transition-all pt-5 }`}>
              <Link onClick={() => setIsMobileNav(false)} href={"/"} className=" hover:text-primary hover:cursor-pointer"> Home </Link>
              <Link onClick={() => setIsMobileNav(false)} href={"/pricing"} className=" hover:text-primary "> Pricing </Link>
              <div className=" relative hover:cursor-pointer">
                <a className=" hover:text-primary text-secondary" onClick={() => setShowSubMenu((prev) => !prev)}> Services <IoIosArrowDown className={` inline-block ml-1 transition-all  ${ !showSubMenu ? "rotate-0" : "rotate-180" }`} /> </a>
                {showSubMenu ? (
                  <ul className="py-2 bg-secondary absolute flex flex-col translate-y-2 rounded-lg ">
                    { [...subMenu,   { name: "View All", link: "/services" }].map((el, index) => {
                      return (
                        <SubMenu name={el.name} link={el.link} key={uuid()} index={index} length={subMenu.length + 1} onClick={() => { setIsMobileNav(false); setShowSubMenu(false); }} />
                      );
                    })}
                  </ul>
                ) : null}
              </div>

              {/* <Link onClick={() => setIsMobileNav(false)} href={"/blogs"} className=" hover:text-primary hover:cursor-pointer"> Blogs </Link> */}
              <Link onClick={() => setIsMobileNav(false)} href={"/about-us"} className=" hover:text-primary hover:cursor-pointer"> About Us </Link>
              <Link onClick={() => setIsMobileNav(false)} href={"/contact-us"} className=" hover:text-primary hover:cursor-pointer"> Contact Us </Link>
            </nav>

            <button onClick={() => {router.push('/contact-us'); setIsMobileNav(false);}} className=" text-center  items-center rounded-md bg-primary border-0  px-3 focus:outline-none hover:bg-primary/95 text-base mt-2 py-2 w-[50%]">
              Get a Quote
            </button>
            <div className="flex flex-col mt-2 ">
              <div className="flex items-center ">
                <svg style={{ marginRight: "5px" }} width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" className="fill-secondary" clipRule="evenodd" d="M20 4C21.6569 4 23 5.34315 23 7V17C23 18.6569 21.6569 20 20 20H4C2.34315 20 1 18.6569 1 17V7C1 5.34315 2.34315 4 4 4H20ZM19.2529 6H4.74718L11.3804 11.2367C11.7437 11.5236 12.2563 11.5236 12.6197 11.2367L19.2529 6ZM3 7.1688V17C3 17.5523 3.44772 18 4 18H20C20.5523 18 21 17.5523 21 17V7.16882L13.8589 12.8065C12.769 13.667 11.231 13.667 10.1411 12.8065L3 7.1688Z" fill="#ffffff"></path> </g> </svg>
                <span style={{ cursor: "pointer" }}>
                  <a className="hover:text-primary text-secondary" style={{ textDecoration: "none" }} href="mailto:info@affotax.com"> info@affotax.com </a>
                </span>
              </div>

              <div className="flex items-center">
                <svg style={{ marginRight: "5px" }} width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" strokeWidth="0.00024000000000000003"> <g id="SVGRepo_bgCarrier" strokeWidth="0"></g> <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g> <g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" className="fill-secondary" clipRule="evenodd" d="M17.3545 22.2323C15.3344 21.7262 11.1989 20.2993 7.44976 16.5502C3.70065 12.8011 2.2738 8.66559 1.76767 6.6455C1.47681 5.48459 2.00058 4.36434 2.88869 3.72997L5.21694 2.06693C6.57922 1.09388 8.47432 1.42407 9.42724 2.80051L10.893 4.91776C11.5152 5.8165 11.3006 7.0483 10.4111 7.68365L9.24234 8.51849C9.41923 9.1951 9.96939 10.5846 11.6924 12.3076C13.4154 14.0306 14.8049 14.5807 15.4815 14.7576L16.3163 13.5888C16.9517 12.6994 18.1835 12.4847 19.0822 13.1069L21.1995 14.5727C22.5759 15.5257 22.9061 17.4207 21.933 18.783L20.27 21.1113C19.6356 21.9994 18.5154 22.5232 17.3545 22.2323ZM8.86397 15.136C12.2734 18.5454 16.0358 19.8401 17.8405 20.2923C18.1043 20.3583 18.4232 20.2558 18.6425 19.9488L20.3056 17.6205C20.6299 17.1665 20.5199 16.5348 20.061 16.2171L17.9438 14.7513L17.0479 16.0056C16.6818 16.5182 16.0047 16.9202 15.2163 16.7501C14.2323 16.5378 12.4133 15.8569 10.2782 13.7218C8.1431 11.5867 7.46219 9.7677 7.24987 8.7837C7.07977 7.9953 7.48181 7.31821 7.99439 6.95208L9.24864 6.05618L7.78285 3.93893C7.46521 3.48011 6.83351 3.37005 6.37942 3.6944L4.05117 5.35744C3.74413 5.57675 3.64162 5.89565 3.70771 6.15943C4.15989 7.96418 5.45459 11.7266 8.86397 15.136Z" fill="#ffffff"></path> </g> </svg>
                <span style={{ cursor: "pointer" }}> <a className="hover:text-primary text-secondary" style={{ textDecoration: "none" }} href="tel:2081446811"> 02081446811 </a> </span>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
