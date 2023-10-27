const PolicySchema = require("../modal/PolicySchema");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const RtoGroupCheckerSchema = require("../modal/RtoGroupCheckerSchema");
const RTOSchema = require("../modal/RtoSchema");
const EmployeeSchema = require("../modal/EmployeeSchema");
const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const path = require("path");

const fs = require("fs");
const {
  removeObjectEmptyValues,
  removeEmptyValues,
} = require("../util/UseFullFunctions");
const getPolicy = async (req, res, next) => {
  try {
    const { page = 1, limit = 100 } = req.query;
    const totalDocs = await PolicySchema.find({}).countDocuments();
    const Policy = await PolicySchema.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: Policy,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const getSingle = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Policy = await PolicySchema.findById(id).populate([
      {
        path: "POS",
        select: "Club Name",
      },
      {
        path: "Broker",
        select: "Name",
      },
      {
        path: "InsuranceType",
        select: "InsuranceType",
      },
      {
        path: "PolicyType",
        select: "PolicyTypeName",
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: Policy,
    });
  } catch (error) {
    return next(error);
  }
};

const findByPolicyNumber = async (req, res, next) => {
  try {
    // Policy?.PolicyNumber
    const { PolicyNumber } = req.query;
    const totalDocs = await PolicySchema.find({
      PolicyNumber,
    }).countDocuments();

    res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: totalDocs,
    });
  } catch (error) {}
};

const getSingleForPolicy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Policy = await PolicySchema.findById(id)
      .populate({
        path: "POS",
        select: "Club Name",
      })
      .populate({
        path: "MakeModal",
        select: "Name",
      })
      .populate({
        path: "InsuranceCompany",
        select: "Name",
      })
      .populate({
        path: "Broker",
        select: "Name",
      });

    res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: Policy,
    });
  } catch (error) {
    return next(error);
  }
};
const viewPolicy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const Policy = await PolicySchema.findById(id)
      .populate({
        path: "POS",
        select: "Name Salutation MiddleName LastName",
      })
      .populate({
        path: "PolicyType",
        select: "PolicyTypeName",
      })
      .populate({
        path: "MakeModal",
        select: "Name",
      })
      .populate({
        path: "InsuranceUnderFlow",
        select: "InsuranceType",
      })
      .populate({
        path: "InsuranceCompany",
        select: "Name Logo",
      })
      .populate({
        path: "PaidBank",
        select: "Name",
      })
      .populate({
        path: "ReceivedBank",
        select: "Name",
      })
      .populate({
        path: "Broker",
        select: "Name",
      })
      .populate({
        path: "Branch",
        select: "Name",
      });

    res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: Policy,
    });
  } catch (error) {
    return next(error);
  }
};

const CreateLedgerForPaidBy = async (policyCreateData) => {
  try {
    const AccountancyCR = {
      VoucherType: "Paid By Bank",
      CreatedWhich: policyCreateData._id,
      EntryDate: policyCreateData.IssueDate,
      Remark: policyCreateData?.Remark ?? "",
      Ledger: policyCreateData.PaidBank, // RAVI
      oppositeLedger: policyCreateData.POS, // HDFC
      RefNumber: policyCreateData?.PolicyNumber,
      // DR: 0,
      // CR: policyCreateData.GrossPremium,
      Amount: -Math.abs(policyCreateData.GrossPremium),
    };
    const AccountancyDR = {
      VoucherType: "Paid By Bank",
      CreatedWhich: policyCreateData._id,
      EntryDate: policyCreateData.IssueDate,
      Remark: policyCreateData?.Remark ?? "",
      Ledger: policyCreateData.POS, // HDFC
      oppositeLedger: policyCreateData.PaidBank, // RAVI
      RefNumber: policyCreateData?.PolicyNumber,
      // DR: policyCreateData.GrossPremium,
      // CR: 0,
      // Amount: policyCreateData.GrossPremium,
      Amount: Math.abs(policyCreateData.GrossPremium),
    };
    await AccountancySchema.create(AccountancyCR);
    await AccountancySchema.create(AccountancyDR);
  } catch (error) {}
};
const CreateLedgerForReceiveBy = async (policyCreateData) => {
  // Paid By Bank

  try {
    const AccountancyCR = {
      VoucherType: "Received In",
      CreatedWhich: policyCreateData._id,
      EntryDate: policyCreateData.IssueDate,
      Remark: policyCreateData?.Remark ?? "",
      Ledger: policyCreateData.ReceivedBank, // RAVI
      oppositeLedger: policyCreateData.POS, // HDFC
      RefNumber: policyCreateData?.PolicyNumber,
      // DR: policyCreateData.GetAmount,
      // CR: 0,
      // Amount: policyCreateData.GetAmount,
      Amount: Math.abs(policyCreateData.GetAmount),
    };
    const AccountancyDR = {
      VoucherType: "Received In",
      CreatedWhich: policyCreateData._id,
      EntryDate: policyCreateData.IssueDate,
      Remark: policyCreateData?.Remark ?? "",
      Ledger: policyCreateData.POS, // HDFC
      oppositeLedger: policyCreateData.ReceivedBank, // RAVI
      RefNumber: policyCreateData?.PolicyNumber, // HDFC
      // DR: 0,
      // CR: policyCreateData.GetAmount,
      // Amount: policyCreateData.GetAmount,
      Amount: -Math.abs(policyCreateData.GetAmount),
    };
    await AccountancySchema.create(AccountancyCR);
    await AccountancySchema.create(AccountancyDR);
  } catch (error) {}
};

