import React, { Suspense } from "react";
import Form from "./Form";

const ContactUs = () => {
	return (
		<section className="w-full px-80 max-2xl:px-40 max-xl:px-10  bg-primary/10 py-12 shadow-md drop-shadow-md shadow-black/10 max-lg:p-8 max-lg:pt-10">
			<div className="container mx-auto flex flex-col justify-center items-start gap-8">
				<div className="">
					<h2 className="text-3xl font-semibold "> Looking for help? Look no further! Our team of experts is always ready to answer any questions you may have. </h2>
				</div>

				<div className="w-full my-4">
					<Form />
				</div>

				<div className="flex flex-col justify-center items-center w-full gap-8">
					<h2 className="text-primary text-6xl font-semibold "> Find Us On Map </h2>
					<div className="w-full drop-shadow-lg rounded-2xl overflow-hidden ">
						<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2481.600281057241!2d0.04248677585744105!3d51.53889090840335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7b4e3821a93%3A0xa8b4163015012751!2s240%20Plashet%20Grove%2C%20Greater%2C%20London%20E6%201DQ%2C%20UK!5e0!3m2!1sen!2s!4v1718100564613!5m2!1sen!2s" className="w-full h-[60vh] max-lg:h-[30vh] max-h-96" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" ></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
