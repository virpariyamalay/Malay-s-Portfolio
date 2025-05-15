// // import express from 'express';
// // import nodemailer from 'nodemailer';
// // import cors from 'cors';
// // import dotenv from 'dotenv';
// // import { fileURLToPath } from 'url';
// // import { dirname, join } from 'path';

// // dotenv.config();

// // const __filename = fileURLToPath(import.meta.url);
// // const __dirname = dirname(__filename);

// // const app = express();

// // app.use(cors());
// // app.use(express.json());

// // // Serve static files from dist directory (for deployment)
// // app.use(express.static(join(__dirname, 'dist')));

// // // Hardcoded email credentials for testing
// // const EMAIL = 'your-malayvirpariya2005@gmail.com';
// // const EMAIL_PASSWORD = 'noul imfg wezz dfce';

// // const transporter = nodemailer.createTransport({
// //   service: 'gmail',
// //   auth: {
// //     user: EMAIL,
// //     pass: EMAIL_PASSWORD
// //   }
// // });

// // app.post('/api/contact', async (req, res) => {
// //   console.log('Received request:', req.body);
// //   const { name, email, message } = req.body;

// //   if (!name || !email || !message) {
// //     return res.status(400).json({ message: "All fields are required." });
// //   }

// //   const mailOptions = {
// //     from: EMAIL,
// //     to: EMAIL,
// //     subject: `Portfolio Contact from ${name}`,
// //     text: `
// //       Name: ${name}
// //       Email: ${email}
// //       Message: ${message}
// //     `
// //   };

// //   try {
// //     await transporter.sendMail(mailOptions);
// //     res.status(200).json({ message: 'Email sent successfully' });
// //   } catch (error) {
// //     console.error('❌ Error sending email:', error);
// //     res.status(500).json({ message: 'Error sending email' });
// //   }
// // });

// // // Handle all other routes by serving index.html
// // app.get('*', (req, res) => {
// //   res.sendFile(join(__dirname, 'dist', 'index.html'));
// // });

// // const PORT = process.env.PORT || 3000;
// // app.listen(PORT, () => {
// //   console.log(`🚀 Server running on port ${PORT}`);
// // });
// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';
// import { fileURLToPath } from 'url';
// import { dirname, join } from 'path';

// // Load environment variables
// dotenv.config();

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());

// // Serve static files from dist directory (for deployment)
// app.use(express.static(join(__dirname, 'dist')));

// // Retrieve email credentials from environment variables
// const EMAIL = process.env.EMAIL;
// const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

// // Create a transporter using Gmail SMTP
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: EMAIL,
//     pass: EMAIL_PASSWORD,
//   },
// });

// // POST request to handle the contact form submission
// app.post('/api/contact', async (req, res) => {
//   const { name, email, message } = req.body;

//   // Basic validation
//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'All fields are required.' });
//   }

//   // Simple email validation using regex
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   if (!emailPattern.test(email)) {
//     return res.status(400).json({ message: 'Invalid email format.' });
//   }

//   // Mail options
//   const mailOptions = {
//     from: EMAIL,
//     to: EMAIL,
//     subject: `Portfolio Contact from ${name}`,
//     text: `
//       Name: ${name}
//       Email: ${email}
//       Message: ${message}
//     `,
//   };

//   try {
//     // Send the email
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: 'Email sent successfully!' });
//   } catch (error) {
//     console.error('❌ Error sending email:', error);
//     res.status(500).json({ message: `Error sending email: ${error.message}` });
//   }
// });

// // Serve index.html for all other routes
// app.get('*', (req, res) => {
//   res.sendFile(join(__dirname, 'dist', 'index.html'));
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// const server = app.listen(PORT, () => {
//   console.log(`🚀 Server running on port ${PORT}`);
// });

// // Graceful shutdown handling
// process.on('SIGINT', () => {
//   console.log('Server shutting down...');
//   server.close(() => {
//     process.exit(0);
//   });
// });

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables early
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Middleware
app.use(cors()); // Consider specifying origins in production for security
app.use(express.json());

// Serve static files (for production build)
app.use(express.static(join(__dirname, 'dist')));

// Retrieve email credentials from environment variables
const EMAIL = process.env.EMAIL;
const EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

// Validate that email credentials exist
if (!EMAIL || !EMAIL_PASSWORD) {
  console.error('❌ ERROR: Missing EMAIL or EMAIL_PASSWORD environment variables');
  process.exit(1); // Exit early if env vars are missing
}

// Create nodemailer transporter with Gmail SMTP
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD,
  },
});

// Verify transporter configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Error with email transporter:', error);
  } else {
    console.log('✅ Email transporter is ready');
  }
});

// POST /api/contact to handle contact form submissions
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  // Simple email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ message: 'Invalid email format.' });
  }

  // Compose mail options
  const mailOptions = {
    from: EMAIL,
    to: EMAIL, // You can change this if you want to send it to another address
    subject: `Portfolio Contact from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Message:
${message}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    // Avoid exposing internal error details in production
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
});

// Serve index.html for all other routes (single-page app support)
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('🛑 Server shutting down...');
  server.close(() => {
    process.exit(0);
  });
});
