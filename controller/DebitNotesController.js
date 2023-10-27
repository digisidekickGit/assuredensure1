const PaymentListSchema = require("../modal/PaymentListSchema");
const DebitNotesSchema = require("../modal/DebitNotesSchema");
const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const getDebitNotes = async (req, res, next) => {
  try {
    const { page = 1, limit = 100, StartDate, EndDate } = req.query;
    console.log(StartDate, EndDate, "StartDate, EndDate");
    const totalDocs = await DebitNotesSchema.find({
      // EntryDate: {
      //   $gte: StartDate,
      //   $lte: EndDate,
      // },
    }).countDocuments();

    const DebitNotes = await DebitNotesSchema.find({
      // EntryDate: {
      //   $gte: StartDate,
      //   $lte: EndDate,
      // },
    })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ EntryDate: 1 })
      .populate({
        path: "DebitNotes.PartyAccount",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "DebitNotes.LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "DebitNotes.Broker",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "Broker",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "PartyAccount",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "LedgerEntry",
        select: "Name", //"Name Email"
      });

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: DebitNotes,
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const postDebitNotes = async (req, res, next) => {
  try {
    const data = await DebitNotesSchema.create(req.body);

    let { PartyAccount, LedgerEntry, Broker } = req.body;

    let dataId;
    if (LedgerEntry) {
      dataId = LedgerEntry;
    }
    if (PartyAccount) {
      dataId = PartyAccount;
    }
    if (Broker) {
      dataId = Broker;
    }

    await data.DebitNotes.forEach(async (element) => {
      let { PartyAccount, LedgerEntry, Broker } = element;

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
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Remark: data?.Remark ?? "",
        Ledger: id, // RAVI
        oppositeLedger:  dataId, // HDFC
        RefNumber: element.RefNumber,
        // DR: 0,
        // CR: element.Account,
        Amount: -Math.abs(element.Account),
      };
      const AccountancyDR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Remark: data.Remark,
        Ledger:dataId , // HDFC
        oppositeLedger: id,
        RefNumber: element.RefNumber, // HDFC
        // DR: element.Account,
        // CR: 0,
        Amount: Math.abs(element.Account),
      };
      await AccountancySchema.create(AccountancyCR);
      await AccountancySchema.create(AccountancyDR);
    });
    res.status(200).json({
      success: true,
      message: "DebitNotes Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putDebitNotes = async (req, res, next) => {
  try {
    let { PartyAccount, LedgerEntry, Broker } = req.body;

    let dataId;
    if (LedgerEntry) {
      dataId = LedgerEntry;
    }
    if (PartyAccount) {
      dataId = PartyAccount;
    }
    if (Broker) {
      dataId = Broker;
    }
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
  
    const data = await DebitNotesSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    try {
      await data.DebitNotes.forEach(async (element) => {
        let { PartyAccount, LedgerEntry, Broker } = element;

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
          VoucherType: data.voucherType,
          CreatedWhich: data._id,
          EntryDate: data.EntryDate,
          Remark: data?.Remark ?? "",
          Ledger:id , // RAVI
          oppositeLedger: dataId, // HDFC
          RefNumber: element.RefNumber,
          // DR: 0,
          // CR: element.Account,
          Amount: -Math.abs(element.Account),
        };
        const AccountancyDR = {
          VoucherType: data.voucherType,
          CreatedWhich: data._id,
          EntryDate: data.EntryDate,
          Remark: data.Remark,
          Ledger:dataId , // HDFC
          oppositeLedger: id, // RAVI
          RefNumber: element.RefNumber, // HDFC
          // DR: element.Account,
          // CR: 0,
          Amount: Math.abs(element.Account),
        };
        await AccountancySchema.create(AccountancyCR);
        await AccountancySchema.create(AccountancyDR);
      });
    } catch (error) {}

    res.status(200).json({
      success: true,
      message: "DebitNotes Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteDebitNotes = async (req, res, next) => {
  try {
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    await DebitNotesSchema.findByIdAndDelete(req.params.id);
    //
    return res
      .status(200)
      .json({ success: true, message: "DebitNotes Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getDebitNotesByPopulate = async (req, res, next) => {
  try {
    const {
      page = 1,
      limit = 3000,
      inputData = undefined,
      ...restData
    } = req.query;

    const Search = inputData
      ? {
          Remark: { $regex: inputData, $options: "i" },
        }
      : {};
    const data = await DebitNotesSchema.aggregate([
      {
        $match: Search,
      },
      // { $skip: 1 },
      // { $limit: 1 },
      {
        $unwind: "$DebitNotes",
      },
      {
        $lookup: {
          from: "ledgerentries",
          localField: "DebitNotes.PartyAccount",
          foreignField: "_id",
          as: "DebitNotes.PartyAccount1",
        },
      },
      {
        $lookup: {
          from: "pos",
          localField: "DebitNotes.PartyAccount",
          foreignField: "_id",
          as: "DebitNotes.PartyAccount2",
        },
      },
      {
        $project: {
          EntryDate: 1,
          PartyAccountLedger: 1,
          _id: 1,
          EntryDate: 1,
          PartyAccountLedger: 1,
          Remark: 1,
          voucherType: 1,
          DebitNotes: {
            PartyAccount: {
              // _id: 1,
              // Name: 1,
              $setUnion: [
                "$DebitNotes.PartyAccount1",
                "$DebitNotes.PartyAccount2",
              ],
            },
            Account: 1,
            RefNumber: 1,
            key: 1,
            _id: 1,
          },
        },
      },
      {
        $project: {
          EntryDate: 1,
          PartyAccountLedger: 1,
          _id: 1,
          EntryDate: 1,
          PartyAccountLedger: 1,
          Remark: 1,
          voucherType: 1,
          DebitNotes: {
            PartyAccount: {
              _id: 1,
              Name: 1,
            },
            Account: 1,
            RefNumber: 1,
            key: 1,
            _id: 1,
          },
        },
      },
      {
        $unwind: "$DebitNotes.PartyAccount",
      },
    ]);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: data,
      // totalDocs: data.length,
    });
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  getDebitNotes,
  postDebitNotes,
  putDebitNotes,
  deleteDebitNotes,
  getDebitNotesByPopulate,
};
