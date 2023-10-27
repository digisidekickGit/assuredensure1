const mongoose = require("mongoose");

const VehicleModalSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Manufacturer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Manufacturer",
      required: true,
    },
    InsuranceType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceType",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("VehicleModal", VehicleModalSchema);
