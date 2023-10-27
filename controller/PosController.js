const PosSchema = require("../modal/PosSchema");
const ReceiptSchema = require("../modal/ReceiptSchema");
const PolicySchema = require("../modal/PolicySchema");
const PaymentListSchema = require("../modal/PaymentListSchema");
const { ObjectId } = require("mongodb");
const BankDetailsForPortal = require("../modal/BankDetailsForPortalSchema");
const fs = require("fs");
const path = require("path");
const ErrorHandler = require("../util/handleError");
const {
  generateOTP,
  CreateOpeningBalance,
  DeletedOpeningBalance,
} = require("../util/UseFullFunctions");

const jwt = require("jsonwebtoken");
const { mailOtpMail } = require("../util/nodeMailer");
const getPos = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000 } = req.query;
    const totalDocs = await PosSchema.find({}).countDocuments();
    const Pos = await PosSchema.find({})
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ Code: 1 });

    // Pos.forEach(async (ele) => {
    //   let Opening = ele.OpeningBalance ?? 0;
    //   let myBalance = Opening * -1;
    //   console.log(myBalance, "myBalance");

    //   await DeletedOpeningBalance({ _id: ele._id });

    //   await CreateOpeningBalance({
    //     _id: ele._id,
    //     Amount: ele.OpeningBalance ?? 0,
    //     isPos: true,
    //   });
    // });
    console.log("Done");
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Pos,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};

