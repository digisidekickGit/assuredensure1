const mongoose = require("mongoose");
const MakeModalSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Variant: [
      {
        VariantName: {
          type: String,
        },
        FuelType: {
          type: String,
        },
        Engine: {
          type: String,
        },
        Seater: {
          type: String,
        },
      },
    ],
    InsuranceType:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceType",
      required:true
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("MakeModal", MakeModalSchema);
