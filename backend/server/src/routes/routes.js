const express = require('express')
const router = express.Router()
const { getStudent, createStudent, updateStudent, deleteStudent } = require('../controllers/controller')

module.exports = router

//router.route('/').get(getStudent).post(createStudent)
//router.route('/:id').delete(deleteStudent).put(updateStudent)

router.get('/', getStudent)

router.post('/', createStudent)

router.put('/:id', updateStudent)

router.delete('/:id', deleteStudent)


module.exports = router