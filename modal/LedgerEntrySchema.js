const mongoose = require("mongoose");
const LedgerEntrySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    OpeningBalance: {
      type: Number,
      default: 0,
    },
    Group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LedgerGroup",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("LedgerEntry", LedgerEntrySchema);
