const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const axios = require('axios'); 
const dotenv = require('dotenv');
const getUserData = require('./scrap');

dotenv.config();
const app = express();
const RECAPTCHA_SECRET_KEY = process.env.SECRET_KEY;
const port = process.env.PORT || 4000;


app.use(bodyParser.json());

app.use(cors({
    origin: process.env.CLIENT_URI, 
    credentials: true
}));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  },
  debug: false
});

app.get('/api/',(req,res)=>{
  res.send('this is the server for react portfolio ');
})

app.post('/api/send-email', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptionsOwner = {
    from: email,
    to: process.env.MY_EMAIL,
    subject: 'New Contact Form Submission on your portfolio',
    text: `You have a new message from:
    Name: ${name}
    Email: ${email}
    Message: ${message}`,
  };

  const mailOptionsUser = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: 'Contact Form Submission Confirmation',
    text: `Dear ${name},
    \nThank you for contacting me. Your message has been received and I appreciate the time you've taken to reach out.
    I will review your message carefully and get back to you as soon as possible. Your interest is important to me.
    \n\nBest regards,
    Shinkhal Sinha`,
  };

  transporter.sendMail(mailOptionsOwner, (error, info) => {
    if (error) {
      console.error('Error sending email to owner:', error);
      return res.status(500).send(error.toString());
    }
    transporter.sendMail(mailOptionsUser, (error, info) => {
      if (error) {
        console.error('Error sending email to user:', error);
        return res.status(500).send(error.toString());
      }
      console.log('Emails sent successfully!');
      res.status(200).json({ message: 'Emails sent successfully!' });
    });
  });
});


app.get('/api/:userName', async (req, res) => {
  try {
    const userName=req.params.userName;
    const data = await getUserData(userName);
    if(!data)
        res.send("User name not found !")
    // console.log(data)
    else
      res.send(data);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
