const mongoose = require("mongoose");
const StateSchema = new mongoose.Schema(
  {
    StateName: {
      type: String,
      required: true,
    },
    StateCode: {
      type: Number,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("State", StateSchema);
