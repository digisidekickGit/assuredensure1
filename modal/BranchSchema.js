const mongoose = require("mongoose");
const BranchSchema = new mongoose.Schema(
  {
    BranchName: {
      type: String,
      required: true,
    },
    BranchCode: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Branch", BranchSchema);
