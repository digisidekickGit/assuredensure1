const PaymentListSchema = require("../modal/PaymentListSchema");
const ContraSchema = require("../modal/ContraSchema");
const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const getContra = async (req, res, next) => {
  try {
    const { page = 1, limit = 100, StartDate, EndDate } = req.query;

    const totalDocs = await ContraSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    }).countDocuments();

    const Contra = await ContraSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ EntryDate: 1 })
      .populate({
        path: "CashBankAccount",
        select: "Name",
      })
      .populate({
        path: "LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Contra.PartyAccount",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Contra.LedgerEntry",
        select: "Name", //"Name Email"
      });
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: Contra,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postContra = async (req, res, next) => {
  try {

   
    const data = await ContraSchema.create(req.body);
    let { CashBankAccount, LedgerEntry } = req.body;
    let dataId;
    if (LedgerEntry) {
      dataId = LedgerEntry;
    }
    if (CashBankAccount) {
      dataId = CashBankAccount;
    }
    await data.Contra.forEach(async (element) => {
      let { PartyAccount, LedgerEntry } = element;

      let id;
      if (LedgerEntry) {
        id = LedgerEntry;
      }
      if (PartyAccount) {
        id = PartyAccount;
      }

      const AccountancyCR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Ledger: dataId, // RAVI
        oppositeLedger: id, // HDFC
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
        Ledger: id, // HDFC
        oppositeLedger: dataId, // RAVI
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
      message: "Contra Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putContra = async (req, res, next) => {
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
    const data = await ContraSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        ...unSet,
      },
      { new: true }
    );
    await data.Contra.forEach(async (element) => {
      let { PartyAccount, LedgerEntry } = element;

      let id;
      if (LedgerEntry) {
        id = LedgerEntry;
      }
      if (PartyAccount) {
        id = PartyAccount;
      }
      const AccountancyCR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Ledger: dataId, // RAVI
        oppositeLedger: id, // HDFC
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
        Ledger: id, // HDFC
        oppositeLedger: dataId, // RAVI
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
      message: "Contra Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteContra = async (req, res, next) => {
  try {
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    await ContraSchema.findByIdAndDelete(req.params.id);
    //
    return res
      .status(200)
      .json({ success: true, message: "Contra Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getContra,
  postContra,
  putContra,
  deleteContra,
};
