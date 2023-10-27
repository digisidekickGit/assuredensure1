const PolicySchema = require("../modal/PolicySchema");
const ErrorHandler = require("../util/handleError");
const { ObjectId } = require("mongodb");
const PosSchema = require("../modal/PosSchema");
const protectUniquePolicy = async (req, res, next) => {
  const { Policy } = req.body;

  const { VehicleNumber, ...data } = JSON.parse(Policy);

  if (VehicleNumber.length < 4) {
    return next(
      new ErrorHandler(
        `VehicleNumber ${VehicleNumber} It should Greater then 4 Characters`,
        400
      )
    );
  }

  if (VehicleNumber.length === 4) {
    const REGEXfOR4 = /^[A-Z]{2}[0-9]{1,2}$/;
    if (REGEXfOR4.test(VehicleNumber)) {
      return next();
    } else {
      return next(
        new ErrorHandler(
          `${VehicleNumber} It is not a valid vehicle Number`,
          400
        )
      );
    }
  }

  const VehicleValidatorRegex = /^[A-Z]{2}[0-9]{1,2}([A-Z]*)[0-9]{4,5}$/;

  if (!VehicleValidatorRegex.test(VehicleNumber)) {
    return next(
      new ErrorHandler(`${VehicleNumber} It is not a valid vehicle Number`, 400)
    );
  }

  const count = await PolicySchema.countDocuments({
    _id: { $ne: ObjectId(req.params.id) },
    VehicleNumber: VehicleNumber,
  });
  if (!(count === 0)) {
    return next(
      new ErrorHandler(
        `Policy already exist with ${VehicleNumber} vehicle number.`,
        400
      )
    );
  }
  // Policy already exist with same vehicle number

  next();
};
const protectUniquePOS = async (req, res, next) => {
  const { PanNumber, AadhaarNumber, Mobile } = req.body;

  const AadhaarNumberCount = await PosSchema.countDocuments({
    _id: { $ne: ObjectId(req.params.id) },
    AadhaarNumber: AadhaarNumber,
  });

  console.log(AadhaarNumberCount, "AadhaarNumberCount");
  if (!(AadhaarNumberCount === 0)) {
    return next(new ErrorHandler(`Aadhaar Number Already Exist.`, 400));
  }
  const MobileCount = await PosSchema.countDocuments({
    _id: { $ne: ObjectId(req.params.id) },
    Mobile: Mobile,
  });
  if (!(MobileCount === 0)) {
    return next(new ErrorHandler(`This Mobile number Already Exist.`, 400));
  }

  const PanNumberCount = await PosSchema.countDocuments({
    _id: { $ne: ObjectId(req.params.id) },
    PanNumber: PanNumber,
  });
  if (!(PanNumberCount === 0)) {
    return next(new ErrorHandler(`This Pan number Already Exist..`, 400));
  }
  // Policy already exist with same vehicle number

  next();
};

const   protectUniquePost= async (req, res, next) => {
  const { PanNumber, AadhaarNumber, Mobile } = req.body;
  console.log(req.body, " req.body; req.body;");
  const AadhaarNumberCount = await PosSchema.countDocuments({
    AadhaarNumber: AadhaarNumber,
  });

  if (!(AadhaarNumberCount === 0)) {
    return next(new ErrorHandler(`Aadhaar Number Already Exist.`, 400));
  }
  const MobileCount = await PosSchema.countDocuments({
    Mobile: Mobile,
  });
  if (!(MobileCount === 0)) {
    return next(new ErrorHandler(`This Mobile number Already Exist.`, 400));
  }

  const PanNumberCount = await PosSchema.countDocuments({
    PanNumber: PanNumber,
  });
  if (!(PanNumberCount === 0)) {
    return next(new ErrorHandler(`This Pan number Already Exist..`, 400));
  }
  // Policy already exist with same vehicle number

  next();
};

module.exports = { protectUniquePolicy, protectUniquePOS,protectUniquePost };
