const mongoose = require('mongoose')
const User = require('./userModel')

const studentSchema = new mongoose.Schema({
    firstName: { type: String, required: "Enter a first name"},
    lastName: {type: String, required: "Enter a last name" },
    teacher: {
       type: mongoose.Schema.Types.ObjectId,
       required: true,
       ref: User
    }
})

module.exports = mongoose.model('Student', studentSchema)