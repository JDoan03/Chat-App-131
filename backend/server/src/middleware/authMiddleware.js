const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];

      //decodes token id
      const decoded = jwt.verify(token, "abc123");

      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      res.status(401);
      throw new Error("Not authorized, token failed");
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});

module.exports = { protect };
/*const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')
const Teacher = require('../models/teacherModel')

const protect = asyncHandler(async(req, res, next) => {
    let token

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            // get token from header
            token = req.headers.authorization.split(' ')[1]

            // verify token 
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            //get teacher from the token
            req.teacher = await Teacher.findById(decoded.id).select('-password')

            next()
        } catch (error) {
            console.log(error)
            res.status(401)
            throw new Error('Not authorized.')
        }
    }

    if(!token) {
        res.status(401)
        throw new Error('Not authorized. No Token.')
    }
})

module.exports = { protect }
*/