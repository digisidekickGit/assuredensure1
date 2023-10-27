const PayoutGridSchema = require("../modal/PayoutGridModal");
const { ObjectId } = require("mongodb");
const getPayoutGrid = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000 } = req.query;

    const totalDocs = await PayoutGridSchema.find({}).countDocuments();
    const PayoutGrid = await PayoutGridSchema.find({})
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      totalDocs,
      data: PayoutGrid,
    });
  } catch (error) {
    return next(error);
  }
};
const GetPopulate = async (req, res, next) => {
  try {
    const PayoutGrid = await PayoutGridSchema.find({}).populate({
      path: "Broker",
      select: "Name",
    });
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: PayoutGrid,
    });
  } catch (error) {
    return next(error);
  }
};
const postPayoutGrid = async (req, res, next) => {
  try {
    const { Broker, InsuranceCompany, ...rest } = req.body;

    if (Broker) {
      rest["Broker"] = ObjectId(Broker);
    }
    if (InsuranceCompany) {
      rest["InsuranceCompany"] = ObjectId(InsuranceCompany);
    }

    await PayoutGridSchema.create({ ...rest });
    res.status(200).json({
      success: true,
      message: "PayoutGrid Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putPayoutGrid = async (req, res, next) => {
  const { profilePic, Broker, InsuranceCompany, ...allData } = req.body;
  try {
    if (req?.file?.filename) {
      allData.profilePic = `/images/profilePic/${req.file.filename}`;
    }
    const unset = {};
    if (Broker) {
      allData["Broker"] = Broker;
    } else {
      unset["Broker"] = "";
    }
    if (InsuranceCompany) {
      allData["InsuranceCompany"] = InsuranceCompany;
    } else {
      unset["InsuranceCompany"] = "";
    }
    await PayoutGridSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: allData,
        $unset: {
          ...unset,
        },
      },
      { new: true }
    );

    // await PayoutGridSchema.updateMany({},{
    //   BusinessType:["NEW", "USED", "RoleOver + Renewable"]
    // })

    console.log("working done");
    res.status(200).json({
      success: true,
      message: "PayoutGrid Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deletePayoutGrid = async (req, res, next) => {
  try {
    // const PayoutGrid = await PayoutGridSchema.findOne({
    //   ReportingTo: req.params.id,
    // });

    // if (PayoutGrid) {
    //   return res.status(200).json({
    //     success: true,
    //     message: "PayoutGrid Assign As Reporting manager so you can not delete ",
    //   });
    // }

    await PayoutGridSchema.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "PayoutGrid Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};
const getPayoutGridDataById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const PayoutGrid = await PayoutGridSchema.findById(id)
      .populate("PolicyType RTOGroup InsuranceType")
      .populate({
        path: "MakeModal",
        select: "Name",
      })
      .populate({
        path: "Broker",
        select: "Name",
      })
      .populate({
        path: "InsuranceCompany",
        select: "Name",
      });

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: PayoutGrid,
    });
  } catch (error) {
    return next(error);
  }
};
const getPayoutGridByFilter = async (req, res, next) => {
  const {
    page = 1,
    limit = 3,
    startDate = "",
    endDate = "",
    RTOGroup,
    ...rest
  } = req.body;

  for (let x in rest) {
    rest[x] = ObjectId(rest[x]);
  }
  if (RTOGroup) {
    rest["RTOGroup"] = { $in: [ObjectId(RTOGroup)] };
  }

  if (startDate && endDate) {
    rest["createdAt"] = {
      $gte: new Date(`${startDate}T00:00:00.000+05:30`),
      $lte: new Date(`${endDate}T23:59:59.000+05:30`),
    };
  } else if (startDate) {
    rest["createdAt"] = {
      $gte: new Date(`${startDate}T00:00:00.000+05:30`),
    };
  } else if (endDate) {
    rest["createdAt"] = {
      $lte: new Date(`${endDate}T23:59:59.000+05:30`),
    };
  }

  console.log(rest, "restrestrestrest");

  try {
    const totalDocs = await PayoutGridSchema.aggregate([
      {
        $match: {
          // createdAt: {
          //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
          //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          // },

          ...rest,
        },
      },
      { $skip: (page - 1) * limit },
      { $limit: limit },
    ]);
    const total = await PayoutGridSchema.find({
      // createdAt: {
      //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
      //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
      // },

      ...rest,
    }).countDocuments();

    // const PayoutGrid = await PayoutGridSchema.aggregate([
    //   // {
    //   //   $match: {
    //   //     // createdAt: {
    //   //     //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
    //   //     //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
    //   //     // },
    //   //     // ...rest,
    //   //     // "AddDetails.DEF": { $lte: new Date(data?.IssueDate) },
    //   //   },
    //   // },
    //   {
    //     $unwind: "$AddDetails",
    //   },
    //   {
    //     $addFields: {
    //       "AddDetails.DEF": {
    //         $dateFromString: { dateString: "$AddDetails.DEF" },
    //       },
    //     },
    //   },
    //   // {
    //   //   $match: {

    //   //     "AddDetails.DEF": {
    //   //       $gte: new Date(startDate),
    //   //       $lte: new Date(endDate),
    //   //     },
    //   //   },
    //   // },
    //   {
    //     $group: {
    //       _id: "$_id",
    //       //Add All the same objects in on document
    //       AddDetails: { $push: "$AddDetails" },
    //       mergedFields: { $mergeObjects: "$$ROOT" },
    //       //Show Another field
    //       // Employee:{$first:"$Employee"}
    //     },
    //   },
    //   // {
    //   //   $project: {
    //   //     "mergedFields.AddDetails":0 // Remove the mergedFields field if desired
    //   //   }
    //   // },
    //   // {
    //   //   $replaceRoot: { newRoot: "$mergedFields" }
    //   // },
    //   { $skip: (page - 1) * limit },
    //   { $limit: limit },
    // ]);

    // const myNewPayoutGrid = PayoutGrid.map((ele) => {
    //   return {
    //     ...ele.mergedFields,
    //     AddDetails: ele.AddDetails,
    //   };
    // });
    let populatedData = await PayoutGridSchema.populate(totalDocs, [
      {
        path: "InsuranceCompany",
        select: "Name",
      },
      {
        path: "InsuranceType",
        select: "InsuranceType",
      },
      {
        path: "Broker",
        select: "Name",
      },
      {
        path: "PolicyType",
        select: "PolicyTypeName",
      },
      {
        path: "RTOGroup",
        select: "GroupName",
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Fetched Policy data Successfully",
      data: populatedData,
      totalDocs: total,
    });
  } catch (error) {
    return next(error);
  }
};
const getPayoutGridTableData = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000 } = req.query;
    const totalDocs = await PayoutGridSchema.find({}).countDocuments();

    const PayoutGrid = await PayoutGridSchema.find({})
      .populate({
        path: "InsuranceCompany",
        select: "Name",
      })
      .populate({
        path: "InsuranceType",
        select: "InsuranceType",
      })
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      totalDocs,
      data: PayoutGrid,
    });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getPayoutGrid,
  postPayoutGrid,
  putPayoutGrid,
  deletePayoutGrid,
  GetPopulate,
  getPayoutGridDataById,
  getPayoutGridByFilter,
  getPayoutGridTableData,
};
