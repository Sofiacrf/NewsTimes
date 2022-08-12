const { Schema, model } = require("mongoose");

const stockSchema = new Schema({
  // Define an id to the stock
  stockId: {
    type: String
  },

  title: {
    type: String
  },

  description: {
    type: String
  }

});

const Stock = model("Stock", stockSchema);

module.exports = Stock;
