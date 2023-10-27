const InsuranceSubCategorySchema = require("../modal/insuranceSubCategorySchema");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const ErrorHandler = require("../util/handleError");

const getInsuranceSubCategory = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;
    
    const totalDocs = await InsuranceSubCategorySchema.find(
      inputData
        ? {
            $or: [
              {
                InsuranceSubCategory: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    ).countDocuments();
    const InsuranceSubCategory = await InsuranceSubCategorySchema.find(
      inputData
        ? {
            $or: [
              {
                InsuranceSubCategory: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    )
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: InsuranceSubCategory,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postInsuranceSubCategory = async (req, res, next) => {
  const { InsuranceSubCategory } = req.body;
  try {
    const InsuranceSubCategoryData = await InsuranceSubCategorySchema.findOne({
      InsuranceSubCategory,
    });

    if (InsuranceSubCategoryData) {
      return next(
        new ErrorHandler("InsuranceSubCategory is already registered", 400)
      );
    }
    await InsuranceSubCategorySchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "Insurance Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putInsuranceSubCategory = async (req, res, next) => {
  try {
    await InsuranceSubCategorySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Insurance Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteInsuranceSubCategory = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      $or: [
        { InsuranceSubCategory1: { $in: req.params.id } },
        { InsuranceSubCategory2: { $in: req.params.id } },
        { InsuranceSubCategory3: { $in: req.params.id } },
      ],
    });

    if (PayoutGrid) {
      return next(
        new ErrorHandler(
          `Data used in another PayoutGrid table so you can not delete`,
          400
        )
      );
    }
    await InsuranceSubCategorySchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Insurance Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getInsuranceSubCategory,
  postInsuranceSubCategory,
  putInsuranceSubCategory,
  deleteInsuranceSubCategory,
};
