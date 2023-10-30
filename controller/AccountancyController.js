const AccountancySchema = require("../modal/AccountancySchema");
const { ObjectId } = require("mongodb");
const getAccountancy = async (req, res, next) => {
  // Ledger=${Pos}&StartDate=${StartDate}&EndDate=${EndDate}&lookFor=${true}

  try {
    const { Ledger, lookFor, EndDate, StartDate } = req.query;
    const data = await AccountancySchema.aggregate([
      {
        $match: {
          Ledger: ObjectId(Ledger),
          EntryDate: {
            $gte: StartDate,
            $lte: EndDate,
          },
        },
      },
      {
        $lookup: {
          from: lookFor,
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger",
        },
      },
      {
        $unwind: "$oppositeLedger", // marge multiple docs in one array of objects
      },
      {
        $project: {
          _id: 1,
          VoucherType: 1,
          EntryDate: 1,
          RefNumber: 1,
          Ledger: 1,
          DR: 1,
          CR: 1,
          Amount: 1,
          CreatedWhich: 1,
          oppositeLedger: {
            _id: 1,
            BankAccountNo: 1,
            AccountNumber: 1,
            Name: 1,
            IFSC: 1,
            Name: 1,
          },
        },
      },
    ]);
    return res
      .status(200)
      .json({ success: true, message: "Accountancy  data", data });
  } catch (error) {
    return next(error);
  }
};

const getAccountancyCheckAllModal = async (req, res, next) => {
  // Ledger=${Pos}&StartDate=${StartDate}&EndDate=${EndDate}&lookFor=${true}
  try {
    const { Ledger, EndDate, StartDate } = req.query;

    const OpeningBalance = await AccountancySchema.findOne({
      EntryDate: "2023-10-01",
      Ledger: ObjectId(Ledger),
      RefNumber: "OpeningBalance",
    });

    const data = await AccountancySchema.aggregate([
      {
        $match: {
          Ledger: ObjectId(Ledger),
          EntryDate: {
            $gte: StartDate,
            $lte: EndDate,
          },
        },
      },
      {
        $lookup: {
          from: "banks",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger1",
        },
      },
      {
        $lookup: {
          from: "pos",
          localField: "oppositeLedger",
          foreignField: "_id",
          pipeline: [
            // { $match: { $expr: { $eq: [ "$_id", "$$client_id" ] } }, },
            {
              $project: {
                _id: 1,
                Salutation: 1,
                LastName: 1,
                Name: 1,
                MiddleName: 1,
              },
            },
          ],
          as: "oppositeLedger2",
        },
      },
      {
        $lookup: {
          from: "ledgerentries",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger3",
        },
      },
      {
        $lookup: {
          from: "brokers",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger4",
        },
      },
      {
        $project: {
          _id: 1,
          VoucherType: 1,
          EntryDate: 1,
          RefNumber: 1,
          Remark: 1,
          Ledger: 1,
          oppositeLedger: 1,
          DR: 1,
          CR: 1,
          Amount: 1,
          CreatedWhich: 1,
          oppositeLedger: {
            $setUnion: [
              "$oppositeLedger1",
              "$oppositeLedger2",
              "$oppositeLedger3",
              "$oppositeLedger4",
            ],
          },
        },
      },
      {
        $unwind: "$oppositeLedger",
      },
      {
        $sort: { EntryDate: 1 },
      },
    ]);

    return res
      .status(200)
      .json({ success: true, message: "Accountancy", data, OpeningBalance });
  } catch (error) {
    (error);
    return next(error);
  }
};

