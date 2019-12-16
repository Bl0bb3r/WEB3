const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Firstname: { type: String, required: true, max: 255, min: 4 },
  Lastname: { type: String, required: true, max: 255, min: 4 },
  //Probably going to have to set Nickname to be unique too...
  Nickname: { type: String, required: true, max: 255, min: 4 },
  Email: { type: String, required: true, max: 255, min: 6 },
  Password: { type: String, required: true, max: 1024, min: 6 },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", userSchema);
