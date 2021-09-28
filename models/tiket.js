// const validator = require("validator");
const mongoose = require("mongoose");

const tiketSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  // owner: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "user",
  //   required: true,
  // },
});

module.exports = mongoose.model('tiket', tiketSchema);
