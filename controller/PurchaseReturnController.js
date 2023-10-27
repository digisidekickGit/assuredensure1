const PurchaseReturnSchema = require("../modal/PurchaseReturnSchema");
const ErrorHandler = require("../util/handleError");
const PolicySchema = require("../modal/PolicySchema");
const { ObjectId } = require("mongodb");
const getPurchaseReturn = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000,  StartDate, EndDate} = req.query;


    const totalDocs = await PurchaseReturnSchema.find({EntryDate: {
      $gte: StartDate,
      $lte: EndDate,
    }}).countDocuments();

    const results = await PurchaseReturnSchema.find({EntryDate: {
      $gte: StartDate,
      $lte: EndDate,
    }})
      .sort({ PurchaseReturnCode: 1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .populate({
        path: "DebitAccount",
        select: { Name: 1, PayoutCycle: 1, Club: 1 },
      })
      .populate({
        path: "CreditAccount",
        select: {
          Name: 1,
        },
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

const postPurchaseReturn = async (req, res, next) => {
  try {
    const {
      CreditAccount,
      DebitAccount,
      EnterDate,
      Remark,
      TDSPercent,
      TDSAccount,
      TotalAmount,
      NetAmount,
      SelectedPolicyOpt,
    } = req.body;

    const totalDocs = await PurchaseReturnSchema.find({}).countDocuments();

    const Arr = SelectedPolicyOpt.map((ele) => {
      return ObjectId(ele);
    });

    const que = {};
    if (CreditAccount) {
      que["CreditAccount"] = ObjectId(CreditAccount);
    }

    await PurchaseReturnSchema.create({
      ControlNumber: `AE00${1 + totalDocs}`,
      // CreditAccount,
      DebitAccount,
      EnterDate,
      Remark,
      TDSPercent,
      TDSAccount,
      TotalAmount,
      NetAmount,
      Policy: Arr,
      ...que,
    });

    await PolicySchema.updateMany(
      { _id: { $in: Arr } },
      {
        isPurchase: false,
      }
    );
    res.status(200).json({
      success: true,
      message: "PurchaseReturn Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putPurchaseReturn = async (req, res, next) => {
  const { CreditAccount, ...que } = req.body;
  try {
    if (CreditAccount) {
      que["CreditAccount"] = ObjectId(CreditAccount);
    }

    await PurchaseReturnSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: que,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "PurchaseReturn Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};

const getSingle = async (req, res, next) => {
  try {
    const data = await PurchaseReturnSchema.findById(req.params.id)
      .populate({
        path: "DebitAccount",
        select: {
          Name: 1,
          Salutation: 1,
          MiddleName: 1,
          LastName: 1,
          GSTINNumber: 1,
        },
      })
      .populate({
        path: "CreditAccount",
        select: {
          Name: 1,
        },
      })
      .populate({
        path: "TDSAccount",
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

    return res.status(200).json({
      success: true,
      message: "PurchaseReturn Data",
      data,
    });
  } catch (error) {
    return next(error);
  }
};
const deletePurchaseReturn = async (req, res, next) => {
  try {
    const data = await PurchaseReturnSchema.findByIdAndDelete(req.params.id);

    await PolicySchema.updateMany(
      { _id: { $in: data.Policy ?? [] } },
      {
        isPurchase: false,
      }
    );
    res
      .status(200)
      .json({ success: true, message: "Purchase Return Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getIsPurchaseReturn = async (req, res, next) => {
  const { POS } = req.body;
  const que = {
    Status: "APPROVED",
    isPurchase: true,
  };
  if (POS) {
    que["POS"] = ObjectId(POS);
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

          InsuranceUnderFlow: 0,
          // RSD: 0,
          IMTType: 0,
          FuelType: 0,
          BusinessType: 0,
          YearOfManufacture: 0,
          // PaymentMode: 0,
          NCB: 0,
          BusinessType: 0,
          YearOfManufacture: 0,
          Variant: 0,
          RegistrationDate: 0,
          NewPolicyCopy: 0,
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
          NewPolicyCopy: 0,
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
          AmountToPay: { $sum: "$Commission.TotalAmountToPay" },
        },
      },
    ]);
    let PurchaseReturnData = await PolicySchema.populate(Policy, [
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
    ]);
    res.status(200).json({
      success: true,
      data: PurchaseReturnData,
      TotalAmount: TotalAmount[0],
      message: "get Approved Policy",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPurchaseReturn,
  postPurchaseReturn,
  putPurchaseReturn,
  deletePurchaseReturn,
  getIsPurchaseReturn,
  getSingle,
};
