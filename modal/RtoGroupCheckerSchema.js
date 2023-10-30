const mongoose = require("mongoose");
const RtoGroupCheckerSchema = new mongoose.Schema(
  {
    GroupName: {
      type: String,
      require: true,
      // required: true,
    },
    DEF: {
      type: String,
      require: true,
      // required: true,
    },
    State: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "State",
    },
    InsuranceCompany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceCompany",
      require: true,
      // required: true,
    },
    InsuranceType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceType",
      require: true,
    },
  
    ListOfRto: [{ type: mongoose.Schema.Types.ObjectId, ref: "RTO" }],
    ListOfRtoLog: [
      {
        Date: {
          type: String,
        },
        DEF: {
          type: Date,
        },
        List: [{ type: mongoose.Schema.Types.ObjectId, ref: "RTO" }],
        Added: {
          type: [{ type: mongoose.Schema.Types.ObjectId, ref: "RTO" }],
        },
        Removed: {
          type: [{ type: mongoose.Schema.Types.ObjectId, ref: "RTO" }],
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("RtoGroupChecker", RtoGroupCheckerSchema);
// {
//     PartyAccount: PartyAccountData._id,
//     Account: Number(Account),
//     RefNumber,
//     Name: PartyAccountData.Name,
//   }
