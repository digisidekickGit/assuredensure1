const mongoose = require("mongoose");
const Pincode = new mongoose.Schema(
  {
    Pincode: {
      type: String,
      required: true,
    },
    PincodeLocation: {
      type: String,
      required: true,
    },
    CityCode: {
      type: String,
      required: true,
    },
    StateCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pincode", Pincode);
