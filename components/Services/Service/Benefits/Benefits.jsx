import React from "react";
import Benefit from "./Benefit";
import { v4 as uuid } from "uuid";

const Benefits = ({ benefitsTitle, benefits }) => {

	// const titleArr = benefitsTitle.split(" ");

	// const bgLength = Math.floor((50 / 100) * titleArr.length);

	// const bgWordArr = [];

	// for (let i = 0; i < bgLength; i++) {
	// 	bgWordArr.push(titleArr[i]);
	// }

	// const nonBgWordArr = titleArr.filter((el) => {
	// 	return !bgWordArr.includes(el);
	// });



	return (
		<section className="  py-2 w-full max-lg:px-8">
			<div className="container mx-auto flex flex-col justify-center items-center w-[100%] max-lg:w-full">
				<div>
					<h2 className="   text-4xl font-semibold mb-4 w-full text-center  bg-gradient-to-br from-orange-400 via-orange-500 via-50% to-orange-700 bg-clip-text  text-transparent font-poppins py-2  ">
						{" "}
						{benefitsTitle}{" "}
					</h2>
				</div>

				<div className="bg-[url('/frame2.svg')] bg-cover  bg-no-repeat bg-gray-50 rounded-xl  p-16 max-lg:p-8   shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]">
					<ul>
						{benefits.map((el) => (
							<Benefit key={uuid()} {...el} />
						))}
					</ul>
				</div>

				<div></div>
			</div>
		</section>
	);
};

export default Benefits;