const generatePdf = async (req, res, next) => {
  try {
    const {
      Ledger = "650d878b359679ce0d2423ad",
      EndDate = "2023-09-29",
      StartDate = "2023-09-01",
    } = req.query;

    const data = await AccountancySchema.aggregate([
      {
        $match: {
          Ledger: ObjectId(Ledger),
          EntryDate: {
            $gte: StartDate,
            $lte: EndDate,
          },
        },
      },
      {
        $lookup: {
          from: "banks",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger1",
        },
      },
      {
        $lookup: {
          from: "pos",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger2",
        },
      },
      {
        $lookup: {
          from: "ledgerentries",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger3",
        },
      },
      {
        $lookup: {
          from: "brokers",
          localField: "oppositeLedger",
          foreignField: "_id",
          as: "oppositeLedger4",
        },
      },
      {
        $project: {
          _id: 1,
          VoucherType: 1,
          EntryDate: 1,
          RefNumber: 1,
          Remark: 1,
          Ledger: 1,
          oppositeLedger: 1,
          DR: 1,
          CR: 1,
          Amount: 1,
          CreatedWhich: 1,
          oppositeLedger: {
            $setUnion: [
              "$oppositeLedger1",
              "$oppositeLedger2",
              "$oppositeLedger3",
              "$oppositeLedger4",
            ],
          },
        },
      },
      {
        $unwind: "$oppositeLedger",
      },
    ]);

    const OpeningBalance = await AccountancySchema.findOne({
      EntryDate: "2023-10-01",
      Ledger: ObjectId(Ledger),
      RefNumber: "OpeningBalance",
    });

    let Balance = OpeningBalance?.Amount ?? 0;
    const myReport = await data.reduce(
      (acc, it) => {
        // if (it?.DR) {
        //   Balance = Balance - it?.DR;
        // } else {
        //   Balance = Balance + it?.CR;
        // }

        Balance = Balance + it?.Amount;
        //  ` ${Salutation} ${Name} ${MiddleName} ${LastName}`

        let oppositeLedger;

        if (it?.oppositeLedger?.Salutation) {
          oppositeLedger = `${it?.oppositeLedger?.Salutation} ${it?.oppositeLedger?.Name} ${it?.oppositeLedger?.MiddleName} ${it?.oppositeLedger?.LastName}`;
        } else {
          oppositeLedger =
            it?.oppositeLedger?.Name ?? it?.oppositeLedger?.Name ?? "";
        }
        return [
          ...acc,
          [
            `${it?.EntryDate?.split("-")?.reverse()?.join("-") ?? ""}`,
            `${oppositeLedger}`,
            `${it?.VoucherType ?? ""}`,
            `${it?.RefNumber ?? ""}`,
            `${it?.Amount >=0 ?it?.Amount  : ""}`,
            `${it?.Amount < 0 ?Math.abs(it?.Amount): ""}`,
            `${it?.Remark ?? ""}`,
            `${Math.abs(Balance) ?? ""}`,
          ],
        ];
      },
      [
        [
          `${
            OpeningBalance?.EntryDate?.split("-")?.reverse()?.join("-") ?? ""
          }`,
          ``,
          `${OpeningBalance?.VoucherType ?? ""}`,
          `${OpeningBalance?.RefNumber ?? ""}`,
          `${OpeningBalance?.DR ?? ""}`,
          `${OpeningBalance?.CR ?? ""}`,
          `${OpeningBalance?.Remark ?? ""}`,
          `${Math.abs(OpeningBalance?.Amount) ?? ""}`,
        ],
      ]
    );

    req.myReport = myReport;
    req.Balance = Balance;
    next();

    // return res.status(200).json({
    //   success: true,
    //   message: "Accountancy is here",
    //   myReport,
    //   Balance,
    // });
  } catch (error) {
    console.log(error, "check this one");
    return next(error);
  }
};

const reportOfTdsSheet = async (req, res, next) => {
  try {
    console.log("dataMydataMy check ");
    const data = await AccountancySchema.aggregate([
      // {
      //   $group: {
      //     _id: "$Ledger",
      //     Total: { $sum: { $subtract: ["$CR", "$DR"] } },
      //     // TotalCr: { $sum: "$CR" },
      //   },
      // },
      {
        $group: {
          _id: "$Ledger",
          Total: { $sum: "$Amount" },
          // TotalCr: { $sum: "$CR" },
        },
      },
      {
        $lookup: {
          from: "banks",
          localField: "_id",
          foreignField: "_id",
          pipeline: [
            // { $match: { $expr: { $eq: [ "$_id", "$$client_id" ] } }, },
            {
              $project: {
                _id: 1,
                Name: 1,
              },
            },
          ],
          as: "oppositeLedger1",
        },
      },
      {
        $lookup: {
          from: "pos",
          localField: "_id",
          foreignField: "_id",
          pipeline: [
            // { $match: { $expr: { $eq: [ "$_id", "$$client_id" ] } }, },
            {
              $project: {
                _id: 1,
                // Salutation: 1,
                Name: {
                  $concat: [
                    "$Salutation",
                    " ",
                    "$Name",
                    " ",
                    "$MiddleName",
                    "$LastName",
                  ],
                },
                // LastName: 1,
                // Name: 1,
                // MiddleName: 1,
              },
            },
          ],
          as: "oppositeLedger2",
        },
      },
      {
        $lookup: {
          from: "ledgerentries",
          localField: "_id",
          foreignField: "_id",
          pipeline: [
            // { $match: { $expr: { $eq: [ "$_id", "$$client_id" ] } }, },
            {
              $project: {
                _id: 1,
                Name: 1,
              },
            },
          ],
          as: "oppositeLedger3",
        },
      },
      {
        $lookup: {
          from: "brokers",
          localField: "_id",
          foreignField: "_id",
          pipeline: [
            // { $match: { $expr: { $eq: [ "$_id", "$$client_id" ] } }, },
            {
              $project: {
                _id: 1,
                Name: 1,
              },
            },
          ],
          as: "oppositeLedger4",
        },
      },
      {
        $project: {
          _id: 1,
          Total: 1,
          oppositeLedger: {
            $setUnion: [
              "$oppositeLedger1",
              "$oppositeLedger2",
              "$oppositeLedger3",
              "$oppositeLedger4",
            ],
          },
        },
      },
      {
        $unwind: "$oppositeLedger",
      },
    ]);

    res.status(200).json({
      data: data,
      message: "reportOfTdsSheet DATA",
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAccountancy,
  getAccountancyCheckAllModal,
  generatePdf,
  reportOfTdsSheet,
};
