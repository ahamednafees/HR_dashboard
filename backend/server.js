import express from 'express'
import env from 'dotenv'


env.config();
const PORT=process.env.PORT || 3000;

const app = express();

app.listen(PORT,()=>{
    console.log(`Server is running in the port ${PORT}`);
})