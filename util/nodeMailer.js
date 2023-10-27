const nodemailer = require("nodemailer");
const fs = require("fs");

const mailOtpMail = async (email, subject, otp) => {
  try {
    let transporter = nodemailer.createTransport({
      // for sending mail by using spacific mail
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "portal@assuredensure.com",
        pass: "assured@1987",
      },
    });
    let info = await transporter.sendMail({
      from: "<noreply@temporary.com>", // sender address
      to: email, // list of receivers
      subject: subject,
      // plain text body
      html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
        <div style="margin:50px auto;width:70%;padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">Assured Ensure</a>
          </div>
          <p style="font-size:1.1em">Hi,</p>
          <p>Thank you for choosing Assured Ensure. Use the following OTP to complete your Sign In procedures. OTP is valid for 5 minutes</p>
          <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${otp}</h2>
          <p style="font-size:0.9em;">Regards,<br />Assured Ensure Insurance Marketing LLP</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Assured Ensure Insurance Marketing LLP</p>
            <p>pranav.goel@assuredensure.com</p>
            <p>+91 9837771016 </p>
            <p>+91 7696066677 </p>
            <p>166, Court road, Prakash Chowk, near Pawan hardware store</p>
            <p>Muzaffarnagar</p>
            <p>Uttar Pradesh </p>
          </div> 
        </div>
      </div> `, // html body
      // attachments: [
      //   {
      //     filename: "dataBaseBackup.gzip", // Name of the attached file
      //     path: "Railingo.gzip", // Path to the file you want to attach
      //   },
      // ],
    });
    console.log(info, "check this info");
    if (info.messageId) {
      // res.status(200).json("Email Sent")
    } else {
      // res.status(500).json("Email Not Sent")
    }
    return info;
  } catch (error) {
    console.log(error, "check this error");
  }
};
const sendBackUpFile = async (email, subject) => {
  try {
    const filePath = "Railingo.gzip";
    const fileStream = fs.createReadStream(filePath);
    let transporter = nodemailer.createTransport({
      // for sending mail by using spacific mail
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "portal@assuredensure.com",
        pass: "assured@1987",
      },
    });
    let info = await transporter.sendMail({
      from: "<noreply@temporary.com>", // sender address
      to: email, // list of receivers
      subject: subject,
      text: "Data Base File Backup",
      attachments: [
        {
          filename: "Railingo.gzip", // Name of the attached file
          content: fileStream, // Read the file as a stream
          contentType: 'application/javascript'
        },
      ],
    });

  console.log(info,"info");

    // if (info.messageId) {
    //   res.status(200).json("Email Sent");
    // } else {
    //   res.status(500).json("Email Not Sent");
    // }
  } catch (error) {
    console.log(error, "check this error");
    return false;
  }
};

module.exports = { mailOtpMail, sendBackUpFile };
