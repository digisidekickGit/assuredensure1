const mongoose = require("mongoose");
const PurchaseReturnSchema = new mongoose.Schema(
  {
    ControlNumber: {
      type: String, // MZN+1000 length
    },
    CreditAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LedgerEntry",
    }, // Pos Account
    DebitAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pos",
      required: true,
    },
    EnterDate: {
      type: Date,
      required: true,
    },
    Remark: {
      type: String,
    },
    TDSPercent: {
      type: Number,
    },
    TDSAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LedgerEntry",
    },
    NetAmount: {
      type: Number,
    },
    TotalAmount: {
      type: Number,
    },
    Policy: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Policy",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("PurchaseReturn", PurchaseReturnSchema);
