const nodemailer = require("nodemailer");
const ejs = require("ejs");

import { htmlEmail, htmlEmailForAffotax } from "@/views/paymentMail";

const sendPaymentMail = (customerData, orderData, orderNo) => {
	const promise = new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		const html = ejs.render(htmlEmail, {
			customerData,
			orderData,
			orderNo,
		});

		console.log(orderData);
		transporter.sendMail(
			{
				from: "info@affotax.com",
				to: customerData.email,

				subject: `Payment Confirmation for Your Recent Order | Affotax Ltd`,
				html: html,
			},

			(error) => {
				if (!error) {

					const htmlForAffotax = ejs.render(htmlEmailForAffotax, { customerData, orderData, orderNo, });
					transporter.sendMail(
						{
							from: "info@affotax.com",
							to: "info@affotax.com",

							subject: `Payment Confirmation for Recent Order from ${customerData.name} | Affotax Ltd`,
							html: htmlForAffotax,
						},

						(error) => {
							if (!error) {
								resolve(true);
							} else {
								reject(false);
							}
						}
					);
				} else {
					reject(false);
				}
			}
		);
	});

	return promise;
};

module.exports = sendPaymentMail;
