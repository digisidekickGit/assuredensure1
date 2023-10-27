const PincodeSchema = require("../modal/PincodeSchema");
const ErrorHandler = require("../util/handleError");

const getPincode = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await PincodeSchema.find(
      inputData
        ? {
            $or: [
              {
                PincodeLocation: { $regex: inputData, $options: "i" },
              },
              
            ],
          }
        : {}
    ).countDocuments();

    const results = await PincodeSchema.find(
      inputData
        ? {
            $or: [
              {
                PincodeLocation: { $regex: inputData, $options: "i" },
              },
              //   {
              //     PincodeCode: { $regex: inputData, $options: "i" },
              //   },
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
const postPincode = async (req, res, next) => {
  try {
    const { Pincode, PincodeLocation, CityCode, StateCode } = req.body;

    const PincodeData = await PincodeSchema.findOne({
      Pincode,
    });

    if (PincodeData) {
      return next(new ErrorHandler("Pincode code is already registered", 400));
    }
    await PincodeSchema.create({
      Pincode,
      PincodeLocation,
      CityCode,
      StateCode,
    });
    res.status(200).json({
      success: true,
      message: "Pincode Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putPincode = async (req, res, next) => {
  try {
    await PincodeSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "Pincode Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deletePincode = async (req, res, next) => {
  try {
    await PincodeSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Pincode Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPincode,
  postPincode,
  putPincode,
  deletePincode,
};
