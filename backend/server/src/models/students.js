const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: "Enter your username"
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
    }
})

module.exports = mongoose.model('Student', studentSchema)