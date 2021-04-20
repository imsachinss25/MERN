const mongoose = require("mongoose");
const uniqueValidator = require('mongoose-unique-validator');


const studentSchema= new mongoose.Schema({
    Name : String,
    LastName:String,
    Phone:Number,
    Roll : Number,
    
    Address: String
})

const Student = new mongoose.model('Student', studentSchema);
module.exports = Student;
