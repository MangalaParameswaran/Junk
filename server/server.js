import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import router from './Routes/index.js'
import colors from 'colors'

dotenv.config()

const app=express()

app.use(cors())
app.use(express.json())


let PORT=process.env.PORT || 8000


app.use('/', router)

app.listen(PORT,()=>{
    console.log(`App is listening Dude ${PORT}`.bgMagenta);
})

