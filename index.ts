import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import path from './src/router/router'

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())
app.use(path)

app.listen(process.env.PORT, () => {
    console.log('servidor corriendo en el puerto: ' , process.env.PORT)
})