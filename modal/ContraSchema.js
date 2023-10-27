const mongoose = require("mongoose");
const ContraSchema = new mongoose.Schema(
  {
    EntryDate: {
      type: String,
      // required: true,
    },
    CashBankAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bank",
      // required: true,
    },
    LedgerEntry: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LedgerEntry",
    },
    Remark: {
      type: String,
      // required: true,
    },
    voucherType: {
      type: String,
      default: "Contra",
      // required: true,
    },
    FromModal: {
      type: String,
      // required: true,
    },
    Contra: [
      {
        PartyAccount: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Bank",
        },
        LedgerEntry: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "LedgerEntry",
        },
        Account: {
          type: Number,
        },
        RefNumber: {
          type: String,
        },
        From: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Contra", ContraSchema);
// {
//     PartyAccount: PartyAccountData._id,
//     Account: Number(Account),
//     RefNumber,
//     Name: PartyAccountData.Name,
//   }
