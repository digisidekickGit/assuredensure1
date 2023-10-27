const PaymentListSchema = require("../modal/PaymentListSchema");
const CreditNotesSchema = require("../modal/CreditNotesSchema");
const AccountancySchema = require("../modal/AccountancySchema");
const getCreditNotes = async (req, res, next) => {
  try {
    const { page = 1, limit = 100, StartDate, EndDate } = req.query;

    const totalDocs = await CreditNotesSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    }).countDocuments();

    const CreditNotes = await CreditNotesSchema.find({
      EntryDate: {
        $gte: StartDate,
        $lte: EndDate,
      },
    })
      .skip((page - 1) * limit)
      .limit(limit)
      .sort({ EntryDate: 1 })
      .populate({
        path: "CreditNotes.PartyAccount",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "CreditNotes.LedgerEntry",
        select: "Name", //"Name Email"
      })
      .populate({
        path: "CreditNotes.Broker",
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

    console.log(CreditNotes, "CreditNotesCreditNotesCreditNotesCreditNotes");

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: CreditNotes,
      totalDocs,
    });
  } catch (error) {
    console.log(error, "CreditNotesCreditNotesCreditNotesCreditNotes");
    return next(error);
  }
};
const postCreditNotes = async (req, res, next) => {
  try {
    const data = await CreditNotesSchema.create(req.body);

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
    await data.CreditNotes.forEach(async (element) => {
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
        Ledger:dataId , // RAVI
        oppositeLedger: id, // HDFC
        RefNumber: element.RefNumber,
        // DR: 0,
        // CR: element.Account,
        Amount:  -Math.abs(element.Account),
      };
      const AccountancyDR = {
        VoucherType: data.voucherType,
        CreatedWhich: data._id,
        EntryDate: data.EntryDate,
        Remark: data.Remark,
        Ledger: id , // HDFC
        oppositeLedger:  dataId, // RAVI
        RefNumber: element.RefNumber, // HDFC
        // DR: element.Account,
        // CR: 0,
        Amount:  Math.abs(element.Account),
      };
      await AccountancySchema.create(AccountancyCR);
      await AccountancySchema.create(AccountancyDR);
    });
    res.status(200).json({
      success: true,
      message: "CreditNotes Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putCreditNotes = async (req, res, next) => {
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
    const data = await CreditNotesSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    try {
      await data.CreditNotes.forEach(async (element) => {
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
          Ledger: dataId , // RAVI
          oppositeLedger:id , // HDFC
          RefNumber: element.RefNumber,
          Amount:  -Math.abs(element.Account),
        };
        const AccountancyDR = {
          VoucherType: data.voucherType,
          CreatedWhich: data._id,
          EntryDate: data.EntryDate,
          Remark: data.Remark,
          Ledger: id, // HDFC
          oppositeLedger:  dataId, // RAVI
          RefNumber: element.RefNumber, // HDFC
          Amount:  Math.abs(element.Account),
        };
        await AccountancySchema.create(AccountancyCR);
        await AccountancySchema.create(AccountancyDR);
      });
    } catch (error) {}

    res.status(200).json({
      success: true,
      message: "CreditNotes Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteCreditNotes = async (req, res, next) => {
  try {
    await AccountancySchema.deleteMany({
      CreatedWhich: req.params.id,
    });
    await CreditNotesSchema.findByIdAndDelete(req.params.id);
    //
    return res
      .status(200)
      .json({ success: true, message: "CreditNotes Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

const getCreditNotesByPopulate = async (req, res, next) => {
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
    const data = await CreditNotesSchema.aggregate([
      {
        $match: Search,
      },
      // { $skip: 1 },
      // { $limit: 1 },
      {
        $unwind: "$CreditNotes",
      },
      {
        $lookup: {
          from: "ledgerentries",
          localField: "PartyAccountLedger",
          foreignField: "_id",
          as: "PartyAccountLedger1",
        },
      },
      {
        $lookup: {
          from: "pos",
          localField: "PartyAccountLedger",
          foreignField: "_id",
          as: "PartyAccountLedger2",
        },
      },
      {
        PartyAccountLedger: {
          $setUnion: ["$PartyAccountLedger1", "$PartyAccountLedger2"],
        },
      },
      {
        $lookup: {
          from: "ledgerentries",
          localField: "CreditNotes.PartyAccount",
          foreignField: "_id",
          as: "CreditNotes.PartyAccount1",
        },
      },
      {
        $lookup: {
          from: "pos",
          localField: "CreditNotes.PartyAccount",
          foreignField: "_id",
          as: "CreditNotes.PartyAccount2",
        },
      },
      {
        $project: {
          EntryDate: 1,
          _id: 1,
          EntryDate: 1,
          PartyAccountLedger: 1,
          Remark: 1,
          voucherType: 1,
          FromModal: 1,
          CreditNotes: {
            PartyAccount: {
              // _id: 1,
              // Name: 1,
              $setUnion: [
                "$CreditNotes.PartyAccount1",
                "$CreditNotes.PartyAccount2",
              ],
            },
            Account: 1,
            RefNumber: 1,
            From: 1,
            key: 1,
            _id: 1,
          },
        },
      },
      {
        $project: {
          EntryDate: 1,
          PartyAccountLedger: 1,
          FromModal: 1,
          _id: 1,
          EntryDate: 1,
          PartyAccountLedger: 1,
          Remark: 1,
          voucherType: 1,
          CreditNotes: {
            PartyAccount: {
              _id: 1,
              Name: 1,
            },
            Account: 1,
            RefNumber: 1,
            key: 1,
            _id: 1,
            From: 1,
          },
        },
      },
      {
        $unwind: "$CreditNotes.PartyAccount",
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
  getCreditNotes,
  postCreditNotes,
  putCreditNotes,
  deleteCreditNotes,
  getCreditNotesByPopulate,
};
