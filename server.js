import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js';
import morgan from 'morgan';
import authRoutes from "./routers/authRoute.js"
import cors from "cors";
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();
import categoryRoutes from './routers/categoryRoutes.js'
import productRoutes from './routers/productRoutes.js'
connectDB();
// esModule
const __filename = fileURLToPath(import.meta.url);
const _dirname = path.dirname(__filename);

const app = express()
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname,'./client/build')));

app.use("/api/v1/auth",authRoutes );
app.use("/api/v1/category",categoryRoutes );
app.use("/api/v1/product",productRoutes );
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});


const PORT =  process.env.PORT || 8080 ;


app.listen(PORT, ()=>{
    console.log(`server running on ${PORT}`);
});