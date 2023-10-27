const mongoose = require("mongoose");
const InsuranceSubCategory = new mongoose.Schema(
  {
    InsuranceSubCategory: {
      type: String,
      required: true,
    },
    CategoryName: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InsuranceSubCategory", InsuranceSubCategory);
