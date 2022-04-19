const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 3000
app.use(cors());
app.use(express.json());
const dbo = require("./db/connection");
const bodyParser = require('body-parser'); 
const { ok } = require("assert");
const mongoose = require('mongoose'); 
const User = require('./routes/user'); 
const bcrypt = require('bcryptjs');
//import routes from 'routes.js';

const routes = (app) => {
  //create route for login
  app.route('/login')
    //create get request
    .get((req, res) =>
    res.send('GET request successful!'))
    //create post request
    .post((req, res) =>
    res.set('POST request successful!'));
  // create a new route so you can get these login entries by their ID's
  app.route('/login/:loginID')
    //create put request
    .put((req, res) =>
    res.send('PUT request successful!'))
    //create delete request
    .delete((req, res) =>
    res.send('DELETE request successful'))
}

mongoose.connect('mongodb://localhost:3000/login-db', { 
  //userNewUrlParser: true, 
  useUnifiedTopology: true,
  //useCreateIndex: true
});

//app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json())

routes(app);

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