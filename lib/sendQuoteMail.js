
const nodemailer = require("nodemailer");

// Send quote mail header



const sendQuoteMail = (data) => {
	const promise = new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",

			auth: {
				user: process.env.GMAIL_USER,
				pass: process.env.GMAIL_PASS,
			},
		});

		transporter.sendMail(
			{
				from: "info@affotax.com",
				to: "info@affotax.com",
				subject: `Instant Quote from The Affotax`,
				text: `
				Name: ${data.name}
				Email: ${data.email}
				Phone Number: ${data.phoneNumber}

				Business Type:${data.businessType}
				Turnover:${data.turnover}
				Need Bookkeeping:${data.bookkeeping}

				Message: ${data.message}
				`,
			},

			(error) => {
				if (!error) {
					resolve(true);
				} else {
					console.log(error);
					reject(false);
				}
			}
		);
	});

	return promise;
};

module.exports = sendQuoteMail;