const AccountancySchema = require("../modal/AccountancySchema");
const PaymentListSchema = require("../modal/PaymentListSchema");

const getPaymentList = async (req, res, next) => {
  try {
    const { page = 1, limit = 100, StartDate, EndDate } = req.query;
    const totalDocs = await PaymentListSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    }).countDocuments();

    const PaymentList = await PaymentListSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ EntryDate: 1 })
      .populate({
        path: "PaymentList.PartyAccount",
        select: "Name Email Salutation LastName MiddleName Mobile",
      })
      .populate({
        path: "PaymentList.TDSAccount",
        select: "Name",
      })
      .populate({
        path: "PaymentList.Employee",
        select: "Name Email Salutation LastName MiddleName MobileNumber",
      })
      .populate({
        path: "PaymentList.TDSAccount",
        select: "Name",
      })
      .populate({
        path: "CashBankAccount",
        select: "Name AccountNumber",
      })
      .populate({
        path: "LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "PaymentList.LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "PaymentList.Broker",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "PaymentList.BankDetail",
        select: "Name IFSC BankAccountNo", //"Name Email"
      });

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: PaymentList,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postPaymentList = async (req, res, next) => {
  try {
    console.log(JSON.stringify(req.body), "req.bodyreq.body)");
    const data = await PaymentListSchema.create(req.body);
    let { CashBankAccount, LedgerEntry } = req.body;

    let dataId;
    if (LedgerEntry) {
      dataId = LedgerEntry;
    }
    if (CashBankAccount) {
      dataId = CashBankAccount;
    }
    await data.PaymentList.forEach(async (element) => {
      let {
        PartyAccount,
        LedgerEntry,
        Broker,
        Employee,
        TDSAmount = 0,
        TDSAccount,
      } = element;

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
        VoucherType: data?.voucherType,
        CreatedWhich: data?._id,
        EntryDate: data.EntryDate,
        Ledger: id, // RAVI
        oppositeLedger: dataId, // HDFC
        RefNumber: element?.RefNumber,
        Remark: element.Remark,
        // DR: element?.Account,
        // CR: 0,
        Amount: Math.abs(element.Account - TDSAmount),
      };
      const AccountancyDR = {
        VoucherType: data?.voucherType,
        CreatedWhich: data?._id,
        EntryDate: data.EntryDate,
        Ledger: dataId, // HDFC
        oppositeLedger: id, // RAVI
        RefNumber: element?.RefNumber,
        Remark: element.Remark,
        // DR: 0,
        // CR: element?.Account,
        Amount: -Math.abs(element.Account - TDSAmount),
      };
      if (TDSAccount && TDSAmount > 0) {
        let AccountancyCR1 = {
          VoucherType: data?.voucherType,
          CreatedWhich: data?._id,
          EntryDate: data.EntryDate,
          Ledger: id, // RAVI
          oppositeLedger: TDSAccount, // HDFC
          RefNumber: element?.RefNumber,
          Remark: element.Remark,
          // DR: element?.Account,
          // CR: 0,
          Amount: Math.abs(TDSAmount),
        };
        let AccountancyDR1 = {
          VoucherType: data?.voucherType,
          CreatedWhich: data?._id,
          EntryDate: data.EntryDate,
          Ledger: TDSAccount, // HDFC
          oppositeLedger: id, // RAVI
          RefNumber: element?.RefNumber,
          Remark: element.Remark,
          // DR: 0,
          // CR: element?.Account,
          Amount: -Math.abs(TDSAmount),
        };
        await AccountancySchema.create(AccountancyCR1);
        await AccountancySchema.create(AccountancyDR1);
      }
      await AccountancySchema.create(AccountancyCR);
      await AccountancySchema.create(AccountancyDR);
    });
    res.status(200).json({
      success: true,
      message: "PaymentList Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putPaymentList = async (req, res, next) => {
  try {
    let { CashBankAccount, LedgerEntry } = req.body;
    console.log(JSON.stringify(req.body), "req.bodyreq.body)");
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

    const data = await PaymentListSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
        ...unSet,
      },
      { new: true }
    );
    await data.PaymentList.forEach(async (element) => {
      let {
        PartyAccount,
        LedgerEntry,
        Broker,
        Employee,
        TDSAmount = 0,
        TDSAccount,
      } = element;

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
        VoucherType: data?.voucherType,
        CreatedWhich: data?._id,
        EntryDate: data.EntryDate,
        Ledger: id, // RAVI
        oppositeLedger: dataId, // HDFC
        RefNumber: element?.RefNumber,
        Remark: element.Remark,
        // DR: element?.Account,
        // CR: 0,
        Amount: Math.abs(element.Account - TDSAmount),
      };
      const AccountancyDR = {
        VoucherType: data?.voucherType,
        CreatedWhich: data?._id,
        EntryDate: data.EntryDate,
        Ledger: dataId, // HDFC
        oppositeLedger: id, // RAVI
        RefNumber: element?.RefNumber,
        Remark: element.Remark,
        // DR: 0,
        // CR: element?.Account,
        Amount: -Math.abs(element.Account - TDSAmount),
      };

      if (TDSAccount && TDSAmount > 0) {
        let AccountancyCR1 = {
          VoucherType: data?.voucherType,
          CreatedWhich: data?._id,
          EntryDate: data.EntryDate,
          Ledger: id, // RAVI
          oppositeLedger: TDSAccount, // HDFC
          RefNumber: element?.RefNumber,
          Remark: element.Remark,
          // DR: element?.Account,
          // CR: 0,
          Amount: Math.abs(TDSAmount),
        };
        let AccountancyDR1 = {
          VoucherType: data?.voucherType,
          CreatedWhich: data?._id,
          EntryDate: data.EntryDate,
          Ledger: TDSAccount, // HDFC
          oppositeLedger: id, // RAVI
          RefNumber: element?.RefNumber,
          Remark: element.Remark,
          // DR: 0,
          // CR: element?.Account,
          Amount: -Math.abs(TDSAmount),
        };
        await AccountancySchema.create(AccountancyCR1);
        await AccountancySchema.create(AccountancyDR1);
      }
      await AccountancySchema.create(AccountancyCR);
      await AccountancySchema.create(AccountancyDR);
    });
    res.status(200).json({
      success: true,
      message: "PaymentList Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deletePaymentList = async (req, res, next) => {
  try {
    // const PayoutGrid = await PayoutGridSchema.findOne({
    //   PaymentList: { $in: req.params.id },
    // });
    // const Policy = await PolicySchema.findOne({
    //   PaymentList: req.params.id,
    // });

    // if (Policy) {
    //   return next(
    //     new ErrorHandler(
    //       `Data used in another Policy table so you can not delete`,
    //       400
    //     )
    //   );
    // }
    // if (PayoutGrid) {
    //   return next(
    //     new ErrorHandler(
    //       `Data used in another PayoutGrid table so you can not delete`,
    //       400
    //     )
    //   );
    // }
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    await PaymentListSchema.findByIdAndDelete(req.params.id);
    return res
      .status(200)
      .json({ success: true, message: "PaymentList Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getPaymentList,
  postPaymentList,
  putPaymentList,
  deletePaymentList,
};
