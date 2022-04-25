const express = require('express')
const router = express.Router()
const { 
    getStudent, 
    createStudent,
    updateStudent, 
    deleteStudent
 } = require('../controllers/studentController')

module.exports = router

const {protect} = require('../middleware/authMiddleware')

router.get('/', protect, getStudent)

router.post('/', protect, createStudent)

router.put('/:id', protect, updateStudent)

router.delete('/:id', protect, deleteStudent)


module.exports = router