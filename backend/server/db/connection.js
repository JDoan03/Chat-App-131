const { MongoClient } = require("mongodb");
const Db = process.env.ATLAS_URI;
const client = new MongoClient('mongodb+srv://Nikikosa:<devTeamAltF4>@cluster0.hdxcr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
 
var _db;
 
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db)
      {
        _db = db.db("Users");
        console.log("Successfully connected to MongoDB."); 
      }
      return callback(err);
         });
  },
 
  getDb: function () {
    return _db;
  },
}; 

async function start(){
  await client.connect()
  console.log("Connected")
  module.exports = client.db()
  const app = require('./app')
  app.listen(3000)
}

  start()

