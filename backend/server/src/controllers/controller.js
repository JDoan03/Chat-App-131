const asyncHandler = require('express-async-handler')
const { globalAgent } = require('http')

const Student = require('../models/students')

//@route GET /api/students
const getStudent = asyncHandler(async (req, res) => {

  const students = await Student.find()
  res.status(200).json(students)
})

//@route POST /api/students
const createStudent = asyncHandler(async (req, res) => {

  if(!req.body.userName) {
    res.status(400)
    throw new Error('Please add a username field')
  }

  const student = await Student.create({
    userName: req.body.userName,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName
  }) 

  res.status(200).json(student)
})

//@route PUT /api/students/:id
const updateStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if(!student) {
    res.status(400)
    throw new Error('Student not found')
  }

  const updatedStudent = await Student.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  })

  res.status(200).json(updatedStudent)
})

//@route DELETE /api/students/:id
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if(!student) {
    res.status(400)
    throw new Error('Student not found')
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