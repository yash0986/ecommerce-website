import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from "./routers/authRoute.js"
import cors from "cors";
dotenv.config();
import categoryRoutes from './routers/categoryRoutes.js'
import productRoutes from './routers/productRoutes.js'
connectDB();
const app = express()
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

app.use("/api/v1/auth",authRoutes );
app.use("/api/v1/category",categoryRoutes );
app.use("/api/v1/product",productRoutes );
app.get("/", (req,res)=>{
    res.send("<h1>Hello world</h1>");
});

const PORT =  8080 ;

app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});