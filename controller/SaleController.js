const SaleSchema = require("../modal/SaleSchema");
const PolicySchema = require("../modal/PolicySchema");
const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const { GST_ID_FOR_LEDGER } = require("../util/HardCodedDB");
const getSale = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, StartDate, EndDate } = req.query;

    console.log({ StartDate, EndDate }, "StartDate,EndDate ");
    const totalDocs = await SaleSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    }).countDocuments();

    const results = await SaleSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    })
      .sort({ SaleCode: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate({
        path: "CreditAccount",
        select: {
          Name: 1,
        },
      })
      .populate({
        path: "DebitAccount",
        select: { Name: 1 },
      });
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};

const postSale = async (req, res, next) => {
  try {
    const {
      CreditAccount,
      DebitAccount,
      EnterDate,
      Remark,
      GstAmount,
      TotalAmount,
      NetAmount,
      SelectedPolicyOpt,
    } = req.body;

    const CREATE_ACCOUNTANCY = [];

    const Arr = SelectedPolicyOpt.map((ele) => {
      return ObjectId(ele);
    });

    const que = {};
    if (DebitAccount) {
      que["DebitAccount"] = ObjectId(DebitAccount);
    }

    const totalDocs = await SaleSchema.find({}).countDocuments();
    let ControlNumber = `AE00${1 + totalDocs}`;

    const SaleDetails = await SaleSchema.create({
      ControlNumber,
      CreditAccount,
      EnterDate,
      Remark,
      TotalAmount,
      NetAmount,
      Policy: Arr,
      ...que,
    });

    const CRForPOS = {
      VoucherType: "Sale",
      CreatedWhich: SaleDetails?._id,
      EntryDate: EnterDate,
      Ledger: CreditAccount,
      oppositeLedger: DebitAccount,
      RefNumber: ControlNumber,
      Remark: Remark,
      Amount: TotalAmount,
    };
    const DRForPOS = {
      VoucherType: "Sale",
      CreatedWhich: SaleDetails?._id,
      EntryDate: EnterDate,
      Ledger: DebitAccount,
      oppositeLedger: CreditAccount,
      RefNumber: ControlNumber,
      Remark: Remark,
      Amount: -TotalAmount,
    };

    CREATE_ACCOUNTANCY.push(CRForPOS, DRForPOS);

    // if (GstAmount) {
    //   const CRForGST = {
    //     VoucherType: "Sale",
    //     CreatedWhich: SaleDetails?._id,
    //     EntryDate: EnterDate,
    //     Ledger: CreditAccount,
    //     oppositeLedger: GST_ID_FOR_LEDGER,
    //     RefNumber: ControlNumber,
    //     Remark: Remark,
    //     Amount: -GstAmount,
    //   };
    //   const DRForGST = {
    //     VoucherType: "Sale",
    //     CreatedWhich: SaleDetails?._id,
    //     EntryDate: EnterDate,
    //     Ledger: GST_ID_FOR_LEDGER,
    //     oppositeLedger: CreditAccount,
    //     RefNumber: ControlNumber,
    //     Remark: Remark,
    //     Amount: GstAmount,
    //   };
    //   CREATE_ACCOUNTANCY.push(CRForGST, DRForGST);
    // }

    await AccountancySchema.insertMany(CREATE_ACCOUNTANCY);

    await PolicySchema.updateMany(
      { _id: { $in: Arr } },
      {
        isSale: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Sale Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putSale = async (req, res, next) => {
  const {
    DebitAccount,
    EnterDate,
    Remark,
    GstAmount,
    TotalAmount,
    NetAmount,
    SelectedPolicyOpt,
    UnSelectedPolicyOpt,
  } = req.body;
  const CREATE_ACCOUNTANCY = [];
  const que = {};
  if (DebitAccount) {
    que["DebitAccount"] = ObjectId(DebitAccount);
  }
  const Arr = SelectedPolicyOpt.map((ele) => {
    return ObjectId(ele);
  });
  const UnSelectedArr = UnSelectedPolicyOpt.map((ele) => {
    return ObjectId(ele);
  });
  try {
    const SaleDetails = await SaleSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          EnterDate,
          Remark,
          TotalAmount,
          NetAmount,
          GstAmount,
          Policy: Arr,
          ...que,
        },
      },
      { new: true }
    );

    // if (UnSelectedArr.length === 0) {
    //   return res.status(200).json({
    //     success: true,
    //     message: "Sale Updated Successful",
    //   });
    // }
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    const CRForPOS = {
      VoucherType: "Sale",
      CreatedWhich: SaleDetails?._id,
      EntryDate: EnterDate,
      Ledger: SaleDetails.CreditAccount,
      oppositeLedger: DebitAccount,
      RefNumber: SaleDetails.ControlNumber,
      Remark: Remark,
      Amount: TotalAmount,
    };
    const DRForPOS = {
      VoucherType: "Sale",
      CreatedWhich: SaleDetails?._id,
      EntryDate: EnterDate,
      Ledger: DebitAccount,
      oppositeLedger: SaleDetails.CreditAccount,
      RefNumber: SaleDetails.ControlNumber,
      Remark: Remark,
      Amount: -TotalAmount,
    };

    CREATE_ACCOUNTANCY.push(CRForPOS, DRForPOS);

    // if (GstAmount) {
    //   const CRForGST = {
    //     VoucherType: "Sale",
    //     CreatedWhich: SaleDetails?._id,
    //     EntryDate: EnterDate,
    //     Ledger: SaleDetails.CreditAccount,
    //     oppositeLedger: GST_ID_FOR_LEDGER,
    //     RefNumber: SaleDetails.ControlNumber,
    //     Remark: Remark,
    //     Amount: -GstAmount,
    //   };
    //   const DRForGST = {
    //     VoucherType: "Sale",
    //     CreatedWhich: SaleDetails?._id,
    //     EntryDate: EnterDate,
    //     Ledger: GST_ID_FOR_LEDGER,
    //     oppositeLedger: SaleDetails.CreditAccount,
    //     RefNumber: SaleDetails.ControlNumber,
    //     Remark: Remark,
    //     Amount: GstAmount,
    //   };
    //   CREATE_ACCOUNTANCY.push(CRForGST, DRForGST);
    // }

    await AccountancySchema.insertMany(CREATE_ACCOUNTANCY);

    await PolicySchema.updateMany(
      { _id: { $in: UnSelectedArr } },
      {
        isSale: false,
      }
    );
    return res.status(200).json({
      success: true,
      message: "Sale Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const data = await SaleSchema.findById(req.params.id)
      .populate({
        path: "CreditAccount",
        select: {
          Name: 1,
        },
      })
      .populate({
        path: "DebitAccount",
        select: { Name: 1 },
      })
      // .populate({
      //   path: "TDSAccount",
      //   select: { Name: 1 },
      // })
      .populate({
        path: "Policy",
        populate: [
          {
            path: "POS",
            select: { Name: 1, PayoutCycle: 1, Club: 1 },
          },
          {
            path: "PolicyType",
            select: { Name: 1 },
          },
          {
            path: "InsuranceCompany",
            select: { Name: 1 },
          },
          {
            path: "InsuranceType",
            select: { InsuranceType: 1 },
          },
          {
            path: "MakeModal",
            select: { Name: 1 },
          },
          {
            path: "Broker",
            select: { Name: 1 },
          },
        ],
      });

    return res.status(200).json({
      success: true,
      message: "Sale Data",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

const getExcel = async (req, res, next) => {
  try {
    const data = await SaleSchema.findById(req.params.id)
      .populate({
        path: "CreditAccount",
        select: {
          Name: 1,
        },
      })
      .populate({
        path: "Policy",
        populate: [
          {
            path: "POS",
            select: "Name Salutation MiddleName LastName PayoutCycle Club ",
            populate: {
              path: "ReportingTo",
              select: "Name Salutation MiddleName LastName",
            },
          },
          {
            path: "InsuranceCompany",
            select: "Name",
          },
          {
            path: "InsuranceUnderFlow",
            select: "InsuranceType",
          },
          {
            path: "MakeModal",
            select: "Name",
          },
          {
            path: "Broker",
            select: "Name",
          },
          {
            path: "PolicyType",
            select: "PolicyTypeName",
          },
          {
            path: "ApprovedBy",
            select: "Name Salutation MiddleName LastName",
          },
          {
            path: "EnteredBy",
            select: "Name Salutation MiddleName LastName",
          },
          {
            path: "Branch",
            select: "BranchName",
          },
        ],
      });

    return res.status(200).json({
      success: true,
      message: "Sale Data",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

const getGenerateReport = async (req, res, next) => {
  const { id } = req.params;

  try {
    const { Policy, CreditAccount, EnterDate, ...rest } =
      await SaleSchema.findById(ObjectId(id))
        .populate({
          path: "CreditAccount",
          select: {
            Name: 1,
          },
        })
        .populate({
          path: "DebitAccount",
          select: { Name: 1 },
        })
        .populate({
          path: "Policy",
          populate: [
            {
              path: "POS",
              select: { Name: 1, PayoutCycle: 1, Club: 1 },
            },
            {
              path: "PolicyType",
              select: { Name: 1 },
            },
            {
              path: "InsuranceCompany",
              select: { Name: 1 },
            },
            {
              path: "InsuranceType",
              select: { InsuranceType: 1 },
            },
            {
              path: "MakeModal",
              select: { Name: 1 },
            },
            {
              path: "Broker",
              select: { Name: 1 },
            },
          ],
        });

    const myData = await SaleSchema.aggregate([
      {
        $match: {
          _id: ObjectId(id),
        },
      },
      {
        $unwind: "$Policy",
      },
      {
        $lookup: {
          from: "policies",
          localField: "Policy",
          foreignField: "_id",
          as: "Policy",
        },
      },
      {
        $unwind: "$Policy",
      },
      {
        $addFields: {
          GrossPremium: { $toDouble: "$Policy.GrossPremium" },
          ODPremiumNumeric: { $toDouble: "$Policy.ODPremium" },
          TPPremiumNumeric: { $toDouble: "$Policy.TPPremium" },

          NetPremiumNumeric: { $toDouble: "$Policy.NETPremium" },
          TotalPolicyProfit: {
            $toDouble: "$Policy.Commission.TotalPolicyProfit",
          },
        },
      },
      {
        $group: {
          _id: `$Policy.InsuranceType`,
          count: { $sum: 1 },
          GrossPremium: { $sum: "$GrossPremium" },
          NetPremium: { $sum: "$NetPremiumNumeric" },
          ODPremium: { $sum: "$ODPremiumNumeric" },
          TPPremium: { $sum: "$TPPremiumNumeric" },
          Points: { $sum: "$TotalPolicyProfit" },
        },
      },
      {
        $lookup: {
          from: "insurancetypes",
          localField: "_id",
          foreignField: "_id",
          pipeline: [
            {
              $project: {
                _id: 1,
                InsuranceType: 1,
              },
            },
          ],
          as: "_id",
        },
      },
      {
        $unwind: "$_id",
      },
    ]);

    const myArr = await Policy.reduce((acc, curr, index) => {
      const DateData = curr?.createdAt.toISOString().slice(0, 10);
      const col2 = [
        curr?.InsuranceCompany?.Name,
        curr?.InsuranceType?.InsuranceType,
        `RSD:${curr?.RSD}`,
        curr?.InsureeName,
      ];
      const col3 = [
        curr?.PolicyNumber,
        ,
        `YOM:${curr?.YearOfManufacture}`,
        curr?.MakeModal?.Name,
      ];
      const col4 = ["Gross", "Net", "TP", "OD", "FLAT"];
      const col5 = [
        curr?.GrossPremium,
        curr?.NETPremium,
        curr?.TPPremium,
        curr?.ODPremium,
        "",
      ];

      const col6 = ["", "", "", "", "", ""];
      const col7 = [curr?.PaymentMode?.TypeOfPaymentMode, curr?.VehicleNumber];
      const col8 = [curr?.Commission?.TotalPolicyProfit];
      curr.BasedOn.split("+").forEach((element) => {
        if (element === "FLAT") {
          col6[4] = curr["Commission"][`Reciveable${element}`];
        }
        if (element === "OD") {
          col6[3] = curr["Commission"][`Reciveable${element}`] / 10 + "X";
        }
        if (element === "TP") {
          col6[2] = curr["Commission"][`Reciveable${element}`] / 10 + "X";
        }
        if (element === "NET") {
          col6[1] = curr["Commission"][`Reciveable${element}`] / 10 + "X";
        }
      });

      return [
        ...acc,
        [++index, DateData, col2, col3, col4, col5, col6, col7, col8],
      ];
    }, []);

    let isGstApplicable = false;

    // if (CreditAccount) {
    //   isGstApplicable = true;
    // }
    let TotalCommission = 0;
    const CommissionSummary = await myData.reduce((acc, cur) => {
      let perCentage = 0;

      //   if (isGstApplicable) {
      //     perCentage = (cur.Points / 18).toFixed(2);
      //   }

      TotalCommission = TotalCommission + cur.Points;
      return [
        ...acc,
        [
          cur._id.InsuranceType,
          cur.count,
          cur.GrossPremium,
          cur.NetPremium,
          cur.TPPremium,
          cur.ODPremium,
          cur.Points,
          perCentage,
        ],
      ];
    }, []);

    req.tableData = [
      [
        "S/No.",
        "Date",
        "Policy Details",
        "",
        "",
        "",
        "",
        "Vehicle No.",
        "Points",
      ],
      ...myArr,
    ];

    req.tableSummery = [
      ["Product", "Count", "Gross", "Net", "TP", "OD", "Commission", "GST"],
      ...CommissionSummary,
      ["", "", "", "", "", "Total:-", TotalCommission, ""],
    ];

    req.Broker = CreditAccount;
    req.EnterDate = String(EnterDate).slice(0, 16);

    next();
    // res.status(200).send(CreditAccount)
  } catch (error) {
    console.log(error);
    return next(error);
  }
};
const deleteSale = async (req, res, next) => {
  try {
    const data = await SaleSchema.findByIdAndDelete(req.params.id);
    await PolicySchema.updateMany(
      { _id: { $in: data.Policy ?? [] } },
      {
        isSale: false,
      }
    );

    await AccountancySchema.deleteMany({
      CreatedWhich: data._id,
    });
    res
      .status(200)
      .json({ success: true, message: "Sale Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getIsSale = async (req, res, next) => {
  const { Broker } = req.body;
  const que = { Status: "APPROVED", isSale: false };
  if (Broker) {
    que["Broker"] = ObjectId(Broker);
  }
  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: {
          ...que,
        },
      },
      {
        $project: {
          PolicyType: 0,
          // InsuranceCompany: 0,
          // InsuranceType: 0,
          InsuranceUnderFlow: 0,
          // RSD: 0,
          IMTType: 0,
          FuelType: 0,
          BusinessType: 0,
          // PaymentMode: 0,
          NCB: 0,
          BusinessType: 0,
          // YearOfManufacture: 0,
          // Variant: 0,
          RegistrationDate: 0,
          Broker: 0,
          Broker: 0,
          // MakeModal: 0,
          RC1: 0,
          RC2: 0,
          PreviousPolicy1: 0,
          PreviousPolicy2: 0,
          createdAt: 0,
          updatedAt: 0,
          __v: 0,
        },
      },
    ]);
    const TotalAmount = await PolicySchema.aggregate([
      {
        $match: {
          ...que,
        },
      },
      {
        $project: {
          PolicyType: 0,
          InsuranceCompany: 0,
          InsuranceType: 0,
          InsuranceUnderFlow: 0,
          RSD: 0,
          IMTType: 0,
          FuelType: 0,
          BusinessType: 0,
          YearOfManufacture: 0,
          PaymentMode: 0,
          NCB: 0,
          BusinessType: 0,
          YearOfManufacture: 0,
          Variant: 0,
          RegistrationDate: 0,
          Broker: 0,
          Broker: 0,
          MakeModal: 0,
          RC1: 0,
          RC2: 0,
          PreviousPolicy1: 0,
          PreviousPolicy2: 0,
          createdAt: 0,
          updatedAt: 0,
          __v: 0,
        },
      },
      {
        $group: {
          _id: null,
          TotalPolicyProfit: { $sum: "$Commission.TotalPolicyProfit" },
        },
      },
    ]);
    let SaleData = await PolicySchema.populate(Policy, [
      {
        path: "POS",
        select: { Name: 1, PayoutCycle: 1, Club: 1 },
      },
      {
        path: "InsuranceCompany",
        select: { Name: 1 },
      },
      {
        path: "InsuranceType",
        select: { InsuranceType: 1 },
      },
      {
        path: "MakeModal",
        select: { Name: 1 },
      },
    ]);
    console.log(TotalAmount);
    res.status(200).json({
      success: true,
      data: SaleData,
      TotalAmount: TotalAmount[0],
      message: "get Approved Policy",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getSale,
  postSale,
  putSale,
  deleteSale,
  getIsSale,
  getSingle,
  getGenerateReport,
  getExcel,
};
