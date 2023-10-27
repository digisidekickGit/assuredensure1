const mongoose = require("mongoose");
const BankSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    AccountNumber: {
      type: String,
      required: [true,"Bank Account Number is required"],
    },
    Balance: {
      type: Number,
      required: [true,"Bank Balance is required"],
    },
    Branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      required: [true,"Branch is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bank", BankSchema);
