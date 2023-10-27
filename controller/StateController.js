const StateSchema = require("../modal/StateSchema");
const ErrorHandler = require("../util/handleError");
const PayoutGridSchema = require("../modal/PayoutGridModal");

const getState = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 200,
      inputData = "",
      ...restData
    } = req.query;

    const que = {};


    if (inputData) {
      que["$or"] = [
        {
          StateName: { $regex: inputData, $options: "i" },
        },
      ];
    }

  

    const totalDocs = await StateSchema.find({ ...que }).countDocuments();
    const Rto = await StateSchema.find({ ...que })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Rto,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postState = async (req, res, next) => {
  try {
    const State = await StateSchema.findOne({
      StateCode: req.body.StateCode,
    });

    if (State) {
      return res.status(200).json({
        success: true,
        message: "State code is already registered",
      });
    }
    await StateSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "State Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putState = async (req, res, next) => {
  try {
    await StateSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "State Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteState = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      State: { $in: req.params.id },
    });
    if (PayoutGrid) {
      return next(
        new ErrorHandler(
          `Data used in another PayoutGrid table so you can not delete`,
          400
        )
      );
    }

    await StateSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "State Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getState,
  postState,
  putState,
  deleteState,
};
