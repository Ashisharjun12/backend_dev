import dotenv from 'dotenv'
import express from 'express';
import connectDB from "./db/index.js";
const app = express()

dotenv.config({
    path:'./env'
})


connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is Running At : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("monngo DB Connection Failed",err);
})




//IIFE
// ;( async()=>{
//     try {
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//     } catch (error) {
//         console.log(error,"error");
//         throw error
//     }
// } )()