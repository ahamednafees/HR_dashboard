import express from 'express'
import env from 'dotenv'
import connectDB from './config/db.js';


env.config();
const PORT=process.env.PORT || 3000;

const app = express();

connectDB();


app.listen(PORT,()=>{
    console.log(`Server is running in the port ${PORT}`);
})