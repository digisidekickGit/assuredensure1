const MakeModalSchema = require("../modal/MakeModal");
const { ObjectId } = require("mongodb");
// const { HCVLCV } = require("../MakeModalDB/HCVLCV");
const fs = require("fs");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const ErrorHandler = require("../util/handleError");
const { FourWheeler } = require("../MakeModalDB/Fourwheeler/FourWheeler");
const CreateNewJsonFile = async (req, res, next) => {
  try {
    const isMyData = new Map();
    const notMatch = [];
    const myData = JSON.parse(JSON.stringify(FourWheeler));
    myData.forEach((element) => {
      const MAKE_Modal = element.Option;
      const VARIANT_DATA = element.Variant;

      const regex = /(\w+)-(\d+cc),\s(\d+S)/;
      const match = VARIANT_DATA.match(regex);

      const fuelType = match[1]; // Petrol
      const engineCapacity = match[2]; // 998cc
      const numberOfSeats = match[3]; // 5S
      let engineCapacityNumber = Number(engineCapacity.split("cc")[0]);

      // if (engineCapacityNumber >= 3500 && engineCapacityNumber < 7500) {

      //   // continue;
      // }
      if (engineCapacityNumber >= 1500) {
        console.log(engineCapacityNumber, "engineCapacityNumber");
        if (isMyData.has(MAKE_Modal)) {
          const modalData = isMyData.get(MAKE_Modal);
          isMyData.set(MAKE_Modal, [
            ...modalData,
            {
              VariantName: VARIANT_DATA ?? "",
              FuelType: fuelType,
              Engine: engineCapacity,
              Seater: numberOfSeats,
            },
          ]);
        } else {
          isMyData.set(MAKE_Modal, [
            {
              VariantName: VARIANT_DATA ?? "",
              FuelType: fuelType,
              Engine: engineCapacity,
              Seater: numberOfSeats,
            },
          ]);
        }
      }
    });
    const MYdataIs = await [...isMyData].map(([MakeModalName, VariantName]) => {
      return {
        Name: MakeModalName,
        Variant: VariantName,
        InsuranceType: ObjectId("653a0fa337629099ec35911e"),
      };
    });
    // await MakeModalSchema.insertMany(MYdataIs);
    return res.status(200).json({ MYdataIs, notMatch });
  } catch (error) {}
};

// const setMakeModalData = async (req, res, next) => {
//   try {
//     const isMyData = new Map();
//     const myData = JSON.parse(JSON.stringify(MoreThen150Data));
//     const notMatchContact = [];
//     myData.forEach((element) => {
//       const MAKE_Modal = element.Option;
//       const VARIANT_DATA = element.Variant;
//       // const pattern = /\(([^-]+)-([^,]+), ([^)]+)\)/;
//       const pattern = /\((.*?)-(.*?)\)/;
//       if (isMyData.has(MAKE_Modal)) {
//         const matches = VARIANT_DATA.match(pattern);
//         if (matches) {
//           const modalData = isMyData.get(MAKE_Modal);
//           isMyData.set(MAKE_Modal, [
//             ...modalData,
//             {
//               VariantName: VARIANT_DATA,
//               FuelType: matches[1],
//               Engine: matches[2],
//               // Seater: matches[3],
//             },
//           ]);
//         } else {
//           notMatchContact.push({ [MAKE_Modal]: VARIANT_DATA });
//         }
//       } else {
//         const matches = VARIANT_DATA.match(pattern);
//         if (matches) {
//           isMyData.set(MAKE_Modal, [
//             {
//               VariantName: VARIANT_DATA,
//               FuelType: matches[1],
//               Engine: matches[2],
//               // Seater: matches[3],
//             },
//           ]);
//         } else {
//           notMatchContact.push({ [MAKE_Modal]: VARIANT_DATA });
//         }
//       }
//     });
//     const MYdataIs = [...isMyData].map(([MakeModalName, VariantName]) => {
//       return {
//         Name: MakeModalName,
//         Variant: VariantName,
//         InsuranceType: ObjectId("64c7731247ecab0686f40e5d"),
//       };
//     });

//     await MakeModalSchema.insertMany(MYdataIs);
//     return res.status(200).json({
//       data: MYdataIs,
//       length: MYdataIs.length,
//       notMatchContact: notMatchContact,
//     });
//   } catch (error) {
//     return next(error);
//   }
// };

// const setMakeModalData = async (req, res, next) => {
//   try {
//     const isMyData = new Map();
//     const myData = JSON.parse(JSON.stringify(MSID));

//     myData.forEach((element) => {
//       const MAKE_Modal = element.Option;

