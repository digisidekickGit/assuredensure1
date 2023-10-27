const BankDetailsForPortal = require("../modal/BankDetailsForPortalSchema");
const { ObjectId } = require("mongodb");
const fs = require("fs");
const path = require("path");
const ErrorHandler = require("../util/handleError");

// PBD => PORTAL BANK DETAILS

const getPBDForPos = async (req, res, next) => {
  const { id } = req.params;

  const data = await BankDetailsForPortal.find({
    // Employee: ObjectId(id),
    Pos: ObjectId(id),
  });

  try {
    res.status(200).json({
      success: true,
      message: "Bank Details of Pos",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};
const getPBDForPosbyName = async (req, res, next) => {
  const { id } = req.params;

  const data = await BankDetailsForPortal.aggregate([
    {
      $match:{
        Pos: ObjectId(id)
      }
    },
    {
      $project: {
        _id: "$_id",
        Name: {
          $concat: [ "$Name","/","$BankAccountNo","/", "$IFSC"],
        },
      },
    },
  ])
  try {
    res.status(200).json({
      success: true,
      message: "Bank Details of Pos",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};

const PostPBD = async (req, res, next) => {
  const { ...allData } = req.body;

  try {
    const data = await BankDetailsForPortal.create({ ...allData });

    res.status(200).json({
      success: true,
      message: "Created Successfully",
      data: data,
    });
  } catch (error) {
    return next(error);
  }
};
const putPBD = async (req, res, next) => {
  const {
    adharcardFrontImage,
    adharcardBackImage,
    Cheque,
    panCard,
    ...allData
  } = req.body;
  let myImagesObj = {};
  if (req?.files) {
    const myImages = Object.keys(req.files);
    await myImages.forEach((ele) => {
      if (ele == "adharcardFrontImage" || ele == "adharcardBackImage") {
        myImagesObj[ele] = `/images/adharcard/${req?.files[ele][0]?.filename}`;
      } else {
        myImagesObj[ele] = `/images/${ele}/${req?.files[ele][0]?.filename}`;
      }
    });
  }

  try {
    const data = await BankDetailsForPortal.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...allData,
          ...myImagesObj,
        },
      },
      { new: true }
    );

    return res.status(200).json({
      success: true,
      message: "Updated Successful",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

const deletePBD = async (req, res, next) => {
  try {
    await BankDetailsForPortal.findByIdAndDelete(req.params.id);
    res.status(200).json({ success: true, message: "Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const deleteImage = async (req, res, next) => {
  const { fieldName, id } = req.body;
  let query = {};
  query.$unset = {
    [fieldName]: "",
  };
  try {
    const data = await BankDetailsForPortal.findByIdAndUpdate(id, query, {
      new: true,
    });
    const imageuRL = data[fieldName];
    const imagePath = path.join(__dirname, `..${imageuRL}`);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    res
      .status(200)
      .json({ success: true, message: "Image Deleted Successfully", data });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  PostPBD,
  putPBD,
  getPBDForPos,
  deletePBD,
  deleteImage,
  getPBDForPosbyName,
};
