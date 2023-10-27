const PaymentListSchema = require("../modal/PaymentListSchema");
const GeneralVoucherSchema = require("../modal/GeneralVoucherSchema");
const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const getGeneralVoucher = async (req, res, next) => {
  try {
    const { page = 1, limit = 100, StartDate, EndDate } = req.query;

    const totalDocs = await GeneralVoucherSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    }).countDocuments();

    const GeneralVoucher = await GeneralVoucherSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ EntryDate: 1 })
      .populate({
        path: "GeneralVoucher.PartyAccount",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "GeneralVoucher.LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "GeneralVoucher.Employee",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "GeneralVoucher.Broker",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "GeneralVoucher.Banks",
        select: "Name", //"Name Email"
      });

    res.status(200).json({
      success: true,
      message: "Fetched Successfully GeneralVoucher",
      data: GeneralVoucher,
      totalDocs,
    });
  } catch (error) {
    console.log(error, "error");
    return next(error);
  }
};
const postGeneralVoucher = async (req, res, next) => {
  try {
   
    const data = await GeneralVoucherSchema.create(req.body);

    const CRID = data.GeneralVoucher.filter(
      (element) => element.IsCrDr === "CR"
    )[0];
    const DRID = data.GeneralVoucher.filter(
      (element) => element.IsCrDr === "DR"
    )[0];

    console.log("check this", CRID, DRID);
    let CR_FIRST;
    let DR_FIRST;

    if (CRID.From === "Broker") {
      CR_FIRST = CRID.Broker;
    }

    if (CRID.From === "POS") {
      CR_FIRST = CRID.PartyAccount;
    }

    if (CRID.From === "LedgerGroup") {
      CR_FIRST = CRID.LedgerEntry;
    }
    if (DRID.From === "Broker") {
      DR_FIRST = CRID.Broker;
    }

    if (DRID.From === "POS") {
      DR_FIRST = CRID.PartyAccount;
    }

    if (DRID.From === "LedgerGroup") {
      DR_FIRST = CRID.LedgerEntry;
    }

    // if (LedgerEntry) {
    //   id = LedgerEntry;
    // }
    // if (PartyAccount) {
    //   id = PartyAccount;
    // }
    // if (Broker) {
    //   id = Broker;
    // }

    await data.GeneralVoucher.forEach(async (element) => {
      let { PartyAccount, LedgerEntry, Broker, DR, CR, IsCrDr ,Employee} = element;

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
        VoucherType: "Journal Voucher",
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Ledger: id, // RAVI
        oppositeLedger: IsCrDr === "CR" ? DR_FIRST : CR_FIRST, // HDFC
        RefNumber: element.RefNumber,
        Remark: element.Remark,
        // DR,
        // CR,
        Amount:
          IsCrDr === "CR"
            ? -Math.abs(element.Account)
            : Math.abs(element.Account),
        // Amount:  -Math.abs(element.Account),
      };

      await AccountancySchema.create(AccountancyCR);
    });

    res.status(200).json({
      success: true,
      message: "Journal Voucher Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putGeneralVoucher = async (req, res, next) => {
  try {
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    const data = await GeneralVoucherSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    const CRID = data.GeneralVoucher.filter(
      (element) => element.IsCrDr === "CR"
    )[0];
    const DRID = data.GeneralVoucher.filter(
      (element) => element.IsCrDr === "DR"
    )[0];

    let CR_FIRST;
    let DR_FIRST;

    if (CRID.From === "Broker") {
      CR_FIRST = CRID.Broker;
    }

    if (CRID.From === "POS") {
      CR_FIRST = CRID.PartyAccount;
    }

    if (CRID.From === "LedgerGroup") {
      CR_FIRST = CRID.LedgerEntry;
    }

    if (DRID.From === "Broker") {
      console.log("chekc this dr", CRID.Broker);
      DR_FIRST = DRID.Broker;
    }

    if (DRID.From === "POS") {
      DR_FIRST = DRID.PartyAccount;
    }

    if (DRID.From === "LedgerGroup") {
      DR_FIRST = DRID.LedgerEntry;
    }

    // if (LedgerEntry) {
    //   id = LedgerEntry;
    // }
    // if (PartyAccount) {
    //   id = PartyAccount;
    // }
    // if (Broker) {
    //   id = Broker;
    // }


    await data.GeneralVoucher.forEach(async (element) => {
      let { PartyAccount, LedgerEntry, Broker, DR, CR, IsCrDr } = element;

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

      const AccountancyCR = {
        VoucherType: "Journal Voucher",
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Ledger: id, // RAVI
        oppositeLedger: IsCrDr === "CR" ? DR_FIRST : CR_FIRST, // HDFC
        RefNumber: element.RefNumber,
        Remark: element.Remark,
        // DR,
        // CR,
        Amount:
          IsCrDr === "CR"
            ? -Math.abs(element.Account)
            : Math.abs(element.Account),
        // Amount:  -Math.abs(element.Account),
      };

      await AccountancySchema.create(AccountancyCR);
    });
    res.status(200).json({
      success: true,
      message: "Journal Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteGeneralVoucher = async (req, res, next) => {
  try {
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    await GeneralVoucherSchema.findByIdAndDelete(req.params.id);
    //
    return res
      .status(200)
      .json({ success: true, message: "GeneralVoucher Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getLedger = async (req, res, next) => {
  try {
    // 6470485aebe5a93871211410 => POS ID
    const { StartDate, Ledger, EndDate, isBank = false } = req.query;
    let GeneralVoucher;
    let payment;
    if (isBank) {
      GeneralVoucher = await GeneralVoucherSchema.aggregate([
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
                input: "$GeneralVoucher",
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
      GeneralVoucher = await GeneralVoucherSchema.aggregate([
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
          $unwind: "$GeneralVoucher", // marge multiple docs in one array of objects
        },
        {
          $lookup: {
            from: "pos",
            localField: "GeneralVoucher.PartyAccount",
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
            // GeneralVoucher: 1,
            ledger: {
              Name: 1,
              Email: 1,
              BankAccountNo: 1,
              Name: 1,
              IFSC: 1,
              Amount: "$GeneralVoucher.Account",
              RefNumber: "$GeneralVoucher.RefNumber",
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
      data: [...GeneralVoucher, ...payment],
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getGeneralVoucher,
  postGeneralVoucher,
  putGeneralVoucher,
  deleteGeneralVoucher,
  getLedger,
};
