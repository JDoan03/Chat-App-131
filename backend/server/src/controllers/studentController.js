const asyncHandler = require('express-async-handler')

const Student = require('../models/studentModel')
const User = require('../models/userModel')
const generateToken = require("../config/generateToken");

//@route GET /api/student
const getStudent = asyncHandler(async (req, res) => {

  const students = await Student.find({teacher: req.user._id})
  res.status(200).json(students)
})

//@route POST /api/student
const createStudent = asyncHandler(async (req, res) => {

  if(!req.body.firstName || !req.body.lastName) {
    res.status(400)
    throw new Error('Please enter a first and last name.')
  }

  const student = await Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    teacher: req.user._id
  }) 

  if (student) {
    res.status(201).json({
      _id: student._id,
      firstName: student.firstName,
      lastName: student.lastName,
      teacher: student.teacher,
      token: generateToken(student._id),
    });
  } else {
    res.status(400);
    throw new Error("Student not found");
  }

})

//@route PUT /api/student/:id
const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if(!student) {
    res.status(400)
    throw new Error('Student not found')
  }

  const teacher = await User.findById(req.user._id)

  if(!teacher) {
    res.status(401)
    throw new Error('Teacher not found')
  }

  if(student.teacher.toString() !== teacher.id) {
    res.status(401)
    throw new Error('Teacher not authorized')
  }

  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedStudent)
})

//@route DELETE /api/student/:id
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if(!student) {
    res.status(400)
    throw new Error('Student not found')
  }

  const teacher = await User.findById(req.user.id)

  if(!teacher) {
    res.status(401)
    throw new Error('Teacher not found')
  }

  if(student.teacher.toString() !== teacher.id) {
    res.status(401)
    throw new Error('Teacher not authorized')
  }


  await Student.deleteOne(student)

  res.status(200).json(`Student ${req.params.id} deleted`)
})


module.exports = {
  getStudent,
  createStudent,
  updateStudent,
  deleteStudent
}