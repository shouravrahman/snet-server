// imports
import 'dotenv/config'
import express from 'express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import morgan from 'morgan'
import connectDb from './utils/db.js'

//express app
const app = express()

//middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(morgan('dev'))

//db connection
connectDb()

//port
const port = process.env.PORT || 8000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
