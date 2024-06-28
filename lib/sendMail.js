const nodemailer = require("nodemailer");
const SMTPTransport = require("nodemailer/lib/smtp-transport");
const { generateHtml } = require("./generateHtml");

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












// const nodemailer = require('nodemailer');

// // Create a transporter object using Gmail SMTP
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASSWORD
//   }
// });

// // Email options
// const mailOptions = {
//   from: process.env.EMAIL_USER,
//   to: 'recipient@example.com',
//   subject: '👋 Hello from Node.js 🚀',
//   text: 'This is a test email sent from Node.js using nodemailer. 📧💻'
// };

// // Send the email
// transporter.sendMail(mailOptions, (error, info) => {
//   if (error) {
//     console.error('❌ Error:', error.message);
//   } else {
//     console.log('✅ Email sent:', info.response);
//   }
// });
