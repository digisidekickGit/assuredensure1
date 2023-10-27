const mongoose = require("mongoose");
const DebitNoteSchema = new mongoose.Schema(
  {
    EntryDate: {
      type: String,
      // required: true,
    },
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
    Remark: {
      type: String,
      // required: true,
    },
    voucherType: {
      type: String,
      default: "DebitNotes",
      // required: true,
    },
    FromModal: {
      type: String,
      // required: true,
    },
    DebitNotes: [
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
        Account: {
          type: Number,
        },
        RefNumber: {
          type: String,
        },
        key: {
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

module.exports = mongoose.model("DebitNote", DebitNoteSchema);
