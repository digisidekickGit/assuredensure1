const mongoose = require("mongoose");

const PayoutGridSchema = new mongoose.Schema(
  {
    InsuranceType: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "InsuranceType",
        required: true,
      },
    ],
    InsuranceCompany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceCompany",
    },
    Broker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broker",
    },
    PolicyType: [{ type: mongoose.Schema.Types.ObjectId, ref: "PolicyType" }],
    RTOGroup: [
      { type: mongoose.Schema.Types.ObjectId, ref: "RtoGroupChecker" },
    ],
    // Manufacturer: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "Manufacturer" },
    // ],
    MakeModal: [{ type: mongoose.Schema.Types.ObjectId, ref: "MakeModal" }],
    PA: {
      type: [],
      // [Without PA,With PA.]
      // type: String,
      // required: true,
    },
    // VehicleModal: [
    //   { type: mongoose.Schema.Types.ObjectId, ref: "VehicleModal" },
    // ],
    BasedOn: {
      type: String,
      required: true,
    },
    NCBSTATUS: {
      type: [],
      // default: "Yes",
      // enum: ["Yes", "No","Not Available"],
    }, // ["Yes","No"]
    IMTType: {
      type: [],
      // enum: ["Not Available", "IMT 23", "IMT 34"],
      // required: true,
    },
    BusinessType: {
      type: [],
      // enum: ["NEW", "USED", "RoleOver + Renewable"],
      // required: true,
    },
    FuelType: {
      type: [String],
    },
    AddDetails: {
      type: [Object],
    },
    isAllRtoGroupSelected: {
      type: Boolean,
      default: false,
    },
    isAllMakeModalSelected: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PayoutGrid", PayoutGridSchema);
