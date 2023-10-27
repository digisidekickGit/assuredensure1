const InsuranceCompanySchema = require("../modal/InsuranceCompanySchema");
const ErrorHandler = require("../util/handleError");
const PayoutGridSchema = require("../modal/PayoutGridModal");
const PolicySchema = require("../modal/PolicySchema");
const RtoGroupCheckerSchema = require("../modal/RtoGroupCheckerSchema");
const { ObjectId } = require("mongodb");
const fs = require("fs");
const path = require("path");
const getInsuranceCompany = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;
    const totalDocs = await InsuranceCompanySchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
              {
                Email: { $regex: inputData, $options: "i" },
              },
              {
                Number: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    ).countDocuments();
    const InsuranceCompany = await InsuranceCompanySchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
              {
                Email: { $regex: inputData, $options: "i" },
              },
              {
                Number: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    )
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully getInsuranceCompany",
      data: InsuranceCompany,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postInsuranceCompany = async (req, res, next) => {
  try {
    const { Name, CompanyLogo, ...rest } = req.body;

    const Logo = `/images/CompanyLogo/${req?.file?.filename}`;

    if (Logo) {
      rest["Logo"] = Logo;
    }

    const InsuranceName = await InsuranceCompanySchema.findOne({
      Name,
    });

    if (InsuranceName) {
      return next(
        new ErrorHandler("Insurance Company Name is already registered", 400)
      );
    }

    await InsuranceCompanySchema.create({ ...rest, Name });
    res.status(200).json({
      success: true,
      message: "Insurance Company Created Successfully",
    });
  } catch (error) {
    console.log(error, "error");
    return next(error);
  }
};
const putInsuranceCompany = async (req, res, next) => {
  try {
    const { Name, CompanyLogo, ...rest } = req.body;

    const Logo = `/images/CompanyLogo/${req?.file?.filename}`;
    if (req?.file?.filename) {
      rest["Logo"] = Logo;
    }

    const data = await InsuranceCompanySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: { ...rest, Name },
      },
      { new: false }
    );

    if (req?.file?.filename) {
      if (data?.Logo) {
        const imagePath = path.join(__dirname, `..${data.Logo}`);
        if (fs.existsSync(imagePath)) {
          fs.unlinkSync(imagePath);
        }
      }
    }

    return res.status(200).json({
      success: true,
      message: "InsuranceCompany Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteInsuranceCompany = async (req, res, next) => {
  const { id } = req.params;
  try {
    const PayoutGrid = await PayoutGridSchema.findOne({
      InsuranceCompany: ObjectId(id),
    });
    if (PayoutGrid) {
      return next(
        new ErrorHandler(
          `Data used in another PayoutGrid table so you can not delete`,
          400
        )
      );
    }
    const Policy = await PolicySchema.findOne({
      InsuranceCompany: ObjectId(id),
    });

    if (Policy) {
      return next(
        new ErrorHandler(
          `Data used in another Policy table so you can not delete`,
          400
        )
      );
    }
    const RtoGroup = await RtoGroupCheckerSchema.findOne({
      InsuranceCompany: ObjectId(id),
    });

    if (RtoGroup) {
      return next(
        new ErrorHandler(
          `Data used in  RtoGroup table so you can not delete`,
          400
        )
      );
    }

    const data = await InsuranceCompanySchema.findByIdAndDelete(req.params.id);

    if (data?.Logo) {
      const imagePath = path.join(__dirname, `..${data.Logo}`);

      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    res.status(200).json({
      success: true,
      message: "Insurance Company Deleted Successfully",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getInsuranceCompany,
  postInsuranceCompany,
  putInsuranceCompany,
  deleteInsuranceCompany,
};
