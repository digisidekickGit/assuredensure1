const mongoose = require("mongoose");
const AccountancySchema = new mongoose.Schema(
  {
    VoucherType: {
      type: String,
    },
    VoucherNo: {
      type: String,
    },
    EntryDate: {
      type: String,
    },
    RefNumber: {
      type: String,
    },
    Remark: {
      type: String,
    },
    Ledger: {
      type: mongoose.Schema.Types.ObjectId,
    },
    oppositeLedger: {
      type: mongoose.Schema.Types.ObjectId,
    },
    // DR: {
    //   type: Number,
    //   // required: true,
    // },
    // CR: {
    //   type: Number,
    //   // required: true,
    // },
    Amount: {
      type: Number,
      required: true,
    },
    CreatedWhich: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Accountancy", AccountancySchema);
