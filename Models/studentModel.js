import mongoose from 'mongoose'

// defining schema

const studentSchema = new mongoose.Schema({
    name:String,
    email:String,
    message:String,
   
})

//model

const studentModel = mongoose.model("student",studentSchema)


export default studentModel