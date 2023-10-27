const ManufacturerSchema = require("../modal/ManufacturerSchema");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const ErrorHandler = require("../util/handleError");

const getManufacturer = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000,inputData } = req.query;

    const totalDocs = await ManufacturerSchema.find( inputData
      ? {
          $or: [
            {
              ManufacturerName: { $regex: inputData, $options: "i" },
            },
            
          ],
        }
      : {}).countDocuments();

    const Manufacturer = await ManufacturerSchema.find( inputData
      ? {
          $or: [
            {
              ManufacturerName: { $regex: inputData, $options: "i" },
            },
            
          ],
        }
      : {})
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Manufacturer,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postManufacturer = async (req, res, next) => {
  try {
    const Manufacturer = await ManufacturerSchema.findOne({
      ManufacturerName: req.body.ManufacturerName,
    });

    if (Manufacturer) {
      return res.status(200).json({
        success: true,
        message: "Manufacturer Name  is already registered",
      });
    }
    await ManufacturerSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "Manufacturer Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putManufacturer = async (req, res, next) => {
  try {
    await ManufacturerSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Manufacturer Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteManufacturer = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      Manufacturer: { $in: req.params.id },
    });
    if (VehicleModal) {
      return next(
        new ErrorHandler(
          "Data used in Vehicle modal so you can not delete right now",
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
    await ManufacturerSchema.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "Manufacturer Deleted Successfully" });
  } catch (error) {
    
    return next(error);
  }
};

module.exports = {
  getManufacturer,
  postManufacturer,
  putManufacturer,
  deleteManufacturer,
};
