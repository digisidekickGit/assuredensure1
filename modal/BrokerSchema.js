const mongoose = require("mongoose");
const BrokerSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    OpeningBalance: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Broker", BrokerSchema);
