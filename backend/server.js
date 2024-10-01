const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5002;

app.use(cors());  // Enable CORS
app.use(express.json());  // To handle JSON payloads

const sendmail = require('sendmail')();

// Set up Nodemailer transport
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Or any other email service
  auth: {
    user: 'poonam29011987@gmail.com', // Your email address
    pass: 'Poonam@123',  // Your email password
  },
});

// let transporter = nodemailer.createTransport({
//   host: 'smtp.gmail.com',
//   port: 465, // Use 465 for SSL or 587 for TLS
//   secure: true, // true for SSL, false for TLS
//   auth: {
//     user: 'nextgenitwave.hunters@gmail.com',
//     pass: '@nextgenitwave@', // Use App Password here if 2FA is enabled
//   },
// });

// API route to handle form submission and send email
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  console.log(" req.body >>> ", req.body)

  // Define the mail options
  const mailOptions = {
    from: 'nextgenitwave.hunters@gmail.com',
    to: 'nextgenitwave.hunters@gmail.com', // The email address you want to send to
    subject: `New Contact Form Submission from ${name}`,
    text: `
      You have a new contact form submission:
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `,
  };

  // Send the email
  try {
    await transporter.sendMail(mailOptions);
    // Respond to the frontend with success
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Error sending email. Please try again later.' });
  }
});

app.get('/api/contact', async (req, res) => {
  // const { name, email, phone, message } = req.body;

  console.log(" req.body >>> ")

  sendmail({
    from: 'nextgenitwave.hunters@gmail.com',
    to: 'nextgenitwave.hunters@gmail.com',
    subject: 'Hello World',
    html: 'Mail of test sendmail '
  }, function (err, reply) {
    console.log(" Err >>>>>>>>" && err.stack)
    console.log("++++++++++++++ ")
    res.status(200).json({ message: 'Email sent successfully!' });
  })

  // Define the mail options
  // const mailOptions = {
  //   from: 'nextgenitwave.hunters@gmail.com',
  //   to: 'nextgenitwave.hunters@gmail.com', // The email address you want to send to
  //   subject: `New Contact Form Submission from Samir`,
  //   text: `
  //     You have a new contact form submission:
  //     Name: "Samir"
  //     Email: 'sam@sam.sam'
  //     Phone: '9999999999'
  //     Message: 'Message'
  //   `,
  // };

  // Send the email
  // try {
  //   // await transporter.sendMail(mailOptions);
  //   // Respond to the frontend with success
  //   res.status(200).json({ message: 'Email sent successfully!' });
  // } catch (error) {
  //   console.error('Error sending email:', error);
  //   res.status(500).json({ message: 'Error sending email. Please try again later.' });
  // }
  // res.status(200).json({ message: 'Email sent successfully!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
