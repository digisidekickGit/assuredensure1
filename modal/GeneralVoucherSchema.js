const mongoose = require("mongoose");
const GeneralVoucherSchema = new mongoose.Schema(
  {
    EntryDate: {
      type: String,
      // required: true,
    },
    Remark: {
      type: String,
      // required: true,
    },
    voucherType: {
      type: String,
      default: "Journal Voucher",
      // required: true,
    },
    GeneralVoucher: [
      {
        PartyAccount: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Pos",
        },
        LedgerEntry: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "LedgerEntry",
        },
        Broker: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Broker",
        },
        Banks: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Bank",
        },
        Employee: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Employee",
        },
        Account: {
          type: Number,
        },
        CR: {
          type: Number,
          default: 0,
        },
        DR: {
          type: Number,
          default: 0,
        },
        RefNumber: {
          type: String,
        },
        From: {
          type: String,
        },
        IsCrDr: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("GeneralVoucher", GeneralVoucherSchema);
// {
//     PartyAccount: PartyAccountData._id,
//     Account: Number(Account),
//     RefNumber,
//     Name: PartyAccountData.Name,
//   }
