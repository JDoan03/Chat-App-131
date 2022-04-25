const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter your password'],
    },
    firstName: {
        type: String,
        required: [true, 'Please enter your first name'],
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        unique: true
    },
},
{
    timestamps: true
})

module.exports = mongoose.model('Teacher', teacherSchema)