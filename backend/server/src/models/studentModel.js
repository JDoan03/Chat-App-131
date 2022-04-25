const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Enter your username']
    },
    password: {
        type: String,
        required: "Enter your password"
    },
    firstName: {
        type: String,
       required: "Enter your first name"
    },
    lastName: {
        type: String,
        required: "Enter your last name"
    },
    teacher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Teacher'
    }
})

module.exports = mongoose.model('Student', studentSchema)