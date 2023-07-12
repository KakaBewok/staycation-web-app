const mongoose = require("mongoose");

const bankSchema = new mongoose.Schema({
  bank: {
    type: String,
    required: true,
  },
  account: {
    type: String,
    required: true,
  },
  accountHolders: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Bank", bankSchema);
