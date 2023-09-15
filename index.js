import express from 'express'
import connectDB from './DB/ConnectDb.js';
import studentRouter from './Routes/studentRouter.js';

import bodyParser from 'body-parser';
import addUserRouter from './Routes/userRouter.js';
import addmissionForm1Router from './Routes/addmissionForm1Router.js';
import enquiryFormRouter from './Routes/enquiryFormRouter.js';

import dotenv from 'dotenv'
dotenv.config()

const app = express()
const port = process.env.PORT || '3000'

//data base connection start
const DATABASE_URL = process.env.DATABASE_URL 

const DBNAME=process.env.DBNAME
connectDB(DATABASE_URL,DBNAME);
//data base connection end

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))

//load routes
app.use('/student', studentRouter)
app.use('/user', addUserRouter)
app.use('/admission', addmissionForm1Router)
app.use('/enquiry', enquiryFormRouter)




app.listen(port, () => {
    console.log(`server started at ${port}`);
})