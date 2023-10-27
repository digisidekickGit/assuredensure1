const mongoose = require("mongoose");
const LedgerGroupSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Under: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LedgerGroup",
    },
    createdBy: {
      type: String,
      default: "Administrator",
    //   default: "By System",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LedgerGroup", LedgerGroupSchema);
