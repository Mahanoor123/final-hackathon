import express from 'express';
const app = express()
import cors from "cors";
const port = 5000
import dbConnection from './config/db.js';
import dotenv from 'dotenv';
import authRoutes from "./routes/authRoutes.js"



dotenv.config();
dbConnection();

app.use(express.json())

app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true
}));

app.use("/api/auth", authRoutes);


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))