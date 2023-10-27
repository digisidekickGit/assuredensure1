const mongoose = require("mongoose");
const PurchaseSchema = new mongoose.Schema(
  {
    ControlNumber: {
      type: String, // AE00+1 length
    },
    CreditAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pos",
      required: true,
    }, // Pos Account
    DebitAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LedgerEntry",
    },
    EnterDate: {
      type: Date,
      required: true,
    },
    Remark: {
      type: String,
    },
    // TDSPercent: {
    //   type: Number,
    // },
    // TDSAccount: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "LedgerEntry",
    // },
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

module.exports = mongoose.model("Purchase", PurchaseSchema);
