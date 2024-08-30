import { FaCheck } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';

const steps = [
	{
		title: "Accounts",
		key: uuidv4(),
		content: `From small businesses to large corporations, we handle all aspects of accounts management, ensuring your financial records are accurate and up-to-date.
`,
	},
	{
		title: "Corporation Tax",
		key: uuidv4(),
		content: `Navigating the complexities of corporation tax can be challenging. Our expert accountants can help you minimize your tax liabilities while ensuring full compliance with all regulations.`,
	},
	{
		title: "VAT",
		key: uuidv4(),
		content: `Our VAT services include registration, returns, and compliance, helping your business navigate the complexities of VAT regulations.
`,
	},
	{
		title: "Payroll",
		key: uuidv4(),
		content: ` We manage payroll services for businesses of all sizes, ensuring your employees are paid correctly and on time, and handling all associated tax and compliance issues.
`,
	},

	{
		title: "Self Assessment",
		key: uuidv4(),
		content: `We offer self-assessment services to help individuals accurately report their income and expenses, ensuring you pay the correct amount of tax and avoid penalties.
`,
	},

	{
		title: "Company Formation",
		key: uuidv4(),
		content: `Starting a new business? We can help you with company formation, ensuring all legal requirements are met and providing you with a solid foundation for your new venture.
`,
	},

	{
		title: "Bookkeeping",
		key: uuidv4(),
		content: ` Accurate bookkeeping is crucial for any business. Our bookkeeping services ensure your financial transactions are recorded correctly, helping you make informed business decisions.
`,
	},

	{
		title: "Company Secretarial",
		key: uuidv4(),
		content: `Our company secretarial services include maintaining statutory registers, preparing and filing annual returns, and ensuring compliance with corporate governance requirements.

`,
	},
];

export default function OurServices() {
	return (
		<>
			<div className="flex w-full     flex-row gap-10 items-center justify-center px-80 max-2xl:px-40 max-xl:px-10     bg-gradient-to-tr from-orange-300/5 to-orange-900/20 ">
				<div className="relative  py-16 border-b border-gray-300  flex  flex-1 flex-col items-center justify-center  ">
					<h2 className=" max-w-sm leading-relaxed text-center bg-gradient-to-br from-orange-700 via-orange-500 via-50% to-orange-800 bg-clip-text  font-bold text-transparent sm:max-w-2xl text-4xl">
						Comprehensive Accountancy Services
					</h2>
					<span className="mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-800">
						Our firm offers a wide range of accountancy services
						designed to meet all your financial needs. We pride
						ourselves on being the top choice when searching for
						"accountancy near me," and we provide expert services
						in:
					</span>

					<div className="mt-12 gap-8   flex justify-center items-center ">
						<ul className="  grid grid-cols-3  gap-20 text-center  max-lg:grid-cols-2 ">
							{steps.map((el, index) => {
								return (
									<li key={el.key} className="flex flex-col justify-center items-center gap-4 max-lg:justify-start ">
										<div className=" rounded-full bg-slate-200 relative drop-shadow-none bottom-3 right-3 z-10 w-24    aspect-square flex justify-center items-center text-4xl font-oswald font-semibold text-white">
											<div className=" border-[0.25rem] bg-transparent  absolute border-orange-500 drop-shadow-md  w-full h-full  rounded-full  top-2 left-3 z-10 flex justify-center items-center">
												<FaCheck className="text-orange-500 scale-125" />
											</div>
										</div>

										<h3 className="font-semibold text-xl font-poppins ">
											{el.title}
										</h3>
										<p className="text-sm max-w-64 ">
											{el.content}
										</p>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</>
	);
}
