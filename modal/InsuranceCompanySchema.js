const mongoose = require("mongoose");
const InsuranceCompanySchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
    },
    Number: {
      type: String,
    },
    Address: {
      type: String,
    },
    Logo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InsuranceCompany", InsuranceCompanySchema);