const PostPos = async (req, res, next) => {
  const {
    profilePic,
    adharcardFrontImage,
    adharcardBackImage,
    Cheque,
    panCard,
    MarkSheet,
    ReferenceCriteria,
    Reference,
    BankDetails,
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

  if (Reference) {
    if (!ReferenceCriteria) {
      return res.status(500).json({
        success: false,
        message: "Reference Criteria Is Required",
      });
    }
    myImagesObj["Reference"] = ObjectId(Reference);
    myImagesObj["ReferenceCriteria"] = Number(ReferenceCriteria);
  }

  try {
    const totalDocs = await PosSchema.find({}).countDocuments();
    const data = await PosSchema.create({
      Code: `POS${100 + totalDocs}`,
      ...allData,
      ...myImagesObj,
    });

    await BankDetailsForPortal.updateMany(
      { _id: { $in: JSON.parse(BankDetails) } },
      { $set: { Pos: data._id } }
    );
    let { OpeningBalance } = data;
    CreateOpeningBalance({
      _id: data._id,
      Amount: OpeningBalance,
      isPos: true,
    });
    res.status(200).json({
      success: true,
      message: "Pos Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putPos = async (req, res, next) => {
  const {
    profilePic,
    panCard,
    adharcardFrontImage,
    adharcardBackImage,
    Cheque,
    MarkSheet,
    ReferenceCriteria,
    Reference,
    ...allData
  } = req.body;
  console.log(req.body, "check this one");
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
  if (Reference) {
    if (!ReferenceCriteria) {
      return res.status(500).json({
        success: false,
        message: "Reference Criteria Is Required",
      });
    }
    myImagesObj["Reference"] = ObjectId(Reference);
    myImagesObj["ReferenceCriteria"] = Number(ReferenceCriteria);
  }

  try {
    const data = await PosSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...allData,
          ...myImagesObj,
        },
      },
      { new: true }
    );

    if (!Reference) {
      await PosSchema.findByIdAndUpdate(req.params.id, {
        $unset: { Reference: "", ReferenceCriteria: "" },
      });
    }

    let { OpeningBalance } = data;

    await DeletedOpeningBalance({ _id: req.params.id });

    await CreateOpeningBalance({
      _id: req.params.id,
      Amount: OpeningBalance,
      isPos: true,
    });
    return res.status(200).json({
      success: true,
      message: "Pos Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const getPolicyByFilter = async (req, res, next) => {
  const {
    page = 1,
    limit = 3,
    // startDate,
    // endDate,
    ReportingTo,
    inputData,
    ...rest
  } = req.body;

  let que = { ...rest };

  if (inputData) {
    que.$or = [
      {
        Name: { $regex: inputData, $options: "i" },
      },
      {
        Email: { $regex: inputData, $options: "i" },
      },
      {
        Code: { $regex: inputData, $options: "i" },
      },
    ];
  }

  if (ReportingTo) {
    que["ReportingTo"] = ObjectId(ReportingTo);
  }

  try {
    const totalDocs = await PosSchema.find({
      // createdAt: {
      //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
      //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
      // },
      ...que,
    });
    const Data = await PosSchema.find({
      // createdAt: {
      //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
      //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
      // },
      ...que,
    })
      .populate("ReportingTo", "Salutation Name MiddleName LastName")
      .populate("Reference", "Salutation Name MiddleName LastName")
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ Code: 1 });

    res.status(200).json({
      success: true,
      message: "Fetched POS data ",
      data: Data,
      totalDocs: totalDocs.length,
    });
  } catch (error) {
    return next(error);
  }
};
const deletePos = async (req, res, next) => {
  const { id } = req.params;
  try {
    const Receipt = await ReceiptSchema.findOne({
      Receipt: {
        $elemMatch: {
          PartyAccount: id,
        },
      },
    });
    if (Receipt) {
      return next(
        new ErrorHandler(
          `Data used in Receipt Vouchers table so you can not delete`,
          400
        )
      );
    }
    const PaymentList = await PaymentListSchema.findOne({
      PaymentList: {
        $elemMatch: {
          PartyAccount: id,
        },
      },
    });
    if (PaymentList) {
      return next(
        new ErrorHandler(
          `Data used in PaymentList Vouchers table so you can not delete`,
          400
        )
      );
    }
    const InPos = await PosSchema.findOne({
      Reference: ObjectId(id),
    });

    if (InPos) {
      return next(
        new ErrorHandler(
          `Data used in Pos Reference By so you can not delete`,
          400
        )
      );
    }
    const InPolicy = await PolicySchema.findOne({
      POS: ObjectId(id),
    });
    if (InPolicy) {
      return next(
        new ErrorHandler(`Data used in Policy so you can not delete`, 400)
      );
    }

    await PosSchema.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Pos Deleted Successfully" });
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
    const data = await PosSchema.findByIdAndUpdate(id, query);
    const imageuRL = data[fieldName];
    const imagePath = path.join(__dirname, `..${imageuRL}`);
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }
    res
      .status(200)
      .json({ success: true, message: "Image Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getPosByField = async (req, res, next) => {
  const { showFiled } = req.body;
  try {
    const data = await PosSchema.find(
      {},
      {
        ...showFiled,
      }
    );
    res.status(200).json({ success: true, message: "Pos  data", data });
  } catch (error) {
    return next(error);
  }
};

const PosLogin = async (req, res, next) => {
  const { PhoneNumber } = req.body;

  const OTP = generateOTP();
  try {
    const POS = await PosSchema.findOneAndUpdate(
      { Mobile: Number(PhoneNumber) },
      {
        OTP: OTP,
      }
    );

    if (!POS?.Email) {
      return res
        .status(401)
        .json({ success: false, message: "User Not Exist " });
    }
    await mailOtpMail(POS.Email, "OTP Verification", OTP);

    return res.status(200).json({
      success: true,
      message: `Otp Send Successful`,
      user: POS,
    });
  } catch (error) {
    return next(error);
  }
};

const ValidateLoginForPos = async (req, res, next) => {
  const { OTP, _id } = req.body;
  try {
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    const user = await PosSchema.findById(ObjectId(_id));

    if (!user) {
      res.status(200).json({ success: false, message: "User Not Exist" });
      return;
    }

    if (user.OTP !== Number(OTP)) {
      return res.status(401).json({ success: false, message: "Invalid OTP" });
    }

    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
          whoIs: "POS",
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "90d" }
      );

      const { _doc } = user;
      return res.status(200).cookie(`posAuth`, token, options).json({
        success: true,
        message: "Login successful",
        user: _doc,
      });
    }
  } catch (error) {
    return next(error);
  }
};

const singlePos = async (req, res, next) => {
  try {
    const data = await PosSchema.findOne({ _id: req.user });

    if (!data) {
      return next(new ErrorHandler("Unauthorized", 401));
    }
    return res.status(200).json({
      success: true,
      user: data,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPos,
  PostPos,
  putPos,
  deletePos,
  getPosByField,
  deleteImage,
  getPolicyByFilter,
  PosLogin,
  ValidateLoginForPos,
  singlePos,
};
