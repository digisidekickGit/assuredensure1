const mongoose = require("mongoose");
const RTOSchema = new mongoose.Schema(
  {
    RTOName: {
      type: String,
      required: true,
    },
    RTOCode: {
      type: String,
      required: true,
    },
    State: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RTO", RTOSchema);