//       if (isMyData.has(MAKE_Modal)) {
//         const modalData = isMyData.get(MAKE_Modal);
//         isMyData.set(MAKE_Modal, [
//           ...modalData,
//           {
//             VariantName: element?.Variant ?? "",
//             FuelType: element?.FuelType ?? "",
//             // Engine: matches[2],
//             // Seater: matches[3],
//           },
//         ]);
//       } else {
//         isMyData.set(MAKE_Modal, [
//           {
//             VariantName: element?.Variant ?? "",
//             FuelType: element?.FuelType ?? "",
//             // Engine: matches[2],
//             // Seater: matches[3],
//           },
//         ]);
//       }
//     });
//     const MYdataIs = [...isMyData].map(([MakeModalName, VariantName]) => {
//       return {
//         Name: MakeModalName,
//         Variant: VariantName,
//         InsuranceType: ObjectId("64a51e8bd8586cb6408c03c5"),
//       };
//     });

//     await MakeModalSchema.insertMany(MYdataIs);
//     return res.status(200).json({
//       data: MYdataIs,
//       length: MYdataIs.length,
//     });
//   } catch (error) {
//     return next(error);
//   }
// };
const setMakeModalData = async (req, res, next) => {
  try {
    let DB = [];

    const myData = JSON.parse(JSON.stringify(HCVLCV));

    const HCVLCVLength = myData.length;

    for (let index = 0; index < HCVLCVLength; index++) {
      if (myData[index]["GVW"] >= 3500 && myData[index]["GVW"] < 7500) {
        DB.push(myData[index]);
        // continue;
      }
      // break;
    }

    const isMyData = new Map();

    await DB.forEach((element) => {
      const MAKE_Modal = element.Company;

      if (isMyData.has(MAKE_Modal)) {
        const modalData = isMyData.get(MAKE_Modal);
        isMyData.set(MAKE_Modal, [
          ...modalData,
          {
            VariantName: `${element?.Variant}` ?? "",
            FuelType: "Diesel",
            // Engine: element?.CC + "CC",
            // Seater: element?.SC,
          },
        ]);
      } else {
        isMyData.set(MAKE_Modal, [
          {
            VariantName: `${element?.Variant} ` ?? "",
            FuelType: "Diesel",
            Engine: element?.CC + "CC",
            Seater: element?.SC,
          },
        ]);
      }
    });
    const MYdataIs = await [...isMyData].map(([MakeModalName, VariantName]) => {
      return {
        Name: MakeModalName,
        Variant: VariantName,
        // InsuranceType: ObjectId("6516d387ad15113aaf6d8c41"),
      };
    });

    return res.status(200).json({
      data: MYdataIs,
      length: MYdataIs.length,
    });
  } catch (error) {
    return next(error);
  }
};

const getDataByField = async (req, res, next) => {
  const {
    FieldToShow = { Name: 1 },
    InsuranceType,
    inputData = "",
    page = 1,
    limit = 3000,
  } = req.body;

  let query = {};

  if (InsuranceType) {
    query["InsuranceType"] = ObjectId(InsuranceType);
  }

  if (inputData) {
    query["Name"] = { $regex: inputData, $options: "i" };
  }

  try {
    const data = await MakeModalSchema.find(
      {
        ...query,
      },
      { ...FieldToShow }
    )
      .skip((page - 1) * limit)
      .limit(limit);
    return res.status(200).json({
      data: data,
    });
  } catch (error) {}
};

const getDropDownData = async (req, res, next) => {
  const { inputData = "", InsuranceType, page = 1, limit = 150 } = req.body;

  let query = {};
  if (inputData) {
    query["Name"] = { $regex: inputData, $options: "i" };
  }
  if (InsuranceType) {
    query["InsuranceType"] = ObjectId(InsuranceType);
  }

  console.log(query, "InsuranceTypeInsuranceType");
  try {
    const data = await MakeModalSchema.aggregate([
      {
        $match: {
          ...query,
        },
      },
      // {
      //   $skip: (page - 1) * limit,
      // },
      // {
      //   $limit: limit,
      // },
      {
        $project: {
          value: "$_id",
          label: "$Name",
        },
      },
    ]);
    return res.status(200).json({
      data: data,
    });
  } catch (error) {}
};
const getFuelType = async (req, res, next) => {
  const { id } = req.body;
  try {
    const data = await MakeModalSchema.aggregate([
      {
        $match: {
          _id: ObjectId(id),
        },
      },
      {
        $unwind: "$Variant", // marge multiple docs in one array of objects
      },
      {
        $group: {
          _id: "$Variant.FuelType",
        },
      },
    ]);

    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      data: error,
    });
  }
};
const getVariant = async (req, res, next) => {
  const { Filter = {}, id } = req.body;
  try {
    const data = await MakeModalSchema.aggregate([
      {
        $match: {
          _id: ObjectId(id),
        },
      },
      {
        $unwind: "$Variant", // marge multiple docs in one array of objects
      },
      {
        $match: {
          ...Filter,
        },
      },
      {
        $group: {
          _id: "$Variant.VariantName",
        },
      },
    ]);
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      data: error,
    });
  }
};

const getAllFuelType = async (req, res, next) => {
  try {
    const data = await MakeModalSchema.aggregate([
      { $unwind: "$Variant" },

      { $group: { _id: "$Variant.FuelType" } },
      {
        $match: {
          _id: { $ne: null }, // Exclude documents where FuelType is null
        },
      },
      { $group: { _id: null, FuelType: { $push: "$_id" } } },
    ]);
    console.log(data, "");
    return res.status(200).json({
      data: data,
    });
  } catch (error) {
    return res.status(500).json({
      data: error,
    });
  }
};

