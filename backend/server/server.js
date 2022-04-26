const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
const connectDB = require("./db/connection");
const bodyParser = require('body-parser'); 

const {errorHandler} = require('./src/middleware/errorMiddleware');
const { addToGroup } = require("./src/controllers/chatControllers");

connectDB()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())

app.use('/api/students', require('./src/routes/studentRoutes'))
app.use('/api/teachers', require('./src/routes/teacherRoutes'))
app.use('/api/chat', require('./src/routes/chatRoutes'))
app.use('/api/user', require('./src/routes/userRoutes'))
app.use('/api/message', require('./src/routes/messageRoutes'))

app.use(errorHandler)

app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);
  }); 