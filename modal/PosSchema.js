const mongoose = require("mongoose");

const Pos = new mongoose.Schema(
  {
    Code: {
      type: String,
      required: true,
    },
    Name: {
      type: String,
      required: true,
    },
    Salutation: {
      type: String,
      // required: true,
      default: "",
    },
    MiddleName: {
      type: String,
      default: "",
    },
    LastName: {
      type: String,
      default: "",
    },
    OpeningBalance: {
      type: Number,
      default: 0,
    },
    Email: {
      type: String,
      unique: true,
      required: true,
    },
    Mobile: {
      type: Number,
      required: true,
      unique: true,
    },
    Club: {
      type: String,
      enum: ["Self", "PlatinumClub", "GoldClub", "SilverClub"],
      default: "Self",
    },
    Examined: {
      type: String,
      enum: ["Yes", "No"],
      default: "No",
    },
    ExaminedStatus: {
      type: String,
    },
    ExaminedRemark: {
      type: String,
    },
    Reference: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pos",
    },
    ReportingTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
      required: true,
    },
    ReferenceCriteria: {
      type: Number,
      enum: [1, 2, 3],
      // default: 0, // => 3 is equal to Club difference , 1 & 2 is equal to 1% or 2 %
      //
    },
    PayoutCycle: {
      type: Number,
      enum: [1, 7, 10, 15, 30],
      default: 30, // 1 = Daily , 7 Days = Weekly, 10 = 10 Days , 15 = 15days , 30 = 1 Monthly ,
      //
    },
    // CINCode: {
    //   type: String,
    //   //
    // },
    // Password: {
    //   type: String,
    // },
    // Address: {
    //   type: String,

    // },
    // Locality: {
    //   type: String,
    //   //
    // },
    // State: {
    //   type: String,
    //   //
    // },
    // City: {
    //   type: String,
    //   //
    // },
    // Pincode: {
    //   type: String,
    //   //
    // },
    WDAddress: {
      type: String,
    },
    WDLocality: {
      type: String,
      //
    },
    WDState: {
      type: String,
      //
    },
    WDCity: {
      type: String,
      //
    },
    WDPincode: {
      type: String,
      //
    },
    DOB: {
      type: String,
      required: true,
    },
    DOA: {
      type: String,
    },
    // BankDetails: {
    //   type: [Object],
    // },
    // Name: {
    //   type: String,
    //   //
    // },
    // IFSC: {
    //   type: String,
    //   //
    // },
    // BankAccountNo: {
    //   type: Number,
    //   //
    // },
    MaritalStatus: {
      type: String,
      default: "No",
    },
    GSTINNumber: {
      type: String,
    },
    PanNumber: {
      type: String,
      unique: true,
      required: true,
    },
    panCard: {
      //photo
      type: String,
    },
    AadhaarNumber: {
      type: Number,
      unique: true,
      required: true,
    },
    profilePic: {
      type: String,
    },
    adharcardFrontImage: {
      // photo
      type: String,
    },
    adharcardBackImage: {
      // photo
      type: String,
    },
    MarkSheet: {
      type: String,
    },
    Cheque: {
      type: String, // photo
    },
    OTP: {
      type: Number, // photo
    },
    ForceLogout: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pos", Pos);
