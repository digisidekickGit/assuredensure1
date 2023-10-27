const PaymentListSchema = require("../modal/PaymentListSchema");
const ReceiptSchema = require("../modal/ReceiptSchema");
const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const getReceipt = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 3000,
      // inputData,
      StartDate,
      EndDate,
      // ...restData
    } = req.query;

    // const que = {};

    // if (inputData) {
    //   que["$or"] = [
    //     {
    //       Remark: { $regex: inputData, $options: "i" },
    //     },
    //   ];
    // }
    const totalDocs = await ReceiptSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
      // ...que,
    }).countDocuments();

    const Receipt = await ReceiptSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
      // ...que,
    })
      .skip((page - 1) * limit)
      .sort({ EntryDate: 1 })
      .limit(limit)
      .populate({
        path: "Receipt.PartyAccount",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Receipt.LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Receipt.Employee",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Receipt.Broker",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Receipt.Banks",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "CashBankAccount",
        select: "Name",
      })
      .populate({
        path: "LedgerEntry",
        select: "Name", //"Name Email"
      })
      

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Receipt,
      totalDocs,
    });
  } catch (error) {
    console.log(error, "error");
    return next(error);
  }
};
const postReceipt = async (req, res, next) => {
  try {

    const data = await ReceiptSchema.create(req.body);
    let { CashBankAccount, LedgerEntry } = req.body;

    let dataId;
    if (LedgerEntry) {
      dataId = LedgerEntry;
    }
    if (CashBankAccount) {
      dataId = CashBankAccount;
    }
    await data.Receipt.forEach(async (element) => {
      let { PartyAccount, LedgerEntry, Broker ,Employee} = element;

      let id;
      if (LedgerEntry) {
        id = LedgerEntry;
      }
      if (PartyAccount) {
        id = PartyAccount;
      }
      if (Broker) {
        id = Broker;
      }
      if (Employee) {
        id = Employee;
      }

      const AccountancyCR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Ledger: id, // RAVI
        oppositeLedger: dataId, // HDFC
        RefNumber: element.RefNumber,
        Remark: element.Remark,
        // DR: 0,
        // CR: element.Account,
        Amount: -Math.abs(element.Account),
      };
      const AccountancyDR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,

        Ledger: dataId, // HDFC
        oppositeLedger: id, // RAVI
        RefNumber: element.RefNumber, // HDFC
        Remark: element.Remark,
        // DR: element.Account,
        // CR: 0,
        Amount: Math.abs(element.Account),
      };
      await AccountancySchema.create(AccountancyCR);
      await AccountancySchema.create(AccountancyDR);
    });

    res.status(200).json({
      success: true,
      message: "Receipt Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putReceipt = async (req, res, next) => {
  try {
    let { CashBankAccount, LedgerEntry } = req.body;
    let dataId;
    let unSet;
    if (LedgerEntry) {
      dataId = LedgerEntry;
      unSet = {
        $unset: {
          CashBankAccount: 1,
        },
      };
    }
    if (CashBankAccount) {
      dataId = CashBankAccount;
      unSet = {
        $unset: {
          LedgerEntry: 1,
        },
      };
    }
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });

   
    const data = await ReceiptSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        ...unSet,
      },
      { new: true }
    );
    await data.Receipt.forEach(async (element) => {
      let { PartyAccount, LedgerEntry, Broker, Banks } = element;

      let id;
      if (LedgerEntry) {
        id = LedgerEntry;
      }
      if (PartyAccount) {
        id = PartyAccount;
      }
      if (Broker) {
        id = Broker;
      }
      if (Banks) {
        id = Banks;
      }

      const AccountancyCR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Ledger: id, // RAVI
        oppositeLedger: dataId, // HDFC
        RefNumber: element.RefNumber,
        Remark: element.Remark,
        // DR: 0,
        // CR: element.Account,
        Amount: -Math.abs(element.Account),
      };
      const AccountancyDR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,

        Ledger: dataId, // HDFC
        oppositeLedger: id, // RAVI
        RefNumber: element.RefNumber, // HDFC
        Remark: element.Remark,
        // DR: element.Account,
        // CR: 0,
        Amount: Math.abs(element.Account),
      };
      await AccountancySchema.create(AccountancyCR);
      await AccountancySchema.create(AccountancyDR);
    });
    res.status(200).json({
      success: true,
      message: "Receipt Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteReceipt = async (req, res, next) => {
  try {
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    await ReceiptSchema.findByIdAndDelete(req.params.id);
    //
    return res
      .status(200)
      .json({ success: true, message: "Receipt Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getLedger = async (req, res, next) => {
  try {
    // 6470485aebe5a93871211410 => POS ID
    const { StartDate, Ledger, EndDate, isBank = false } = req.query;
    let Receipt;
    let payment;
    if (isBank) {
      Receipt = await ReceiptSchema.aggregate([
        {
          $match: {
            // EntryDate: {
            //   $gte: StartDate,
            //   $lte: EndDate,
            // },
          },
        },
        {
          $project: {
            // createdAt: 1,
            _id: 1,
            EntryDate: 1,
            CashBankAccount: 1,
            Remark: 1,
            voucherType: 1,
            ledger: {
              $filter: {
                input: "$Receipt",
                as: "act",
                cond: {
                  $eq: [`$$act.PartyAccount`, ObjectId(Ledger)],
                },
              },
            },
          },
        },
        {
          $unwind: "$ledger", // marge multiple docs in one array of objects
        },
        {
          $lookup: {
            from: "banks",
            localField: "CashBankAccount",
            foreignField: "_id",
            as: "CashBankAccount",
          },
        },
        {
          $unwind: "$CashBankAccount", // marge multiple docs in one array of objects
        },
      ]);
      payment = await PaymentListSchema.aggregate([
        {
          $match: {
            EntryDate: {
              $gte: StartDate,
              $lte: EndDate,
            },
          },
        },
        {
          $project: {
            // createdAt: 1,
            _id: 1,
            EntryDate: 1,
            CashBankAccount: 1,
            Remark: 1,
            voucherType: 1,
            ledger: {
              $filter: {
                input: "$PaymentList",
                as: "act",
                cond: {
                  $eq: [`$$act.PartyAccount`, ObjectId(Ledger)],
                },
              },
            },
          },
        },
        {
          $unwind: "$ledger", // marge multiple docs in one array of objects
        },
        {
          $lookup: {
            from: "banks",
            localField: "CashBankAccount",
            foreignField: "_id",
            as: "CashBankAccount",
          },
        },
        {
          $unwind: "$CashBankAccount", // marge multiple docs in one array of objects
        },
      ]);
    } else {
      Receipt = await ReceiptSchema.aggregate([
        {
          $match: {
            // EntryDate: {
            //   $gte: StartDate,
            //   $lte: EndDate,
            // },
            // CashBankAccount: Ledger,
          },
        },
        {
          $unwind: "$Receipt", // marge multiple docs in one array of objects
        },
        {
          $lookup: {
            from: "pos",
            localField: "Receipt.PartyAccount",
            foreignField: "_id",
            as: "ledger",
          },
        },
        {
          $unwind: "$ledger", // marge multiple docs in one array of objects
        },
        {
          $project: {
            // createdAt: 1,
            _id: 1,
            EntryDate: 1,
            CashBankAccount: 1,
            Remark: 1,
            voucherType: 1,
            // Receipt: 1,
            ledger: {
              Name: 1,
              Email: 1,
              BankAccountNo: 1,
              Name: 1,
              IFSC: 1,
              Amount: "$Receipt.Account",
              RefNumber: "$Receipt.RefNumber",
              // PartyAccount
            },
          },
        },
      ]);
      payment = await PaymentListSchema.aggregate([
        {
          $match: {
            // EntryDate: {
            //   $gte: StartDate,
            //   $lte: EndDate,
            // },
            // CashBankAccount: Ledger,
          },
        },
        {
          $unwind: "$PaymentList", // marge multiple docs in one array of objects
        },

        {
          $lookup: {
            from: "pos",
            localField: "PaymentList.PartyAccount",
            foreignField: "_id",
            as: "ledger",
          },
        },
        {
          $unwind: "$ledger", // marge multiple docs in one array of objects
        },
        {
          $project: {
            // createdAt: 1,
            _id: 1,
            EntryDate: 1,
            CashBankAccount: 1,
            Remark: 1,
            voucherType: 1,
            ledger: {
              Name: 1,
              Email: 1,
              BankAccountNo: 1,
              Name: 1,
              IFSC: 1,
              Amount: "$PaymentList.Account",
              RefNumber: "$PaymentList.RefNumber",
            },
            // PartyAccount
          },
        },
      ]);
    }

    res.status(200).json({
      success: true,
      message: "get Ledger",
      data: [...Receipt, ...payment],
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getReceipt,
  postReceipt,
  putReceipt,
  deleteReceipt,
  getLedger,
};
