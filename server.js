var express = require("express");
var mysql = require("mysql");
var path = require('path');
var app = express();
var db = require("./models");
var PORT = process.env.PORT || 3001;
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"yourRootPassword",
    database: "villagers_db"
  });
}

connection.connect(function(err){
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);

});

express.static(path.join(__dirname, '../client/build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/villagers", function(req, res) {
  db.Villagers.findAll({}).then(function(dbVillager) {
    res.json(dbVillager);
  });
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});