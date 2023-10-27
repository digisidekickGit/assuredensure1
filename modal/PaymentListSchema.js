const mongoose = require("mongoose");
const PaymentListSchema = new mongoose.Schema(
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
      default:"Payment"
      // required: true,
    },
    FromModal: {
      type: String,
      // required: true,
    },
    PaymentList: [
      {
        PartyAccount: {
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
        BankDetail:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "BankDetailsForPortal",
        },
        Account: {
          type: Number,
        },
        TDSAmount: {
          type: Number,
          default:0
        },
        TDSPercent: {
          type: Number,
          default:0
        },
        Section: {
          type: String,
        },
        TDSAccount: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "LedgerEntry",
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

module.exports = mongoose.model("PaymentList", PaymentListSchema);
// {
//     PartyAccount: PartyAccountData._id,
//     Account: Number(Account),
//     RefNumber,
//     Name: PartyAccountData.Name,
//   }
