const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
const connectDB = require("./db/connection");
const bodyParser = require('body-parser'); 

const {errorHandler} = require('./src/middleware/errorMiddleware')

connectDB()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json())
app.use('/api/students', require('./src/routes/routes'))

app.use(errorHandler)

app.listen(port, () => {

    console.log(`Server is running on port: ${port}`);
  }); 