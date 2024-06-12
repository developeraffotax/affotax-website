const nodeMailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const sendMail = () => {


    const promise = new Promise((resolve, reject) => {
        // Create a transporter object
// const transporter = nodeMailer.createTransport({
//     host: "smtp.hostinger.com",
    
//     secure: true,
//     port: 465,
//     tls:{
//         rejectUnauthorized:false
//     },


    

//     auth: {
//       user: 'rashidhassan260@gmail.com',
//       pass: 'AffotaxHostinger@123',
//     }
//   });





        transporter.sendMail({
            from: 'ahtshamsaleem51@gmail.com',
            to: 'ahtshamsaleem51@gmail.com',
            subject: 'subject',
            text: 'Text Successssssss' 
        },
    
        (error) => {
            if(!error) {
                console.log('Email sent successfully.');
                resolve(true);
                //return true;
            } else {
                console.log('Error occured while sending email.', error);

                reject( error);
                //return false;
            }
        })
    })


    return promise;



   



}



module.exports = sendMail;




