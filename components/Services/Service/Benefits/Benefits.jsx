import React from "react";
import Benefit from "./Benefit";
import { v4 as uuid } from "uuid";

const Benefits = ({ benefitsTitle, benefits }) => {
	return (
		<section className="w-full px-80 max-2xl:px-40 max-xl:px-10 max-lg:p-0 py-4">
			<div className="container mx-auto ">
				<div>
					<h2 className="text-4xl font-semibold mb-4">
						{benefitsTitle}
					</h2>
				</div>

				<div>
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
