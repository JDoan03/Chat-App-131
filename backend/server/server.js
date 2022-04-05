const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
app.use(require("./routes/user"));
const dbo = require("./db/connection");
const bodyParser = require('body-parser'); 
const { ok } = require("assert");
const mongoose = require('mongoose'); 
const User = require('./routes/user'); 
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost:3000/login-db', { 
  //userNewUrlParser: true, 
  useUnifiedTopology: true,
  //useCreateIndex: true
});

app.use(bodyParser.json())

app.post('api/register', async (req, res) =>{ 
  console.log(req.body)
   
  
  
  const {username, password: plainTextPassord} = req.body;

  const password = await bcrypt.hash(password, 10); 
  //console.log(await bcrypt.hash(password, 10))
  //
  try{ 
    const response = await User.create({
      username, 
      password
    }) 
    console.log('User created succsesfully'); 
  }catch(error){ 
    console.log(error)
    
  }

  res.json({status: 'ok'}); 

});

app.listen(port, () => {
    // perform a database connection when server starts
    dbo.connectToServer(function (err) {
      if (err) console.error(err);
   
    });
    console.log(`Server is running on port: ${port}`);
  }); 