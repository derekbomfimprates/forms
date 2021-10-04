
// I am importing the packages that i will need in this file
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const auth = {
    auth: {
        api_key: 'f7455c876102bde6a0fee85bb8697778-443ec20e-6e12750e', // TODO: Replace with your mailgun API KEY
        domain:  'sandboxcd5016d23c804f428cf007e925c34fc7.mailgun.org' // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


// we have some dinamic variables: subject, text, email that will change
//also, i have the callback cb
const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: email,// 'derekprat37@gmail.com', // TODO replace this with your own email
        to: 'derekprates37@gmail.com', // TODO: the receiver email has to be authorized for the free tier
        subject,//subject: subject,//'Testing',
        text//text: text//'I would like to get in touch with you'
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {

            //console.log('Error Occurs');
             return cb(err, null);
        }
        //console.log('Message sent!!!');
        return cb(null, data);
    });
 }
//  sendMail('','','', function(err, data){

//  });

module.exports=sendMail;