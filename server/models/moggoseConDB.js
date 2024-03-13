import mongoose  from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(`${process.env.MY_URL}/${process.env.MY_NAME}`)

export default mongoose