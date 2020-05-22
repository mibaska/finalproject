var express = require("express");
const mongoose = require("mongoose");
var path = require('path');
var app = express();
const routes = require("./routes");
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://villagers");

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});