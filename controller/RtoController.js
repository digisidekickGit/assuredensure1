const RTOSchema = require("../modal/RtoSchema");
const ErrorHandler = require("../util/handleError");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const { ObjectId } = require("mongodb");
const getRTO = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await RTOSchema.find(
      inputData
        ? {
            $or: [
              {
                RTOName: { $regex: inputData, $options: "i" },
              },
              {
                RTOCode: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    ).countDocuments();

    const results = await RTOSchema.find(
      inputData
        ? {
            $or: [
              {
                RTOName: { $regex: inputData, $options: "i" },
              },
              {
                RTOCode: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    )
      .sort({ RTOCode: 1 })
      .skip((page - 1) * limit)
      .limit(limit);
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
const SelectBoxDropdown = async (req, res, next) => {
  const { page = 1, limit = 500, inputData, State } = req.query;

  let query = {};
  if (inputData) {
    query["$or"] = [
      {
        RTOName: { $regex: inputData, $options: "i" },
      },
      {
        RTOCode: { $regex: inputData, $options: "i" },
      },
    ];
  }
  if (State) {
    query["State"] = ObjectId(State);
  }
  console.log(query, "query");
  try {
    const data = await RTOSchema.aggregate([
      {
        $match: {
          ...query,
        },
      },
      {
        $skip: (page - 1) * limit,
      },
      {
        $limit: limit,
      },
      {
        $sort: { RTOName: 1 },
      },
      {
        $project: {
          value: "$_id",
          label: {
            $concat: ["$RTOName", "-", "(", "$RTOCode", ")"],
          },
        },
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: data,
    });
  } catch (error) {}
};
const postRTO = async (req, res, next) => {
  try {
    const { RTOCode, RTOName } = req.body;

    const Rto = await RTOSchema.findOne({
      RTOCode,
    });

    if (Rto) {
      return next(new ErrorHandler("RTO code is already registered", 400));
    }
    await RTOSchema.create({
      RTOCode,
      RTOName,
    });
    res.status(200).json({
      success: true,
      message: "RTO Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putRTO = async (req, res, next) => {
  try {
    await RTOSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "RTO Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const addState = async (req, res, next) => {
  try {
    // KARNATAKA TO CONTNEW
    const log = await RTOSchema.updateMany(
      { RTOCode: /^PB/ },
      { $set: { State: ObjectId("64788fa6efff58d9696fff87") } }
    );
    return res.status(200).json({
      success: true,
      message: "RTO Updated Successful",
      log,
    });
  } catch (error) {
    return next(error);
  }
};
const deleteRTO = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      RTO: { $in: req.params.id },
    });

    if (PayoutGrid) {
      "PayoutGrid", PayoutGrid;
      return next(
        new ErrorHandler(
          `Data used in another PayoutGrid table so you can not delete`,
          400
        )
      );
    }

    await RTOSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "RTO Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getRTODuplicate = async (req, res, next) => {
  try {
    // const Duplicate_Rto = await RTOSchema.aggregate([
    //   {
    //     $match: {},
    //   },
    //   {
    //     $group: {
    //       _id: `$RTOCode`,
    //       count: { $sum: 1 },
    //     },
    //   },
    //   {
    //     $sort: { _id: 1 },
    //   },
    // ]);

    const Duplicate_Rto = await RTOSchema.find({});

    const Capitalized_Rto = Duplicate_Rto.filter(
      (ele) => ele.RTOName === ele.RTOName.toUpperCase()
    );
    const Small_Rto = await Duplicate_Rto.filter(
      (ele) => ele.RTOName !== ele.RTOName.toUpperCase()
    ).map((ele) => ObjectId(ele._id));

    // await RTOSchema.deleteMany({ _id: { $in: Small_Rto } });
    res.status(200).json({
      success: true,
      // Duplicate_Rto: Duplicate_Rto,
      length: {
        Duplicate_Rto: Duplicate_Rto.length,
        Small_Rto: Small_Rto.length,
        Capitalized_Rto: Capitalized_Rto.length,
      },
      Capitalized_Rto,
      Small_Rto,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getRTO,
  postRTO,
  putRTO,
  deleteRTO,
  getRTODuplicate,
  SelectBoxDropdown,
  addState,
};
