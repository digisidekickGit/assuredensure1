const InsuranceTypeSchema = require("../modal/InsuranceTypeSchema");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const PolicySchema = require("../modal/PolicySchema");
const ErrorHandler = require("../util/handleError");
const {
  removeEmptyValues,
  removeDuplicates,
} = require("../util/UseFullFunctions");
const { ObjectId } = require("mongodb");

const getInsuranceType = async (req, res, next) => {
  try {
    const { inputData, InsuranceCompany, InsuranceUnder, ...restData } =
      req.query;
    let que = { ...restData };

    if (InsuranceCompany) {
      que["InsuranceCompany"] = ObjectId(InsuranceCompany);
    }
    if (InsuranceUnder) {
      que["InsuranceUnder"] = ObjectId(InsuranceUnder);
    }
    const InsuranceType = await InsuranceTypeSchema.find(
      { ...que },
      { InsuranceType: 1, Root: 1, InsuranceCompany: 1, GST: 1 }
    ).populate({ path: "InsuranceCompany", select: "Name" });

    let InsuranceType2 = [];

    if (InsuranceType.length === 0) {
      InsuranceType2 = await InsuranceTypeSchema.find(
        { ...que, InsuranceCompany: { $exists: false } },
        { InsuranceType: 1, Root: 1, InsuranceCompany: 1, GST: 1 }
      ).populate({ path: "InsuranceCompany", select: "Name" });
    }

    const arr = [...InsuranceType, ...InsuranceType2];

    // const dataCheck = removeDuplicates(arr);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: arr,
    });
  } catch (error) {
    return next(error);
  }
};
const postInsuranceType = async (req, res, next) => {
  const { InsuranceType, InsuranceUnder, InsuranceUnderFlow, ...rest } =
    req.body;

  const InsuranceUnderLength = InsuranceUnderFlow.length;
  const Root = InsuranceUnderLength !== 0 ? false : true;
  removeEmptyValues(req.body);

  if (!Root) {
    req.body["InsuranceUnder"] = InsuranceUnderFlow[InsuranceUnderLength - 1];
  }

  try {
    const InsuranceTypeData = await InsuranceTypeSchema.findOne({
      InsuranceType,
    });

    if (InsuranceTypeData) {
      return next(new ErrorHandler("InsuranceType is already registered", 400));
    }
    await InsuranceTypeSchema.create({ ...req.body, Root });
    res.status(200).json({
      success: true,
      message: "Insurance Created Successfully",
    });
  } catch (error) {
    // return next(error);
  }
};
const putInsuranceType = async (req, res, next) => {
  const { InsuranceUnder, InsuranceCompany } = req.body;

  try {
    if (!InsuranceCompany) {
      await InsuranceTypeSchema.findByIdAndUpdate(
        req.params.id,
        { $unset: { InsuranceCompany: "" } },
        { new: true }
      );
    }

    if (!InsuranceUnder) {
      await InsuranceTypeSchema.findByIdAndUpdate(
        req.params.id,
        {
          $unset: { InsuranceUnder: "", InsuranceUnderFlow: [] },
          $set: { Root: true },
        },
        { new: true }
      );
    } else {
      removeEmptyValues(req.body);
      await InsuranceTypeSchema.findByIdAndUpdate(
        req.params.id,
        {
          $set: { ...req.body, Root: false },
        },
        { new: true }
      );
    }

    res.status(200).json({
      success: true,
      message: "Insurance Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteInsuranceType = async (req, res, next) => {
  const { id } = req.params;

  try {
    const InsuranceType = await InsuranceTypeSchema.findOne({
      InsuranceType: ObjectId(id),
    });
    const PayoutGrid = await PayoutGridSchema.findOne({
      InsuranceType: ObjectId(id),
    });
    const PolicyData = await PolicySchema.findOne({
      InsuranceType: ObjectId(id),
    });

    if (VehicleModal) {
      return next(
        new ErrorHandler(
          `Data used in another  VehicleModal table so you can not delete`,
          400
        )
      );
    }
    if (PayoutGrid) {
      return next(
        new ErrorHandler(
          `Data used in another PayoutGrid table so you can not delete`,
          400
        )
      );
    }
    if (PolicyData) {
      return next(
        new ErrorHandler(
          `Data used in another Policy table so you can not delete`,
          400
        )
      );
    }
    if (InsuranceType) {
      return next(
        new ErrorHandler(
          `Data used in another InsuranceType table so you can not delete`,
          400
        )
      );
    }
    await InsuranceTypeSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Insurance Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getDataById = async (req, res, next) => {
  const { id } = req.params;
  const InsuranceTypeData = await InsuranceTypeSchema.findById(id);
  res.status(200).json({
    success: true,
    message: "Insurance Updated Successful",
    data: InsuranceTypeData,
  });
};

const getDeepPopulateFun = () => {
  const MyAllPopulateData = [];

  return async function (id) {
    try {
      const data = await InsuranceTypeSchema.findOne({
        InsuranceUnder: ObjectId(id),
      });
      if (data.Root) {
        MyAllPopulateData.push(data);
        return MyAllPopulateData;
      } else {
        MyAllPopulateData.push(data);
        return data;
      }
    } catch (error) {}
  };
};

// testing under Id

const getDeepPopulate = async (req, res, next) => {
  const myGetPopulateFunction = getDeepPopulateFun();
  try {
    let myData = await myGetPopulateFunction("64a3fb773e6cb37ec50bc20c");

    if (myData.InsuranceUnder) {
      myData = await myGetPopulateFunction(myData.InsuranceUnder);
    }
    res.status(200).json({
      data: myData,
    });
  } catch (error) {}
};

const getDataForEdit = async (req, res, next) => {
  try {
    const data = await InsuranceTypeSchema.findById(req.params.id, {
      InsuranceType: 1,
      Root: 1,
      InsuranceUnderFlow: 1,
    })
      .populate("InsuranceUnder", "InsuranceType")
      .populate("InsuranceUnderFlow", "InsuranceType");

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

const getDataByFilter = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 3000,
      inputData,
      // InsuranceCompany,
      InsuranceUnder,
    } = req.body;

    let que = {};

    // if (InsuranceCompany) {
    //   que["InsuranceCompany"] = ObjectId(InsuranceCompany);
    // }
    if (InsuranceUnder) {
      que["InsuranceUnder"] = ObjectId(InsuranceUnder);
    } else {
      que["Root"] = true;
    }
    if (inputData) {
      que.$or = [
        {
          InsuranceType: { $regex: inputData, $options: "i" },
        },
      ];
    }
    const totalDocs = await InsuranceTypeSchema.find({
      ...que,
    }).countDocuments();
    const InsuranceType = await InsuranceTypeSchema.find(
      { ...que },
      { InsuranceType: 1, Root: 1, GST: 1, InsuranceUnderFlow: 1 }
    )
      .populate("InsuranceUnder", "InsuranceType")
      .populate({ path: "InsuranceUnderFlow", select: "InsuranceType" })
      .populate({ path: "InsuranceCompany", select: "Name" })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: InsuranceType,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getInsuranceType,
  postInsuranceType,
  putInsuranceType,
  deleteInsuranceType,
  getDeepPopulate,
  getDataForEdit,
  getDataById,
  getDataByFilter,
};
