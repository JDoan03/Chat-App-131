const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  registerStudent,

} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

router.route("/student").post(protect, registerStudent);

module.exports = router;