import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';


const connectDB = async () =>{
    try {
        console.log("Establishing DB connection....")
        await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`MONGODB CONNECTED`);        
    } catch (error) {
        console.error("MONGOOSE ERROR", error);
        process.exit(1)
    }
}

export default connectDB