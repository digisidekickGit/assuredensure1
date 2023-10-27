const MakeModalSchema = require("../modal/MakeModal");
const { ObjectId } = require("mongodb");
const { removeObjectEmptyValues } = require("../util/UseFullFunctions");
const getVehicleModal = async (req, res, next) => {
  const {
    page = 1,
    limit = 25,
    inputData = "",
    FuelType = "",
    MakeModal = "",
    InsuranceType = "",
    ...rest
  } = req.body;
  let que = {};

  if (inputData) {
    que["$or"] = [
      {
        "Variant.VariantName": { $regex: inputData, $options: "i" },
      },
    ];
  }
  if (FuelType) {
    que["Variant.FuelType"] = FuelType;
  }
  if (MakeModal) {
    que["_id"] = ObjectId(MakeModal);
  }
  if (InsuranceType) {
    que["InsuranceType"] = ObjectId(InsuranceType);
  }

  try {
    const totalDocs = await MakeModalSchema.aggregate([
      {
        $unwind: "$Variant", // marge multiple docs in one array of objects
      },
      {
        $match: {
          ...que,
        },
      },
    ]);
    const VehicleModal = await MakeModalSchema.aggregate([
      {
        $unwind: "$Variant", // marge multiple docs in one array of objects
      },
      {
        $match: {
          ...que,
        },
      },
      { $skip: (page - 1) * limit },
      { $limit: limit },
      {
        $sort: {
          Name: 1,
        },
      },
    ]);
    let VehicleModalData = await MakeModalSchema.populate(VehicleModal, [
      {
        path: "InsuranceType",
        select: "InsuranceType",
      },
    ]);

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: VehicleModalData,
      totalDocs: totalDocs.length,
    });
  } catch (error) {
    return next(error);
  }
};

const postVehicleModal = async (req, res, next) => {
  const { Variant, MakeModal } = req.body;

  removeObjectEmptyValues(Variant);
  try {
    await MakeModalSchema.findByIdAndUpdate(MakeModal, {
      $push: { Variant: Variant },
    });
    res.status(200).json({
      success: true,
      message: "Vehicle Add Successfully",
    });
  } catch (error) {
    return next(error);
  }
};

const putVehicleModal = async (req, res, next) => {
  try {
    const { id } = req.params; // object _id
    const { _id, ...rest } = req.body;
    const que = {};
    Object.keys(rest).forEach((key) => {
      que[`Variant.$.${key}`] = req.body[key];
    });

    await MakeModalSchema.updateMany(
      {
        "Variant._id": ObjectId(_id),
        _id: ObjectId(id),
      },
      {
        ...que,
      }
    );
    res.status(200).json({
      success: true,
      message: "VehicleModal Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteVehicleModal = async (req, res, next) => {
  const { MakeModal, _id } = req.query;

  try {
    await MakeModalSchema.findByIdAndUpdate(MakeModal, {
      $pull: { Variant: { _id } },
    });
    res
      .status(200)
      .json({ success: true, message: "Vehicle Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getVehicleModal,
  postVehicleModal,
  putVehicleModal,
  deleteVehicleModal,
};
