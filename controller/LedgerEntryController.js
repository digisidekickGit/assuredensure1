const LedgerEntrySchema = require("../modal/LedgerEntrySchema");
const { ObjectId } = require("mongodb");
const { DeletedOpeningBalance, CreateOpeningBalance } = require("../util/UseFullFunctions");
const getLedgerEntry = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await LedgerEntrySchema.find(
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

    const results = await LedgerEntrySchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
            ],
            // createdBy: {
            //   $ne: "By System",
            // },
          }
        : {
            ...restData,
          }
    )
      .populate({
        path: "Group",
        select: "Name", //"Name Email"
      })
      .skip((page - 1) * limit)
      .limit(limit);
    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results.reverse(),
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const getLedgerEntryData = async (req, res, next) => {
  try {
    const results = await LedgerEntrySchema.find({});

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results.reverse(),
      totalDocs,
    });
  } catch (error) {
    return next(error);
  }
};
const getDebitAccounts = async (req, res, next) => {
  try {
    const results = await LedgerEntrySchema.find({
      Group: {
        $in: [
          ObjectId("648ac83ab776d358bde5099e"), //[Direct Expense ,Indirect Expense, 	Direct Income ,	Indirect Income]
          ObjectId("648ac849b776d358bde509a8"),
          ObjectId("648ac808b776d358bde5098a"),
          ObjectId("648ac81bb776d358bde50994"),
        ],
      },
    });

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results,
  
    });
  } catch (error) {
    return next(error);
  }
};
const getCashAccount = async (req, res, next) => {
  try {
    const results = await LedgerEntrySchema.find({
      Group: {
        $in: [
          ObjectId("648af2aa0b4b56fdf28d9cee"), //["Cash"]
        ],
      },
    });

    res.status(200).json({
      success: true,
      message: "Fetched Successfully",
      data: results,
  
    });
  } catch (error) {
    return next(error);
  }
};
const postLedgerEntry = async (req, res, next) => {
  for (const key in req.body) {
    if (!req.body[key]) {
      delete req.body[key];
    }
  }
  try {
  const data =  await LedgerEntrySchema.create(req.body);

    let { OpeningBalance } = data;
    CreateOpeningBalance({ _id: data._id, Amount: OpeningBalance });
    res.status(200).json({
      success: true,
      message: "LedgerEntry Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putLedgerEntry = async (req, res, next) => {
  for (const key in req.body) {
    if (!req.body[key]) {
      delete req.body[key];
    }
  }
  try {
   const data = await LedgerEntrySchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    let { OpeningBalance } = data;

    await  DeletedOpeningBalance({ _id: req.params.id });

    await  CreateOpeningBalance({ _id: req.params.id, Amount: OpeningBalance });
    return res.status(200).json({
      success: true,
      message: "LedgerEntry Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteLedgerEntry = async (req, res, next) => {
  try {
    await LedgerEntrySchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "LedgerEntry Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getLedgerEntry,
  postLedgerEntry,
  putLedgerEntry,
  deleteLedgerEntry,
  getLedgerEntryData,
  getDebitAccounts,
  getCashAccount
};
