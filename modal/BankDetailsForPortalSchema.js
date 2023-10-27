const mongoose = require("mongoose");
const BankDetailsForPortalSchema = new mongoose.Schema(
  {
    Employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    Pos: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pos",
    },
    Name: {
      type: String,
    },// THIS IS BANK NAME
    IFSC: {
      type: String,
    },
    BankAccountNo: {
      type: String,
    },
    AccountHolderName: {
      type: String,
    },
    panCard: {
      //image
      type: String,
    },
    adharcardFrontImage: {
      //image
      type: String,
    },
    adharcardBackImage: {
      //image
      type: String,
    },
    Cheque: {
      //image
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "BankDetailsForPortal",
  BankDetailsForPortalSchema
);
