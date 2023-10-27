const mongoose = require("mongoose");
const PolicyTypeSchema = new mongoose.Schema(
  {
    PolicyTypeName: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("PolicyType", PolicyTypeSchema);
