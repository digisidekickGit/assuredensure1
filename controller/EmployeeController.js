const EmployeeSchema = require("../modal/EmployeeSchema");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");
const { ObjectId } = require("mongodb");
const {
  removeObjectEmptyValues,
  generateOTP,
} = require("../util/UseFullFunctions");
const { mailOtpMail } = require("../util/nodeMailer");


const getEmployee = async (req, res, next) => {
  try {
    const Employee = await EmployeeSchema.find({});
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Employee,
    });
  } catch (error) {
    return next(error);
  }
};

const selectBoxDropdown = async (req, res, next) => {
  try {
    const Employee = await EmployeeSchema.find(
      {},
      { Salutation: 1, Name: 1, MiddleName: 1, LastName: 1 }
    );
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Employee,
    });
  } catch (error) {
    return next(error);
  }
};
const GetPopulate = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await EmployeeSchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    ).countDocuments();
    const Employee = await EmployeeSchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    )
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("Branch", "BranchName BranchCode")
      .populate("ReportingTo", "Salutation Name MiddleName LastName");

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Employee,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postEmployee = async (req, res, next) => {
  const {
    profilePic,
    adharcardFrontImage,
    adharcardBackImage,
    Cheque,
    panCard,
    MarkSheet,
    Contract,
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

  const newAllData = removeObjectEmptyValues(allData);

  try {
    const totalDocs = await EmployeeSchema.find({}).countDocuments();
    await EmployeeSchema.create({
      EmployeeCode: `EMP${100 + totalDocs}`,
      ...newAllData,
      ...myImagesObj,
    });
    res.status(200).json({
      success: true,
      message: "Employee Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putEmployee = async (req, res, next) => {
  const {
    profilePic,
    adharcardFrontImage,
    adharcardBackImage,
    Cheque,
    panCard,
    MarkSheet,
    Contract,
    ReportingTo,
    Branch,
    Permission,
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

  const newAllData = {};

  let query = {};

  query.$unset = {};
  ReportingTo
    ? (newAllData["ReportingTo"] = ReportingTo)
    : (query.$unset["ReportingTo"] = "");

  Permission
    ? (newAllData["Permission"] = Permission)
    : (query.$unset["Permission"] = "");

  Branch ? (newAllData["Branch"] = Branch) : (query.$unset["Branch"] = "");

  query.$set = { ...allData, ...newAllData, ...myImagesObj };
  try {
    await EmployeeSchema.findByIdAndUpdate(req.params.id, query, { new: true });
    res.status(200).json({
      success: true,
      message: "Employee Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await EmployeeSchema.findOne({
      ReportingTo: req.params.id,
    });

    if (employee) {
      return res.status(200).json({
        success: true,
        message: "Employee Assign As Reporting manager so you can not delete ",
      });
    }

    await EmployeeSchema.findByIdAndDelete(req.params.id);

    res
      .status(200)
      .json({ success: true, message: "Employee Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};
const singleEmployee = async (req, res, next) => {
  try {
    const data = await EmployeeSchema.findOne(
      { _id: req.user },
      {
        Email: 1,
        Permission: 1,
        ForceLogout: 1,
      }
    ).populate("Permission");
    if (!data) {
      return res.status(401).json({
        success: false,
        message: "Not Authorized",
      });
    }
    // refreshing the Token
    if (data?.ForceLogout) {
      const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };

      await EmployeeSchema.findByIdAndUpdate(data._id, {
        $set: {
          ForceLogout: false,
        },
      }).populate("Permission");
      const token = jwt.sign(
        {
          id: data._id,
          Read: data?.Permission?.Read ?? true,
          Create: data?.Permission?.Create ?? false,
          Edit: data?.Permission?.Edit ?? false,
          Delete: data?.Permission?.Delete ?? false,
          Download: data?.Permission?.Download ?? false,
          isAdmin: false,
          isEmployee: true,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3d" }
      );
      return res.status(200).cookie(`token`, token, options).json({
        success: true,
        user: data,
      });
    }

    return res.status(200).json({
      success: true,
      user: data,
    });
  } catch (error) {
    return next(error);
  }
};
const EmployeeLogin = async (req, res, next) => {
  const { PhoneNumber } = req.body;

  const OTP = generateOTP() 
  try {
    const user = await EmployeeSchema.findOneAndUpdate(
      { MobileNumber: Number(PhoneNumber) },
      {
        OTP: OTP,
      }
    );

    if (!user?.Email) {
      return res
        .status(401)
        .json({ success: false, message: "Employee Not Exist" });
    }
   let mailLog = await mailOtpMail(user.Email, "OTP Verification", OTP);

    return res.status(200).json({
      success: true,
      message: `Otp send successful On ${user.Email}`,
      user: user,
    });
  } catch (error) {
    return next(error);
  }
};

const ValidateLogin = async (req, res, next) => {
  const { OTP, _id } = req.body;
  try {
    const options = {
      expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };
    const user = await EmployeeSchema.findById(ObjectId(_id), {
      OTP: 1,
    }).populate("Permission");
    if (!user) {
      res.status(200).json({ success: false, message: "Employee Not Exist" });
      return;
    }
    if (user.OTP !== Number(OTP)) {
      return res.status(401).json({ success: false, message: "Invalid OTP" });
    }
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
          Read: user?.Permission?.Read ?? true,
          Create: user?.Permission?.Create ?? false,
          Edit: user?.Permission?.Edit ?? false,
          Delete: user?.Permission?.Delete ?? false,
          Download: user?.Permission?.Download ?? false,
          isAdmin: false,
          isEmployee: true,
          isPos: false,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "90d" }
      );
      const { Password, ...others } = user._doc;
      return res
        .status(200)
        .cookie(`token`, token, options)
        .json({
          success: true,
          message: "Login successful",
          user: { ...others },
        });
    } else {
      return res
        .status(200)
        .json({ success: false, message: "Wrong Username or Password" });
    }
  } catch (error) {
    return next(error);
  }
};

const Logout = async (req, res, next) => {
  try {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    res.status(200).cookie(`token`, null, options).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteImage = async (req, res, next) => {
  const { fieldName, id } = req.body;

  let query = {};

  query.$unset = {
    [fieldName]: "",
  };

  try {
    const data = await EmployeeSchema.findByIdAndUpdate(id, query);
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

module.exports = {
  getEmployee,
  postEmployee,
  putEmployee,
  deleteEmployee,
  GetPopulate,
  singleEmployee,
  EmployeeLogin,
  deleteImage,
  selectBoxDropdown,
  ValidateLogin,
  Logout,
};
