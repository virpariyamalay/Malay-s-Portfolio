require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
app.use(cors({
    origin: process.env.CLIENT_URL || 'http://localhost:3000',
    // credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    try {
        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Contact from ${name}`,
            text: `Email: ${email}\nMessage: ${message}`
        });
        res.status(200).json({ message: 'Email sent' });
    } catch (err) {
        res.status(500).json({ message: 'Error sending email', error: err });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`)); 