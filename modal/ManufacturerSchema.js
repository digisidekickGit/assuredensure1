const mongoose = require("mongoose");
const ManufacturerSchema = new mongoose.Schema(
  {
    ManufacturerName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Manufacturer", ManufacturerSchema);
