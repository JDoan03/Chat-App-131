const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const Teacher = require('../models/teacherModel')

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {expiresIn: '30d'})
}


//@route GET /api/teachers/me
//@access Private
const getMe = asyncHandler(async (req, res) => {
    const { _id, username, firstName, lastName, email } = await Teacher.findById(req.teacher.id)

    res.status(200).json({
        id: _id,
        username,
        firstName,
        lastName,
        email,
    })
    
})

//@route POST /api/teachers/login
const loginTeacher = asyncHandler(async (req, res) => {
    const { username, password } = req.body

    //check username
    const teacher = await Teacher.findOne({username})

    if (teacher && (await bcrypt.compare(password, teacher.password))) {
        res.json({
            _id: teacher.id,
            username: teacher.username,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            email: teacher.email,
            token: generateToken(teacher._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid login credentials')
    }
    
    //check password

})


//@route POST /api/teachers/
const registerTeacher = asyncHandler(async (req, res) => {
    const { username, password, email, firstName, lastName } = req.body

    if (!username || !email || !password) {
        res.status(400)
        throw new Error('Please fill out all fields')
    }

    //check if the teacher exists
    const teacherExists = await Teacher.findOne({email})

    if (teacherExists) {
        res.status(400)
        throw new Error('Teacher already exists')
    }

    //hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    //create teacher
    const teacher = await Teacher.create({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword
    })

    if(teacher) {
        res.status(201).json({
            _id: teacher._id,
            username: teacher.username,
            firstName: teacher.firstName,
            lastName: teacher.lastName,
            email: teacher.email,
            token: generateToken(teacher._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})


module.exports = {
    registerTeacher,
    loginTeacher,
    getMe
}
