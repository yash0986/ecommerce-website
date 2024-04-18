import mongoose from 'mongoose'
import morgan from 'morgan'
import colors from 'colors'

const connectDB =async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB database ${conn.connection.host}`)
    }
    catch(error){
        console.log(`error in MongoDB ${error}`.bgRed.white)
    }
}

export default connectDB;