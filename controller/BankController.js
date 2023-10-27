const BankSchema = require("../modal/BankSchema");
const ReceiptSchema = require("../modal/ReceiptSchema");
const PaymentListSchema = require("../modal/PaymentListSchema");
const ErrorHandler = require("../util/handleError");
const { CreateOpeningBalance, DeletedOpeningBalance } = require("../util/UseFullFunctions");

const getBank = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await BankSchema.find(
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

    const results = await BankSchema.find(
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
      .populate({
        path: "Branch",
        select: "BranchName BranchCode",
      })
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
const postBank = async (req, res, next) => {
  try {
    const data = await BankSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "Bank Created Successfully",
    });
    let { Balance } = data;
    CreateOpeningBalance({ _id: data._id, Amount: Balance });
  } catch (error) {
    return next(error);
  }
};
const putBank = async (req, res, next) => {
  try {
  const data =  await BankSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    let { Balance } = data;

    await DeletedOpeningBalance({ _id: req.params.id });

    await  CreateOpeningBalance({ _id: req.params.id, Amount: Balance });
    // let { Balance } = req.body;
    // CreateOpeningBalance({ _id: req.params.id, Amount: Balance });
    return res.status(200).json({
      success: true,
      message: "Bank Updated Successful",
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const deleteBank = async (req, res, next) => {
  try {
    const Receipt = await ReceiptSchema.findOne({
      CashBankAccount: req.params.id,
    });
    if (Receipt) {
      return next(
        new ErrorHandler(
          `Data used in another Receipt table so you can not delete`,
          400
        )
      );
    }
    const PaymentList = await PaymentListSchema.findOne({
      CashBankAccount: req.params.id,
    });
    if (PaymentList) {
      return next(
        new ErrorHandler(
          `Data used in another PaymentList table so you can not delete`,
          400
        )
      );
    }

    await BankSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Bank Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getBankByUs = async (req, res, next) => {
  try {
    const data = await BankSchema.find(
      {},
      {
        Name: 1,
        _id: 1,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Bank Updated Successful",
      data,
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getBank,
  postBank,
  putBank,
  deleteBank,
  getBankByUs,
};
