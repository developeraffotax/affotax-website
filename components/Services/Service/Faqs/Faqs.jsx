import React from "react";
import Faq from "./Faq";
import { v4 as uuid } from "uuid";

const Faqs = ({ faqs }) => {
	return (
		<section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-0 bg-gray-100 py-8  ">
			<div className="container mx-auto">
				<h2 className="text-3xl font-semibold mb-2">FAQS:</h2>
				<ul>
					{faqs.map((el) => (
						<Faq
							key={uuid()}
							question={el.question}
							answer={el.answer}
						/>
					))}
				</ul>
				<p className="font-semibold ">
					If you have any personalised guidance or additional
					inquiries about our service, please don't hesitate to
					contact us.{" "}
				</p>
			</div>
		</section>
	);
};

export default Faqs;
