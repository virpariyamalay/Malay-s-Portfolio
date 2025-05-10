import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from dist directory (for deployment)
app.use(express.static(join(__dirname, 'dist')));

// Hardcoded email credentials for testing
const EMAIL = 'your-malayvirpariya2005@gmail.com';
const EMAIL_PASSWORD = 'noul imfg wezz dfce';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: EMAIL_PASSWORD
  }
});

app.post('/api/contact', async (req, res) => {
  console.log('Received request:', req.body);
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const mailOptions = {
    from: EMAIL,
    to: EMAIL,
    subject: `Portfolio Contact from ${name}`,
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    res.status(500).json({ message: 'Error sending email' });
  }
});

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
