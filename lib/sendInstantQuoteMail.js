const nodemailer = require("nodemailer");

const sendInstantQuoteMail = (data) => {
	const promise = new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			
			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});
		console.log(data, 'ib the lib')
		transporter.sendMail(
			{
				from: "info@affotax.com",
				to: "affotaxit2@gmail.com",
				subject: `Instant Quote from The Affotax`,
				text: `
				Name: ${data.name}
				Email: ${data.email}
				Phone Number: ${data.phoneNumber}
				Business Type:${data.businessType}

				Turnover:${data.turnover}
				Need VAT Returns completing? : ${data.vatReturns}
				Need Payroll Managing : ${data.payrollManaging}
				Need Bookkeeping:${data.bookkeeping}
				`,
			},

			(error) => {
				if (!error) {
					resolve(true);
				} else {
					console.log(error)
					reject(false);
				}
			}
		);
	});

	return promise;
};

module.exports = sendInstantQuoteMail;
