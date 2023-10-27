const LedgerGroupSchema = require("../modal/LedgerGroupSchema");

const getLedgerGroup = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await LedgerGroupSchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : { ...restData }
    ).countDocuments();

    const results = await LedgerGroupSchema.find(
      inputData
        ? {
            $or: [
              {
                Name: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : { ...restData }

    )
      .populate("Under")
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
const postLedgerGroup = async (req, res, next) => {
  for (const key in req.body) {
    if (!req.body[key]) {
      delete req.body[key];
    }
  }
  try {
    await LedgerGroupSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "LedgerGroup Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putLedgerGroup = async (req, res, next) => {
  for (const key in req.body) {
    if (!req.body[key]) {
      delete req.body[key];
    }
  }
  try {
    await LedgerGroupSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json({
      success: true,
      message: "LedgerGroup Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteLedgerGroup = async (req, res, next) => {
  try {
    await LedgerGroupSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "LedgerGroup Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getLedgerGroup,
  postLedgerGroup,
  putLedgerGroup,
  deleteLedgerGroup,
};