const db = async (req, res, next) => {
  try {
    // const data = await MakeModalSchema.updateMany(
    //   {
    //     "Variant.FuelType": "CNG",
    //     // _id: ObjectId("64ec8fa4f91d07302e920a35"),
    //   },
    //   {
    //     [`Variant.$.FuelType`]: "Petrol+CNG",
    //   }
    // );
    // const data = await MakeModalSchema.find(
    //   {
    //     $and: [
    //       { "Variant.VariantName": { $regex: /Diesel/i } },
    //       { "Variant.FuelType": "Petrol+CNG" },
    //     ],
    //   },
    //   { $set: { "Variant.$.FuelType": "Diesel" } }
    // );
    // const data = await MakeModalSchema.aggregate([
    //   { $unwind: { path: "$Variant" } },
    //   {
    //     $match: {
    //       // "Variant.VariantName": {
    //       //   $regex: "Diesel",
    //       // },
    //       "Variant.FuelType": "Petrol+LPG",
    //     },
    //   },
    //   { $set: { "Variant.FuelType": "Diesel" } },
    // ]);
    // data.forEach(async function (doc) {
    //   const mm = await MakeModalSchema.updateOne(
    //     { _id: doc._id, "Variant._id": doc.Variant._id },
    //     { $set: { "Variant.$.FuelType": "Diesel" } }
    //   );
    //   console.log(mm, "check this one");
    // });
    return res.status(200).json({
      // data: data,
      // message: "UPDATE",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: error,
    });
  }
};

const getMakeModel = async (req, res, next) => {
  const {
    page = 1,
    limit = 5,
    inputData,
    InsuranceType,
    ...restData
  } = req.query;

  if (inputData) {
    restData["$or"] = [
      {
        Name: { $regex: inputData, $options: "i" },
      },
    ];
  }

  if (InsuranceType) {
    restData["InsuranceType"] = ObjectId(InsuranceType);
  }
  try {
    const totalDocs = await MakeModalSchema.find({
      ...restData,
    }).countDocuments();

    const results = await MakeModalSchema.find(
      { ...restData },
      { Name: 1, InsuranceType: 1 }
    )
      .populate("InsuranceType", "InsuranceType")
      .sort({ Name: 1 })
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

const getDataById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const data = await MakeModalSchema.findOne(
      { _id: ObjectId(id) },
      { InsuranceType: 1, Name: 1 }
    ).populate("InsuranceType", "InsuranceUnderFlow");

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: data,
    });
  } catch (error) {}
};
const create = async (req, res, next) => {
  try {
    const data = await MakeModalSchema.create(req.body);

    await PayoutGridSchema.updateMany(
      {
        isAllMakeModalSelected: true,
        InsuranceType: { $in: [data.InsuranceType] },
      },
      {
        $addToSet: { MakeModal: data._id },
      }
    );

    res.status(200).json({
      success: true,
      message: "Create Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const edit = async (req, res, next) => {
  try {
    await MakeModalSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Edit Successfully",
    });
  } catch (error) {
    return next(error);
  }
};

const getMakeModelSelectBox = async (req, res, next) => {
  const {
    page = 1,
    limit = 50,
    inputData,
    InsuranceType,
    ...restData
  } = req.query;

  if (inputData) {
    restData["$or"] = [
      {
        Name: { $regex: inputData, $options: "i" },
      },
    ];
  }

  if (InsuranceType) {
    restData["InsuranceType"] = ObjectId(InsuranceType);
  }
  try {
    const results = await MakeModalSchema.find({ ...restData }, { Name: 1 })
      .sort({ Name: 1 })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results,
    });
  } catch (error) {
    return next(error);
  }
};

const deleteMakeModal = async (req, res, next) => {
  try {
    // const PayoutGrid = await PayoutGridSchema.findOne({
    //   MakeModal: { $in: req.params.id },
    // })

    // if (PayoutGrid) {
    //   return next(
    //     new ErrorHandler(
    //       `Data used in another PayoutGrid table so you can not delete`,
    //       400
    //     )
    //   );
    // }

    // const PayoutGrid = await PayoutGridSchema.findOne({
    //   MakeModal: { $in: req.params.id },
    // });

    const data = await MakeModalSchema.findByIdAndDelete(req.params.id);
    await PayoutGridSchema.updateMany(
      {
        isAllMakeModalSelected: true,
        InsuranceType: { $in: [data.InsuranceType] },
      },
      {
        $pull: { MakeModal: data._id },
      }
    );
    res
      .status(200)
      .json({ success: true, message: "Make modal  Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getMakeModel,
  setMakeModalData,
  getDataByField,
  getFuelType,
  getVariant,
  getDropDownData,
  getAllFuelType,
  db,
  CreateNewJsonFile,
  getDataById,
  create,
  edit,
  getMakeModelSelectBox,
  deleteMakeModal,
};
