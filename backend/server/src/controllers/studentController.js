const asyncHandler = require('express-async-handler')
const { globalAgent } = require('http')

const Student = require('../models/studentModel')
const Teacher = require('../models/teacherModel')
const { unsubscribe } = require('../routes/teacherRoutes')

//@route GET /api/students
const getStudent = asyncHandler(async (req, res) => {

  const students = await Student.find({teacher: req.teacher.id})
  res.status(200).json(students)
})

//@route POST /api/students
const createStudent = asyncHandler(async (req, res) => {

  if(!req.body.username) {
    res.status(400)
    throw new Error('Please add a username field')
  }

  const student = await Student.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    teacher: req.teacher.id
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

  const teacher = await Teacher.findById(req.teacher.id)

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

//@route DELETE /api/students/:id
const deleteStudent = asyncHandler(async (req, res) => {
  const student = await Student.findById(req.params.id)

  if(!student) {
    res.status(400)
    throw new Error('Student not found')
  }

  const teacher = await Teacher.findById(req.teacher.id)

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