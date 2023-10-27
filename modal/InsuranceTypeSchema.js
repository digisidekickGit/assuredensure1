const mongoose = require("mongoose");
const InsuranceTypeSchema = new mongoose.Schema(
  {
    InsuranceType: {
      type: String,
      required: true,
    },
    InsuranceType: {
      type: String,
      required: true,
    },
    InsuranceCompany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceCompany",
    },
    InsuranceUnder: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceType",
      // required: true,
    },
    Root: {
      type: Boolean,
      // required: true,
    },
    GST: {
      type: Number,
      enum: [12, 18],
      default: 18,
    },
    InsuranceUnderFlow: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "InsuranceType",
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("InsuranceType", InsuranceTypeSchema);
