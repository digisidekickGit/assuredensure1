const PolicyTypeSchema = require("../modal/PolicyTypeSchema");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const PolicySchema = require("../modal/PolicySchema");
const ErrorHandler = require("../util/handleError");

const getPolicyType = async (req, res, next) => {
  try {
    const PolicyType = await PolicyTypeSchema.find({});
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: PolicyType,
    });
  } catch (error) {
    return next(error);
  }
};
const postPolicyType = async (req, res, next) => {
  const { PolicyTypeName } = req.body;
  try {
    const PolicyType = await PolicyTypeSchema.findOne({
      PolicyTypeName,
    });

    if (PolicyType) {
      return res.status(200).json({
        success: true,
        message: "PolicyType Name  is already registered",
      });
    }
    await PolicyTypeSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "PolicyType Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putPolicyType = async (req, res, next) => {
  try {
    await PolicyTypeSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "PolicyType Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deletePolicyType = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      PolicyType: { $in: req.params.id },
    });
    const Policy = await PolicySchema.findOne({
      PolicyType: req.params.id,
    });

    if (Policy) {
      return next(
        new ErrorHandler(
          `Data used in another Policy table so you can not delete`,
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
    const MyPolicyData = await PolicyTypeSchema.findByIdAndDelete(
      req.params.id
    );
    
    return res
      .status(200)
      .json({ success: true, message: "PolicyType Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPolicyType,
  postPolicyType,
  putPolicyType,
  deletePolicyType,
};
