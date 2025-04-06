import express from "express";
import api from './routes/index.js'
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from "cors";

dotenv.config()
mongoose.connect('mongodb+srv://sanketwalhekar83:9665998329@cluster0.sevwc.mongodb.net/project', () => {
    console.log('connect');
}, (e) => console.log(e))


const PORT = process.env.SERVER_PORT || 5000
const origin = process.env.CORS_ORIGIN || '3.111.139.9:5173'

const app = express()

app.use(cors({
    origin
}));
app.use(express.json())
app.use(express.urlencoded())

app.use(api)

app.listen(PORT, () => {
    console.log(`Your app is running in http://localhost:${PORT}`)
})
