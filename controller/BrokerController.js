const BrokerSchema = require("../modal/BrokerSchema");
const {
  DeletedOpeningBalance,
  CreateOpeningBalance,
} = require("../util/UseFullFunctions");
const getBroker = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await BrokerSchema.find(
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

    const results = await BrokerSchema.find(
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

const getBrokerOpt = async (req, res, next) => {
  try {
    // const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const results = await BrokerSchema.find({},{
      _id:1,
      Name:1
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
const postBroker = async (req, res, next) => {
  try {
    const data = await BrokerSchema.create(req.body);

    let { OpeningBalance } = data;
    CreateOpeningBalance({ _id: data._id, Amount: OpeningBalance });
    res.status(200).json({
      success: true,
      message: "Broker Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putBroker = async (req, res, next) => {
  try {
    const data = await BrokerSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    let { OpeningBalance } = data;

    await DeletedOpeningBalance({ _id: req.params.id });

    await CreateOpeningBalance({ _id: req.params.id, Amount: OpeningBalance });
    return res.status(200).json({
      success: true,
      message: "Broker Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteBroker = async (req, res, next) => {
  try {
    await BrokerSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "Broker Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getBroker,
  postBroker,
  putBroker,
  deleteBroker,
  getBrokerOpt,
};
