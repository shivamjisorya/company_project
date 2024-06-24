const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
let port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.post("/send_mail", async (req, res) => {
  console.log("API hitting");

  try {
    const email = req.body.email;
    const name = req.body.name;
    const phone = req.body.phone;
    const query = req.body.query;

    console.log(email, name, phone, query);

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "jisoryas26@gmail.com",
        pass: "ngwdqtuebymniorr",
      },
    });

    const mailOptions = {
      from: "jisoryas26@gmail.com",
      to: email,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${query}\nPhone:${phone}`,
    };

    const result = await transporter.sendMail(mailOptions);

    res.status(200).send("Email sent: " + result.response);
  } catch (error) {
    console.log("error", error);
    res.status(500).send(error.toString());
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
