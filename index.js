import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import FormData from './Model/Schema.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT;
const db = process.env.MONGO_URI;

app.use(express.json());

app.use(cors());

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.post('/api/submitFormData', (req, res) => {
    const { fullName, email } = req.body;

    if (!fullName || !email || !mobile) {
        return res.status(400).json({ error: 'Kindly provide all the required details!' });
    }

    const newFormData = new FormData({ fullName, email, mobile });
    newFormData.save()
        .then(() => {
            res.status(200).json({ message: 'Form data saved successfully' });
        })
        .catch((error) => {
            console.error('Error saving form data:', error);
            res.status(500).json({ error: 'Failed to save form data' });
        });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
