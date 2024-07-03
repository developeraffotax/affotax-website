const nodemailer = require("nodemailer");

const sendMail = (name, fromEmail, service, message) => {
	const promise = new Promise((resolve, reject) => {
		const transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "info@affotax.com",
				pass: "uxpc xfyz qwoy gunm",
			},
		});

		transporter.sendMail(
			{
				from: "info@affotax.com",
				to: "info@affotax.com",
				subject: `Quote from The Affotax`,
				text: `
				Name: ${name}
				Email: ${fromEmail}
				Service: ${service}
				Message:${message}
				`,
			},

			(error) => {
				if (!error) {
					resolve(true);
				} else {
					reject(false);
				}
			}
		);
	});

	return promise;
};

module.exports = sendMail;