const PostPolicy = async (req, res, next) => {
  const {
    NewPolicyCopy,
    RC1,
    RC2,
    PreviousPolicy1,
    PreviousPolicy2,
    Policy,
    PaymentMode,
    InsuranceUnderFlow,
    isEmployee = false,
    Employee,
    EnteredBy = "",
    ...allData
  } = req.body;
  let myImagesObj = {};

  if (isEmployee) {
    allData["EnteredBy"] = ObjectId(Employee);
  }

  const Emp = await EmployeeSchema.findById(Employee, {
    Branch: 1,
  });

  if (Emp?.Branch) {
    allData["Branch"] = ObjectId(Emp.Branch);
  }

  if (req?.files) {
    const myImages = Object.keys(req.files);
    await myImages.forEach((ele) => {
      if (ele == "RC1" || ele == "RC2") {
        myImagesObj[ele] = `/images/RC/${req?.files[ele][0]?.filename}`;
      } else if (ele == "PreviousPolicy1" || ele == "PreviousPolicy2") {
        myImagesObj[
          ele
        ] = `/images/PreviousPolicy/${req?.files[ele][0]?.filename}`;
      } else {
        myImagesObj[ele] = `/images/${ele}/${req?.files[ele][0]?.filename}`;
      }
    });
  }
  const { VehicleNumber, GetAmount, PaidBank, ReceivedBank, ...data } =
    JSON.parse(Policy);

  if (ReceivedBank) {
    data["ReceivedBank"] = ReceivedBank;
    data["GetAmount"] = GetAmount;
  }
  if (PaidBank) {
    data["PaidBank"] = PaidBank;
  }
  const InsuranceUnder = JSON.parse(InsuranceUnderFlow);

  // if (VehicleNumber) {
  //   const RTO_Code = VehicleNumber.slice(0, 4);
  //   if (RTO_Code) {
  //     const RTO_DATA = await RTOSchema.findOne({
  //       RTOCode: RTO_Code,
  //     });

  //     if (RTO_DATA) {
  //       const RtoGroupCheckerData = await RtoGroupCheckerSchema.aggregate([
  //         {
  //           $match: {
  //             InsuranceCompany: ObjectId(data?.InsuranceCompany),
  //             InsuranceType: InsuranceUnder[InsuranceUnder.length - 1],
  //           },
  //         },
  //         {
  //           $unwind: "$ListOfRtoLog",
  //         },
  //         {
  //           $match: {
  //             "ListOfRtoLog.DEF": { $lte: new Date(data?.IssueDate) },
  //             "ListOfRtoLog.List": {
  //               $elemMatch: { $eq: ObjectId(RTO_DATA?._id) },
  //             },
  //           },
  //         },
  //       ]);
  //       if (RtoGroupCheckerData[0]?._id) {
  //         data["RTO"] = RtoGroupCheckerData[0]?._id;
  //       }
  //     }
  //   }
  // }
  try {
    const policyCreateData = await PolicySchema.create({
      ...data,
      ...allData,
      PaymentMode: PaymentMode,
      VehicleNumber: VehicleNumber,
      InsuranceUnderFlow: InsuranceUnder,
      InsuranceType: InsuranceUnder[InsuranceUnder.length - 1],
      ...myImagesObj,
    });

    if (PaymentMode === "PartPayment") {
      CreateLedgerForPaidBy(policyCreateData);
      CreateLedgerForReceiveBy(policyCreateData);
    }
    if (PaymentMode === "Credit") {
      CreateLedgerForPaidBy(policyCreateData);
    }
    res.status(200).json({
      success: true,
      message: "Policy Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const getApprovedPolicy = async (req, res, next) => {
  const { POS, startDate, endDate, inputData } = req.body;

  const que = { Status: "APPROVED" };
  if (POS) {
    que["POS"] = ObjectId(POS);
  }

  if (inputData) {
    que.$or = [
      {
        PolicyNumber: { $regex: inputData, $options: "i" },
      },
      {
        InsureeName: { $regex: inputData, $options: "i" },
      },
      {
        VehicleNumber: { $regex: inputData, $options: "i" },
      },
      // {
      //   Mobile: { $regex: inputData, $options: "i" },
      // },
    ];
  }
  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: {
          IssueDate: {
            $gte: startDate,
            $lte: endDate,
          },
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
    ]);
    const TotalAmount = await PolicySchema.aggregate([
      {
        $match: {
          IssueDate: {
            $gte: startDate,
            $lte: endDate,
          },
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
          TotalProfit: { $sum: "$Commission.TotalPolicyProfit" },
          AmountToPay: { $sum: "$Commission.TotalAmountToPay" },
          Profit: { $sum: "$Commission.PolicyProfit" },
        },
      },
    ]);

    let populateddata = await PolicySchema.populate(Policy, [
      {
        path: "POS",
        select: { Name: 1, PayoutCycle: 1, Club: 1 },
      },
    ]);

    res.status(200).json({
      success: true,
      data: populateddata,
      TotalAmount: TotalAmount[0],
      message: " Approved Policy Details",
    });
  } catch (error) {
    return next(error);
  }
};
const putPolicy = async (req, res, next) => {
  const {
    NewPolicyCopy,
    RC1,
    RC2,
    PreviousPolicy1,
    PreviousPolicy2,
    Policy,
    PaymentMode,
    InsuranceUnderFlow,
    ...allData
  } = req.body;
  let myImagesObj = {};

  let query = {};

  if (req?.files) {
    const myImages = Object.keys(req.files);

    await myImages.forEach((ele) => {
      if (ele == "RC1" || ele == "RC2") {
        myImagesObj[ele] = `/images/RC/${req?.files[ele][0]?.filename}`;
      } else if (ele == "PreviousPolicy1" || ele == "PreviousPolicy2") {
        myImagesObj[
          ele
        ] = `/images/PreviousPolicy/${req?.files[ele][0]?.filename}`;
      } else {
        myImagesObj[ele] = `/images/${ele}/${req?.files[ele][0]?.filename}`;
      }
    });
  }

  const { VehicleNumber, GetAmount, PaidBank, ReceivedBank, ...data } =
    JSON.parse(Policy);

  if (ReceivedBank) {
    data["ReceivedBank"] = ReceivedBank;
    data["GetAmount"] = GetAmount;
  } else {
    query.$unset = {
      ...query.$unset,
      ReceivedBank: 1,
      GetAmount: 1,
    };
  }
  if (PaidBank) {
    data["PaidBank"] = PaidBank;
  } else {
    query.$unset = {
      ...query.$unset,
      PaidBank: 1,
    };
  }
  const InsuranceUnder = JSON.parse(InsuranceUnderFlow);
  // if (VehicleNumber) {
  //   const RTO_Code = VehicleNumber.slice(0, 4);
  //   const RTO_DATA = await RTOSchema.findOne({
  //     RTOCode: RTO_Code,
  //   });
  //   if (RTO_DATA) {
  //     const RtoGroupCheckerData = await RtoGroupCheckerSchema.aggregate([
  //       {
  //         $match: {
  //           InsuranceCompany: ObjectId(data?.InsuranceCompany),
  //           InsuranceType: InsuranceUnder[InsuranceUnder.length - 1],
  //         },
  //       },
  //       {
  //         $unwind: "$ListOfRtoLog",
  //       },
  //       {
  //         $match: {
  //           "ListOfRtoLog.DEF": { $lte: new Date(data?.IssueDate) },
  //           "ListOfRtoLog.List": {
  //             $elemMatch: { $eq: ObjectId(RTO_DATA?._id) },
  //           },
  //         },
  //       },
  //     ]);
  //     if (RtoGroupCheckerData[0]?._id) {
  //       data["RTO"] = RtoGroupCheckerData[0]?._id;
  //     }
  //   } else {
  //     delete data.RTO;
  //     query.$unset = {
  //       RTO: 1,
  //     };
  //   }
  // } else {
  //   delete data.RTO;
  //   query.$unset = {
  //     ...query.$unset,
  //     RTO: 1,
  //   };
  // }

  query.$set = {
    ...data,
    ...allData,
    PaymentMode,
    ...myImagesObj,
    VehicleNumber: VehicleNumber,
    InsuranceUnderFlow: InsuranceUnder,
    InsuranceType: InsuranceUnder[InsuranceUnder.length - 1],
  };

  try {
    const policyCreateData = await PolicySchema.findByIdAndUpdate(
      req.params.id,
      query,
      {
        new: true,
      }
    );


    // await PolicySchema.updateMany(
    //   { IMTType: "NONE" },
    //   { IMTType: "Not Available" }
    // );

    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });

    if (PaymentMode === "Credit") {
      CreateLedgerForPaidBy(policyCreateData);
    }
    if (PaymentMode === "PartPayment") {
      CreateLedgerForPaidBy(policyCreateData);
      CreateLedgerForReceiveBy(policyCreateData);
    }

    // const data = await PolicySchema.find({ PaymentMode: "PartPayment" });
    // data.map(async (ele) => {

    //   // await AccountancySchema.deleteMany({
    //   //   CreatedWhich: ele._id,
    //   // });
    //   CreateLedgerForReceiveBy(ele);
    //   CreateLedgerForPaidBy(ele);
    // });
    return res.status(200).json({
      success: true,
      message: "Policy Updated Successful new",
    });
  } catch (error) {
    return next(error);
  }
};
const deletePolicy = async (req, res, next) => {
  try {
    await PolicySchema.findByIdAndDelete(req.params.id);

    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    res
      .status(200)
      .json({ success: true, message: "Policy Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};
const getPolicyReport = async (req, res, next) => {
  const {
    dbName: from,
    localFieldName: localField,
    asToSave: as,
    groupUpKey,
    POS,
  } = req.query;

  const que = {};
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
        $lookup: {
          from,
          localField,
          foreignField: "_id",
          as,
        },
      },
      {
        $unwind: `$${as}`, // marge multiple docs in one array of objects
      },
      {
        $group: {
          _id: `$${groupUpKey}`,
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    const myModify = Policy.map((e) => [e._id, e.count]);
    return res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: myModify,
    });
  } catch (error) {
    return next(error);
  }
};
const getPolicyReportByFiledName = async (req, res, next) => {
  const { groupUpKey, POS } = req.query;

  const que = {};
  if (POS) {
    que["POS"] = ObjectId(POS);
  }
  //
  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: { ...que },
      },
      {
        $group: {
          _id: `$${groupUpKey}`,
          count: { $sum: 1 },
        },
      },
      {
        $sort: { _id: 1 },
      },
    ]);

    return res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: Policy,
    });
  } catch (error) {
    return next(error);
  }
};
const updatePolicy = async (req, res) => {
  try {
    await PolicySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Policy Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const getCommission = async (req, res, next) => {
  const {
    InsuranceType,
    InsuranceCompany,
    PolicyType,
    // VehicleModal,
    PA,
    NCBSTATUS,
    IMTType,
    FuelType,
    RTOCode,
    MakeModal,
    Broker,
    BusinessType,
  } = req.body;
  try {
    const query = {};
    if (RTOCode) {
      const RTO_Code = RTOCode.slice(0, 4);

      if (RTO_Code) {
        const RTO_DATA = await RTOSchema.find({
          RTOCode: RTO_Code,
        });

        if (RTO_DATA) {
          const MYAllRto = RTO_DATA.reduce((acc, it) => [...acc, it._id], []);

          const RtoGroupCheckerData = await RtoGroupCheckerSchema.find({
            InsuranceCompany: ObjectId(InsuranceCompany),
            InsuranceType: ObjectId(InsuranceType),
            ListOfRto: { $in: MYAllRto },
          });

          const myRtosGroup = RtoGroupCheckerData.reduce(
            (acc, it) => [...acc, it._id],
            []
          );
          query["RTOGroup"] = {
            $in: [...myRtosGroup],
          };
        }
      }
    }
    if (MakeModal) {
      query["MakeModal"] = {
        $in: [MakeModal],
      };
    }
    if (PA) {
      query["PA"] = {
        $in: [PA],
      };
    }
    if (Broker) {
      query["Broker"] = ObjectId(Broker);
    }

    if (NCBSTATUS === 0) {
      query["NCBSTATUS"] = {
        $in: ["No"],
      };
    } else if (NCBSTATUS > 0) {
      query["NCBSTATUS"] = {
        $in: ["Yes"],
      };
    } else if (NCBSTATUS < 0) {
      query["NCBSTATUS"] = {
        $in: ["Not Available"],
      };
    }

    if (FuelType) {
      query["FuelType"] = {
        $in: [FuelType],
      };
    }

    if (BusinessType) {
      query["BusinessType"] = {
        $in: [BusinessType],
      };
    }

    let PayoutGridData = await PayoutGridSchema.find(
      {
        InsuranceCompany: ObjectId(InsuranceCompany),
        InsuranceType: {
          $in: [InsuranceType],
        },
        PolicyType: {
          $in: [PolicyType],
        },
        ...query,
      },
      {
        PolicyType: 0,
        RTOGroup: 0,
        VehicleModal: 0,
        MakeModal: 0,
      }
    );

    const data = await PayoutGridData.filter((ele) => {
      const length = ele.InsuranceType.length;
      return ele.InsuranceType[length - 1] == InsuranceType;
    });
    // console.dir(data, { depth: null });
    return res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: data,
      PayoutGridData: [],
    });
  } catch (error) {
    return next(error);
  }
};
const deleteImage = async (req, res, next) => {
  const { fieldName, id } = req.body;
  let query = {};
  query.$unset = {
    [fieldName]: "",
  };

  try {
    const data = await PolicySchema.findByIdAndUpdate(id, query);
    const imageURL = data[fieldName];
    const imagePath = path.join(__dirname, `..${imageURL}`);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    res
      .status(200)
      .json({ success: true, message: "Image Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};
const getPolicyByFilter = async (req, res, next) => {
  const {
    page = 1,
    limit = 25,
    startDate,
    endDate,
    PayoutCycle,
    inputData,
    TabsValue,
    InsuranceType = [],
    BusinessType = "",
    ...rest
  } = req.body;
  removeObjectEmptyValues(rest);

  for (let x in rest) {
    rest[x] = ObjectId(rest[x]);
  }

  if (BusinessType) {
    rest["BusinessType"] = BusinessType;
  }
  if (InsuranceType.length > 0) {
    const myArr = InsuranceType.map((ele) => ObjectId(ele));
    rest["InsuranceUnderFlow"] = {
      $all: myArr,
    };
  }
  if (inputData) {
    rest.$or = [
      {
        PolicyNumber: { $regex: inputData, $options: "i" },
      },
      {
        InsureeName: { $regex: inputData, $options: "i" },
      },
      {
        VehicleNumber: { $regex: inputData, $options: "i" },
      },
    ];
  }
  if (TabsValue !== "ALL") {
    rest["Status"] = TabsValue;
  }
  console.log(rest, "rest");
  let que = [];
  if (PayoutCycle) {
    if (!isNaN(Number(PayoutCycle)))
      que = [
        {
          $lookup: {
            from: "pos",
            localField: "POS",
            foreignField: "_id",
            as: "posData",
          },
        },
        {
          $unwind: "$posData",
        },
        {
          $match: {
            "posData.PayoutCycle": Number(PayoutCycle),
          },
        },
      ];
  }

  try {
    const totalDocs = await PolicySchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          },
          ...rest,
        },
      },
      ...que,
    ]);

    const Policy = await PolicySchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          },
          ...rest,
        },
      },
      ...que,
      { $skip: (page - 1) * limit },
      { $limit: limit },
      {
        $sort: {
          createdAt: -1,
        },
      },
      {
        $project: {
          posData: 0,
        },
      },
    ]);

    let populateddata = await PolicySchema.populate(Policy, [
      {
        path: "POS",
        select: {
          Name: 1,
          PayoutCycle: 1,
          Club: 1,
          Salutation: 1,
          MiddleName: 1,
          LastName: 1,
        },
      },
      {
        path: "InsuranceCompany",
        select: {
          Name: 1,
          Logo: 1,
        },
      },
      {
        path: "InsuranceType",
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
    ]);

    res.status(200).json({
      success: true,
      message: "Fetched Policy data is here",
      data: populateddata,
      totalDocs: totalDocs.length,
    });
  } catch (error) {
    return next(error);
  }
};
const getPolicyPremium = async (req, res, next) => {
  const {
    page = 1,
    limit = 3,
    startDate,
    endDate,
    PayoutCycle,
    inputData,
    TabsValue,
    InsuranceType = [],
    BusinessType = "",
    ...rest
  } = req.body;
  removeObjectEmptyValues(rest);

  for (let x in rest) {
    rest[x] = ObjectId(rest[x]);
  }

  if (inputData) {
    rest.$or = [
      {
        PolicyNumber: { $regex: inputData, $options: "i" },
      },
      {
        InsureeName: { $regex: inputData, $options: "i" },
      },
      {
        VehicleNumber: { $regex: inputData, $options: "i" },
      },
    ];
  }

  if (BusinessType) {
    rest["BusinessType"] = BusinessType;
  }
  if (TabsValue !== "ALL") {
    rest["Status"] = TabsValue;
  }
  if (InsuranceType.length > 0) {
    const myArr = InsuranceType.map((ele) => ObjectId(ele));
    rest["InsuranceUnderFlow"] = {
      $all: myArr,
    };
  }
  let que = [];
  if (PayoutCycle) {
    que = [
      {
        $lookup: {
          from: "pos",
          localField: "POS",
          foreignField: "_id",
          as: "posData",
        },
      },
      {
        $unwind: "$posData",
      },
      {
        $match: {
          "posData.PayoutCycle": Number(PayoutCycle),
        },
      },
    ];
  }
  try {
    const Premium = await PolicySchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          },
          ...rest,
        },
      },
      ...que,
      {
        $addFields: {
          ODPremiumNumeric: { $toDouble: "$ODPremium" },
          GrossPremium: { $toDouble: "$GrossPremium" },
          NetPremiumNumeric: { $toDouble: "$NETPremium" },
        },
      },
      {
        $group: {
          _id: null,
          ODPremium: { $sum: "$ODPremiumNumeric" },
          GrossPremium: { $sum: "$GrossPremium" },
          NetPremium: { $sum: "$NetPremiumNumeric" },
        },
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Fetched Policy data is here",

      Premium,
    });
  } catch (error) {
    return next(error);
  }
};
const getPolicyStatus = async (req, res, next) => {
  const {
    page = 1,
    limit = 3,
    startDate,
    endDate,
    PayoutCycle,
    inputData,
    TabsValue,
    BusinessType = "",
    InsuranceType = [],
    ...rest
  } = req.body;
  // getPolicyByFilter(rest);
  removeObjectEmptyValues(rest);

  for (let x in rest) {
    rest[x] = ObjectId(rest[x]);
  }

  if (inputData) {
    rest.$or = [
      {
        PolicyNumber: { $regex: inputData, $options: "i" },
      },
      {
        InsureeName: { $regex: inputData, $options: "i" },
      },
      {
        VehicleNumber: { $regex: inputData, $options: "i" },
      },
    ];
  }
  if (BusinessType) {
    rest["BusinessType"] = BusinessType;
  }
  if (InsuranceType.length > 0) {
    const myArr = InsuranceType.map((ele) => ObjectId(ele));
    rest["InsuranceUnderFlow"] = {
      $all: myArr,
    };
  }
  let que = [];
  if (PayoutCycle) {
    que = [
      {
        $lookup: {
          from: "pos",
          localField: "POS",
          foreignField: "_id",
          as: "posData",
        },
      },
      {
        $unwind: "$posData",
      },
      {
        $match: {
          "posData.PayoutCycle": Number(PayoutCycle),
        },
      },
    ];
  }
  try {
    const StatusData = await PolicySchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          },
          ...rest,
        },
      },
      ...que,
      {
        $group: {
          _id: `$Status`,
          count: { $sum: 1 },
        },
      },
    ]);

    const StatusCount = StatusData.reduce((acc, curr) => {
      return { ...acc, [curr["_id"]]: curr["count"] };
    }, {});

    let myStatus = {
      PENDING: 0,
      APPROVED: 0,
      HOLD: 0,
      REJECTED: 0,
    };

    const MyNewStatus = { ...myStatus, ...StatusCount };
    const MyStatusWithAll = {
      ...MyNewStatus,
      ALL:
        MyNewStatus["PENDING"] +
        MyNewStatus["APPROVED"] +
        MyNewStatus["HOLD"] +
        MyNewStatus["REJECTED"],
    };
    res.status(200).json({
      success: true,
      message: "Fetched Policy data is here",
      StatusCount: MyStatusWithAll,
      // data: insurancedata,
    });
  } catch (error) {
    return next(error);
  }
};

