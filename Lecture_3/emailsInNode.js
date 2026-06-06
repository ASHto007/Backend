// password:- qixe jvvq uwut yxfv
// importing nodemailer
const nodemailer = require("nodemailer");
const email = "ashutoshto007@gmail.com";

// function to send mail
async function sendMail() {
  // create transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: "qixejvvquwutyxfv",
    },
  });
  // configuring mail options
  const mailOptions = {
    from: email,
    to: "ash@yopmail.com",
    subject: "Testing nodemailer",
    text: "This is a test mail sent using nodemailer in nodejs",
  };

  //   sending mail
  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (err) {
    console.log("Error in sending mail", err);
  }
}
sendMail();
