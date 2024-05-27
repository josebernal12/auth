import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './database/config'
import authRouter from './routes/authRoutes'
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
connectDB()
app.use('/api/auth', authRouter)
export default app


