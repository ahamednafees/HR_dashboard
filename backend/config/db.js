import mongoose from 'mongoose'

const connectDB = async ()=>{
    try{
         await mongoose.connect(process.env.MONGO_URI);
         console.log(`Connected to Mongo DB`);   
    }
    catch(err){
        console.log(`Error : ${err}`);
        process.exit(1);
    }
}

export default connectDB;