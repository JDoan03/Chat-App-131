const express = require('express')
const { protect } = require("../middleware/authMiddleware");
const router = express.Router()

router.route('/').post(protect, sendMessage)
router.route('/:chatID').get(protect, allMessages)

module.exports = router