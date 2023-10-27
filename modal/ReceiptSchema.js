const mongoose = require("mongoose");
const ReceiptSchema = new mongoose.Schema(
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
      default: "Receipt",
      // required: true,
    },
    FromModal: {
      type: String,
      // required: true,
    },
    Receipt: [
      {
        PartyAccount:  {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pos",
        },
        LedgerEntry:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "LedgerEntry",
        },
        Broker:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Broker",
        },
        Employee:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Employee",
        },
        Banks:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Bank",
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

module.exports = mongoose.model("Receipt", ReceiptSchema);
// {
//     PartyAccount: PartyAccountData._id,
//     Account: Number(Account),
//     RefNumber,
//     Name: PartyAccountData.Name,
//   }
