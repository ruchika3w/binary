import  express  from "express"
import dotenv from 'dotenv'
import mongoose from "mongoose"
import cors from 'cors'
import {authRoutes} from './routes/authRoutes.js'

import cookieParser from "cookie-parser"
dotenv.config()

const app=express()

app.use(express.json())
app.use(cors({
    origin :["http://localhost:5173"],
    credentials: true
}
))
app.use(cookieParser())
app.use('/api/auth' , authRoutes)

mongoose.connect('mongodb://127.0.0.1:27017/authentication')
app.listen(process.env.PORT , ()=>{
    console.log("server is running");
})
