const BranchSchema = require("../modal/BranchSchema");
const ErrorHandler = require("../util/handleError");
const BankSchema = require("../modal/BankSchema");

const getBranch = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await BranchSchema.find(
      inputData
        ? {
            $or: [
              {
                BranchName: { $regex: inputData, $options: "i" },
              },
              {
                BranchCode: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    ).countDocuments();

    const results = await BranchSchema.find(
      inputData
        ? {
            $or: [
              {
                BranchName: { $regex: inputData, $options: "i" },
              },
              {
                BranchCode: { $regex: inputData, $options: "i" },
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
      data: results,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postBranch = async (req, res, next) => {
  try {
    const { BranchCode, BranchName } = req.body;

    const Branch = await BranchSchema.findOne({
      BranchCode,
    });

    if (Branch) {
      return next(new ErrorHandler("Branch code is already registered", 400));
    }
    await BranchSchema.create({
      BranchCode,
      BranchName,
    });
    res.status(200).json({
      success: true,
      message: "Branch Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putBranch = async (req, res, next) => {
  try {
    await BranchSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Branch Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteBranch = async (req, res, next) => {
  try {
    const Bank = await BankSchema.findOne({
      Branch: req.params.id,
    });
    if (Bank) {
      return next(
        new ErrorHandler(
          `Data used in another Bank table so you can not delete`,
          400
        )
      );
    }

    await BranchSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Branch Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getBranch,
  postBranch,
  putBranch,
  deleteBranch,
};
