import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const  connectDB = async()=>{
    try {
       const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`mongoDB connected DB Host ${connect.connection.host}`);
    } catch (error) {
        console.log("MongoDB connection failed",error);
    }

}

export default connectDB