const getPolicyByFilterForExcel = async (req, res, next) => {
  const {
    startDate,
    endDate,
    TabsValue,
    InsuranceType = [],
    ...rest
  } = req.body;
  removeEmptyValues(rest, ["InsuranceCompany", "POS", "Broker"]);
  if (TabsValue !== "ALL") {
    rest["Status"] = TabsValue;
  }

  if (InsuranceType.length > 0) {
    const myArr = InsuranceType.map((ele) => ObjectId(ele));
    rest["InsuranceUnderFlow"] = {
      $all: myArr,
    };
  }

  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          },

          ...rest,
        },
      },
    ]);

    let populateddata = await PolicySchema.populate(Policy, [
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
    ]);

    res.status(200).json({
      success: true,
      message: "Fetched Policy data is here",
      data: populateddata,
    });
  } catch (error) {
    return next(error);
  }
};

const getActionPolicy = async (req, res, next) => {
  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: {
          // createdAt: {
          //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
          //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          // },
        },
      },
      {
        $group: {
          _id: `$Status`,
          count: { $sum: 1 },
        },
      },
    ]);
    const Premium = await PolicySchema.aggregate([
      {
        $match: {
          // createdAt: {
          //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
          //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          // },
        },
      },
      {
        $addFields: {
          ODPremiumNumeric: { $toDouble: "$ODPremium" },
          TPPremiumNumeric: { $toDouble: "$TPPremium" },
          NetPremiumNumeric: { $toDouble: "$NETPremium" },
        },
      },
      {
        $group: {
          _id: null,
          ODPremium: { $sum: "$ODPremiumNumeric" },
          TPPremium: { $sum: "$TPPremiumNumeric" },
          NetPremium: { $sum: "$NetPremiumNumeric" },
        },
      },
    ]);

    const data = Policy.reduce((acc, curr) => {
      return { ...acc, [curr["_id"]]: curr["count"] };
    }, {});

    let myStatus = {
      PENDING: 0,
      APPROVED: 0,
      HOLD: 0,
      REJECTED: 0,
    };
    return res.status(200).json({
      success: true,
      message: "Policy Status",
      data: { ...myStatus, ...data },
      Premium,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPolicy,
  PostPolicy,
  putPolicy,
  deletePolicy,
  getPolicyByFilter,
  getPolicyReport,
  updatePolicy,
  getPolicyReportByFiledName,
  getCommission,
  getSingle,
  deleteImage,
  getActionPolicy,
  getApprovedPolicy,
  getSingleForPolicy,
  getPolicyByFilterForExcel,
  viewPolicy,
  findByPolicyNumber,
  getPolicyStatus,
  getPolicyPremium,
};
