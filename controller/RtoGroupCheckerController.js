const RtoGroupCheckerSchema = require("../modal/RtoGroupCheckerSchema");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const RTOSchema = require("../modal/RtoSchema");
const ErrorHandler = require("../util/handleError");
const { removeEmptyValues } = require("../util/UseFullFunctions");
const { ObjectId } = require("mongodb");

const getRtoGroupChecker = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 3000,
      inputData,
      InsuranceCompany = "",
      InsuranceType = "",
      ...restData
    } = req.query;
    console.log(InsuranceCompany, "check this one");
    if (InsuranceType) {
      restData["InsuranceType"] = ObjectId(InsuranceType);
    }
    if (InsuranceCompany) {
      restData["InsuranceCompany"] = ObjectId(InsuranceCompany);
    }
    if (inputData) {
      restData["$or"] = [
        {
          GroupName: { $regex: inputData, $options: "i" },
        },
      ];
    }

    const totalDocs = await RtoGroupCheckerSchema.find({
      ...restData,
    }).countDocuments();
    const results = await RtoGroupCheckerSchema.find({
      ...restData,
    })
      .populate("InsuranceCompany", "Name")
      .populate("ListOfRto", "RTOCode RTOName")
      .populate({
        path: "InsuranceType",
        populate: {
          path: "InsuranceUnderFlow",
          select: "InsuranceType",
        },
        select: "InsuranceType",
      })
      .skip((page - 1) * limit)
      .limit(limit);
    // .populate("InsuranceType", "InsuranceType InsuranceUnderFlow")

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results,
      totalDocs,
      // data: [],
      // totalDocs: 0,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const getRtoGroupSelectDrpDown = async (req, res, next) => {
  try {
    const { InsuranceCompany } = req.query;
    const results = await RtoGroupCheckerSchema.find(
      { InsuranceCompany: ObjectId(InsuranceCompany) },
      { GroupName: 1 }
    ).sort({ GroupName: 1 })

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results,
    });
  } catch (error) {
    return next(error);
  }
};
const postRtoGroupChecker = async (req, res, next) => {
  const { GroupName, InsuranceCompany, DEF, ListOfRto, InsuranceType } =
    req.body;
  try {
    const data = await RtoGroupCheckerSchema.create({
      GroupName,
      InsuranceCompany,
      DEF,
      ListOfRto,
      InsuranceType,
      ListOfRtoLog: [
        {
          Date: ` ${DEF} - ${DEF}`,
          DEF: DEF,
          List: ListOfRto,
          Added: [],
          Removed: [],
        },
      ],
    });

    await PayoutGridSchema.updateMany(
      {
        isAllRtoGroupSelected: true,
        InsuranceCompany: ObjectId(data.InsuranceCompany),
        InsuranceType: { $in: [data.InsuranceType] },
      },
      {
        $addToSet: { RTOGroup: data._id },
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "RtoGroupChecker Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putRtoGroupChecker = async (req, res, next) => {
  const {
    OldListOfRto = [],
    ListOfRto = [],
    ListOfRtoLog = [],
    DateLog,
    preDEF,
    DEF,
    InsuranceType,
    preListOfRto,
    ...restData
  } = req.body;

  const removed = [];
  const added = [...ListOfRto];
  OldListOfRto.forEach((element) => {
    const index = added.indexOf(element);
    if (index !== -1) {
      added.splice(index, 1);
    } else {
      removed.push(element);
    }
  });
  try {
    if (preDEF !== DEF || added.length > 0 || removed.length > 0) {
      await RtoGroupCheckerSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            ListOfRto,
            InsuranceType,
            ListOfRtoLog: [
              ...ListOfRtoLog,
              {
                Date: DateLog,
                List: ListOfRto,
                Added: added,
                DEF,
                Removed: removed,
              },
            ],
            ...restData,
          },
        },
        { new: true }
      );
    } else {
      await RtoGroupCheckerSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            ListOfRto,
            InsuranceType,
            ...restData,
          },
        },
        { new: true }
      );
    }
    return res.status(200).json({
      success: true,
      message: "RtoGroupChecker Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};

const CheckIsRtoPresentOrNot = async (req, res, next) => {
  try {
    const { ListOfRto = [], InsuranceType, InsuranceCompany } = req.body;

    const { id } = req.params;

    const que = {};

    if (id) {
      que["_id"] = { $ne: ObjectId(id) };
    }

    if (!InsuranceType) {
      next(new ErrorHandler("Insurance Type Required", 400));
    }
    if (!InsuranceCompany) {
      next(new ErrorHandler("Insurance Company Required", 400));
    }

    const ListOfRtoData = ListOfRto.map((ele) => ObjectId(ele));

    const results = await RtoGroupCheckerSchema.aggregate([
      {
        $match: {
          ListOfRto: { $in: ListOfRtoData },
          InsuranceCompany: ObjectId(InsuranceCompany),
          InsuranceType: ObjectId(InsuranceType),
          ...que,
        },
      },
      {
        $addFields: {
          ListOfRto: {
            $filter: {
              input: "$ListOfRto",
              as: "rto",
              cond: { $in: ["$$rto", ListOfRtoData] },
            },
          },
        },
      },
    ]);

    const MyRtos = results.reduce((acc, it) => {
      return [...acc, ...it.ListOfRto];
    }, []);

    if (MyRtos.length === 0) {
      next();
      return;
    }

    const rtoGroup = results.map((ele) => ele.GroupName);

    const duplexRtos = await RTOSchema.find(
      {
        _id: { $in: MyRtos },
      },
      {
        RTOCode: 1,
      }
    );

    const Message = `${duplexRtos.map(
      (ele) => ele.RTOCode
    )} Already Present in ${rtoGroup} RTO Group`;

    next(new ErrorHandler(Message, 400));
    return;
  } catch (error) {
    console.log(error);
  }
};
const deleteRtoGroupChecker = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      RTOGroup: { $in: [ObjectId(req.params.id)] },
    });
    if (PayoutGrid) {
      return next(
        new ErrorHandler(
          `Data used in Payout Grid table so you can not delete`,
          400
        )
      );
    }
    const data = await RtoGroupCheckerSchema.findByIdAndDelete(req.params.id);
    await PayoutGridSchema.updateMany(
      {
        isAllRtoGroupSelected: true,
        InsuranceCompany: ObjectId(data.InsuranceCompany),
        InsuranceType: { $in: [data.InsuranceType] },
      },
      {
        $pull: { RTOGroup: data._id },
      }
    );
    res
      .status(200)
      .json({ success: true, message: "RtoGroupChecker Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getDataById = async (req, res, next) => {
  try {
    const data = await RtoGroupCheckerSchema.findById(req.params.id)
      .populate("ListOfRto")
      .populate("ListOfRtoLog.Added", "RTOName RTOCode")
      .populate("ListOfRtoLog.Removed", "RTOName RTOCode")
      .populate("InsuranceType", "InsuranceType InsuranceUnderFlow");
    res
      .status(200)
      .json({ success: true, message: "RtoGroupChecked data", data });
  } catch (error) {
    return next(error);
  }
};
const testApi = async (req, res, next) => {
  try {
    const VehicleNumber = "PB70G9745";
    let RtoGroupCheckerData = [];
    if (VehicleNumber) {
      const RTO_Code = VehicleNumber.slice(0, 4);
      if (RTO_Code) {
        const RTO_DATA = await RTOSchema.findOne({
          RTOCode: RTO_Code,
        });

        if (RTO_DATA) {
          RtoGroupCheckerData = await RtoGroupCheckerSchema.aggregate([
            {
              $match: {
                InsuranceCompany: ObjectId("64a56a3d7c28f739725320f3"),
              },
            },
            {
              $unwind: "$ListOfRtoLog",
            },
            {
              $match: {
                "ListOfRtoLog.DEF": { $lte: new Date("2023-07-04") },
                "ListOfRtoLog.List": {
                  $elemMatch: { $eq: ObjectId(RTO_DATA?._id) },
                },
              },
            },
          ]);
        }
      }
    }

    res.status(200).json({
      success: true,
      message: "RtoGroupChecked kljhvg",
      data: RtoGroupCheckerData,
    });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getRtoGroupChecker,
  postRtoGroupChecker,
  putRtoGroupChecker,
  deleteRtoGroupChecker,
  getDataById,
  testApi,
  getRtoGroupSelectDrpDown,
  CheckIsRtoPresentOrNot,
};
