const mongoose = require("mongoose");

const PolicySchema = new mongoose.Schema(
  {
    PolicyType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PolicyType",
      required: [true, "PolicyType is required"],
    },
    POS: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pos",
      required: [true, "Pos is required"],
    },
    InsuranceCompany: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceCompany",
      required: true,
    },
    InsuranceType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "InsuranceType",
      required: true,
    }, // CATEGORY*
    InsuranceUnderFlow: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "InsuranceType",
      // required: true,
    },
    PolicyNumber: {
      type: String,
      unique: true,
      required: true,
    },
    ChequeNumber: {
      type: String,
    },
    InsureeName: {
      type: String,
      required: true,
    },
    RSD: {
      type: String,
      required: true,
    },
    RegistrationDate: {
      type: String,
    },
    Commission: {
      type: Object,
    },
    Status: {
      type: String,
      enum: ["PENDING", "APPROVED", "REJECTED", "HOLD"],
      default: "PENDING",
    },
    IMTType: {
      type: String,
      enum: ["IMT 23", "IMT 34", "Not Available"],
      // default: "NONE",
      required: true,
    },
    NCB: {
      type: Number,
      enum: [-1, 0, 20, 25, 35, 45, 50],
      required: true,
    },
    FuelType: {
      type: String,
      // enum: ["NONE", "PETROL", "DIESEL", "PETROL + CNG", "EV"],
      // default: "NONE",
    },
    PA: {
      type: String,
      enum: ["With PA.", "Without PA"],
      // default: "NONE",
    },
    BusinessType: {
      type: String,
      enum: ["NEW", "USED", "RoleOver + Renewable"],
      default: "USED",
      required: true,
    },
    VehicleNumber: {
      type: String,
      required: true,
      validate: [
        {
          validator: async function (v) {
            if (v.length < 4) {
              return false;
            }
          },
          message: (props) =>
            `${props.value} It should Greater then 4 Characters`,
        },
        {
          validator: async function (v) {
            if (v.length === 4) {
              const REGEXfOR4 = /^[A-Z]{2}[0-9]{1,2}$/;
              return REGEXfOR4.test(v);
            }
          },
          message: (props) => `${props.value} It is not a valid vehicle Number`,
        },
        {
          //  OLD VALIDATION  /^[A-Z]{2}[0-9]{1,2}([A-Z])([A-Z]*)[0-9]{4}$/
          validator: async function (v) {
            if (v.length === 4) {
              return true;
            } else {
              const VehicleValidatorRegex =
                /^[A-Z]{2}[0-9]{1,2}([A-Z]*)[0-9]{4,5}$/;
              return VehicleValidatorRegex.test(v);
            }
          },
          message: (props) => `${props.value} It is not a valid vehicle Number`,
        },
        {
          validator: async function (v) {
            if (v.length === 4) {
              return true;
            }
            const count = await mongoose.models.Policy.countDocuments({
              VehicleNumber: v,
            });
            return count === 0;
          },
          message: (props) =>
            `Policy already exist with ${props.value} vehicle number.`,
        },
      ],
    },
    RTO: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "RtoGroupChecker",
    },
    YearOfManufacture: {
      type: String,
      required: true,
    },
    PaymentMode: {
      type: String,
      required: true,
      enum: ["Online", "PartPayment", "Credit", "Cheque"],
    }, // key => TypeOfPaymentMode:[Online,PartPayment,Credit,Cheque] , paidBy,receivedBy,
    IssueDate: {
      type: String,
      required: true,
    },
    ODPremium: {
      type: Number,
      default: 0,
      required: true,
    },
    ODPremiumGST: {
      type: Number,
      default: 0,
      //   required: true,
    },
    TPPremium: {
      type: Number,
      default: 0,
    },
    TPPremiumGST: {
      type: Number,
      default: 0,
    },
    LLPAPremium: {
      type: Number,
      default: 0,
    },
    LLPAPremiumGST: {
      type: Number,
      default: 0,
    },
    GrossPremium: {
      type: Number,
      default: 0,
    },

    NETPremium: {
      type: Number,
      default: 0,
    },
    NewPolicyCopy: {
      type: String,
      required: true,
    },
    RC1: {
      type: String,
    },
    RC2: {
      type: String,
    },
    PreviousPolicy1: {
      type: String,
    },
    PreviousPolicy2: {
      type: String,
    },
    Branch: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
    },

    Remark: {
      type: String,
    },
    GetAmount: {
      type: Number,
      default: 0,
      // ref: "Bank",
      // required: true,
    },
    ReceivedBank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bank",
      // required: true,
    },
    // ReceivedBank:[
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Bank'
    //   },
    //   {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'LedgerEntry'
    //   }
    // ],
    PaidBank: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Bank",
      // required: true,
    },
    MakeModal: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MakeModal",
    },
    Variant: {
      type: String,
    },
    isPurchase: {
      type: Boolean,
      default: false,
    },
    isSale: {
      type: Boolean,
      default: false,
    },
    BasedOn: {
      type: String,
    },
    QCRemark: {
      type: String,
    },
    Broker: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Broker",
    },
    // RM: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Employee",
    // },
    EnteredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    ApprovedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    ApprovedTime: {
      type: String,
    },
  },
  { timestamps: true }
);

// PolicySchema.pre('save', function (next) {
//   if (this.isModified('VehicleNumber')) {
//     this.VehicleNumber = this.VehicleNumber.toUpperCase();
//   }
//   next();
// });

module.exports = mongoose.model("Policy", PolicySchema);
