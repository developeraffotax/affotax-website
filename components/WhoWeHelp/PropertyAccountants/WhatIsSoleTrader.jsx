"use client";

import Image from "next/image";
import HeroImg from "@/public/propertyAcc.PNG";
import SmallBiz from "@/public/smallbiz.PNG";
import SmallBiz2 from "@/public/smallbiz2.PNG";


export default function WhatIsSoleTrader() {
	return (
		<>
			<div className="flex w-full   flex-col gap-20 pt-16  items-center justify-center px-80 max-2xl:px-40 max-xl:px-4    bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="flex flex-row max-lg:flex-col-reverse max-lg:items-center  gap-8 max-lg:gap-0 p-8 justify-center max-lg:h-auto  h-[50vh]  ">
					<div className="mt-4 max-w-2xl  flex   flex-col items-start justify-start  w-[70%] max-lg:w-full  ">
						<h2 className="   leading-relaxed text-start max-lg:text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Why Choose Our Property Accountants?
						</h2>
						<span className="mt-4  text-start text-xl leading-relaxed text-gray-800">
							Our specialized property accountants offer tailored
							services to meet your unique needs, including
							Accounts, Corporation Tax, Self-Assessment, Company
							Secretarial, Payroll, VAT, Bookkeeping, and Company
							Formation.
							<br />
							<br />
							With a strong local presence, we understand the UK's
							property market challenges and opportunities, making
							us the ideal choice for property owners and
							investors seeking reliable accounting support. Trust
							us for expert and dedicated service.
						</span>
					</div>

					<div className="   flex flex-row justify-start text-start items-start rounded-[300px]  w-[30%]  max-lg:w-[80%] ">
						<Image src={HeroImg} cover className="scale-125    " />
					</div>
				</div>

				<div className="flex flex-row max-lg:flex-col max-lg:items-center gap-10 w-full p-12  justify-center items-center max-lg:h-auto  bg-slate-200/30 rounded-2xl shadow-lg">
					<div className="   flex flex-row  justify-start text-start items-start  rounded-2xl w-[40%]  max-lg:w-[90%] overflow-hidden     ">
						<Image src={SmallBiz} cover className="scale-110    " />
					</div>

					<div className="relative   flex   flex-col items-start justify-center  ">
						<h2 className="  max-w-sm leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Discover the Difference with Our Landlord
							Accountancy Services
						</h2>
						<span className="mt-4 max-w-2xl text-start text-xl leading-relaxed text-gray-800 ">
							Owning properties as a landlord comes with its
							challenges. Managing your portfolio efficiently
							while ensuring compliance with HMRC can be
							overwhelming. At Affotax, we specialize in landlord
							accountancy services tailored to simplify your
							financial management. Whether you're handling{" "}
							<strong>
								residential or commercial properties,{" "}
							</strong>
							we offer unlimited support and expert advice every
							step of the way.
							<br /> <br /> From navigating tax implications to
							ensuring accurate documentation and timely
							submissions, our team is dedicated to minimizing
							your tax liabilities and avoiding penalties. Let us
							handle the complexities while you focus on growing
							your property portfolio with confidence. Partner
							with us today and experience peace of mind in
							managing your landlord finances effectively.
						</span>
					</div>
				</div>

				<div className="flex flex-row gap-8 max-lg:flex-col-reverse  max-lg:items-center    w-full justify-center items-center  max-lg:h-auto  bg-slate-200/30 rounded-2xl shadow-lg p-12 ">
					<div className="  w-[60%] max-w-2xl max-lg:w-full ">
						<h2 className=" mb-4 leading-relaxed text-start bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  text-2xl font-bold text-transparent sm:max-w-2xl sm:text-4xl">
							Property Accounting Solutions for Residential and
							Commercial Landlords
						</h2>
						<span className=" text-start text-xl  leading-relaxed text-gray-800">
							At our firm, we specialize in providing
							comprehensive accounting services for both
							residential and commercial landlords. Whether you're
							managing a{" "}
							<strong>
								single property or a diverse portfolio,
							</strong>{" "}
							our tiered pricing structure ensures you receive
							value that scales with your needs. Our expert team
							of property accountants is dedicated to optimizing
							your financial management, from rental income
							declarations to{" "}
							<strong>
								tax compliance and strategic advice.
							</strong>
							<br /> <br />
							Whether you're a residential buy-to-let investor or
							a commercial property owner, we offer tailored
							solutions that cater to your unique circumstances.
							Count on us to keep you compliant with HMRC
							regulations, including Making Tax Digital and
							Capital Gains Tax, while offering insights into
							business rates, stamp duty land tax, and optimal
							business structuring. Trust us to manage your
							property finances effectively, so you can focus on
							growing your portfolio with confidence.
						</span>
					</div>

					<div className="    w-[40%] max-lg:w-[90%] ">
						<Image src={SmallBiz2} cover className="scale-110" />
					</div>
				</div>
			</div>
		</>
	);
}
