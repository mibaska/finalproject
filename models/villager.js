const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const villagerSchema = new Schema({
  villager_name: { type: String, required: true },
  villager_birthday: { type: Date, required: true },
  villager_style_aleph: { type: String, required: true },
  villager_style_beth: { type: String, required: false }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;