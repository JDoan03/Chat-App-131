const express = require('express')
const router = express.Router()
const { 
    registerTeacher, 
    loginTeacher,
    getMe
} = require('../controllers/teacherController')

const {protect} = require('../middleware/authMiddleware')

router.get('/me', protect, getMe)
router.post('/', registerTeacher)
router.post('/login', loginTeacher)



module.exports = router