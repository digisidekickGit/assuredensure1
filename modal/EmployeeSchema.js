const mongoose = require("mongoose");

const EmployeeSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Salutation: {
      type: String,
      // required: true,
    },
    MiddleName: {
      type: String,
    },
    LastName: {
      type: String,
    },
    EmployeeCode: {
      type: String,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    MobileNumber: {
      type: Number,
      required: true,
    },
    Password: {
      type: String,
    },
    DOB: {
      type: String,
      required: true,
    },
    DOA: {
      type: String,
    },
    JoiningDate: {
      type: String,
      required: true,
    },
    FatherName: {
      type: String,
      required: true,
    },
    Gender: {
      type: String,
    },
    MaritalStatus: {
      type: String,
    },
    Digination: {
      type: String,
    },
    Department: {
      type: String,
      required: true,
    },
    AadhaarNumber: {
      type: String,
      required: true,
    },
    PanNumber: {
      type: String,
      required: true,
    },
    ReferralBy: {
      type: String,
    },
    NomineeName: {
      type: String,
    },
    NomineeRelation: {
      type: String,
    },

    PFNumber: {
      type: String,
    },
    PFNumberCheckbox: {
      type: Boolean,
      default: false,
    },
    ESICheckbox: {
      type: Boolean,
      default: false,
    },
    EmployeeStateInsurance: {
      type: String,
    },
    Address: {
      type: String,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
    City: {
      type: String,
      required: true,
    },
    Pincode: {
      type: String,
      required: true,
    },
    EmergencyContactNumber: {
      type: String,
    },
    WeekendDay: {
      type: String,
    },
    Qualification: {
      type: String,
    },
    Religion: {
      type: String,
    },
    BloodGroup: {
      type: String,
    },
    AccountHolderName: {
      type: String,
    },
    Name: {
      type: String,
    },
    IFSC: {
      type: String,
    },
    BankAccountNo: {
      type: String,
    },
    SpokeLocation: {
      type: String,
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
    Cheque: {
      type: String, // photo
    },
    MarkSheet: {
      type: String,
    },
    panCard: {
      type: String,
    },
    Contract: {
      type: String,
    },
    ReportingTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    Permission: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RBAC",
    },
    Branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },
    ForceLogout: {
      type: Boolean,
      default: false,
    },
    OTP: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Employee", EmployeeSchema);
