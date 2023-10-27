const RBACSchema = require("../../modal/AccessControl/RBAC-Schema");
const EmployeeSchema = require("../../modal/EmployeeSchema");

const getRBAC = async (req, res, next) => {
  try {
    const { page = 1, limit = 3000, inputData, ...restData } = req.query;

    const totalDocs = await RBACSchema.find(
      inputData
        ? {
            $or: [
              {
                Roll: { $regex: inputData, $options: "i" },
              },
            ],
          }
        : {}
    ).countDocuments();

    const results = await RBACSchema.find(
      inputData
        ? {
            $or: [
              {
                Roll: { $regex: inputData, $options: "i" },
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
const postRBAC = async (req, res, next) => {
  try {
    const { Roll } = req.body;
    const RBAC = await RBACSchema.findOne({
      Roll,
    });
    if (RBAC) {
      return next(new ErrorHandler("Roll is already Created", 400));
    }
    await RBACSchema.create(req.body);
    res.status(200).json({
      success: true,
      message: "RBAC Created Successfully",
    });
  } catch (error) {
    return next(error);
  }
};
const putRBAC = async (req, res, next) => {
  try {
    const data = await RBACSchema.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    await EmployeeSchema.updateMany(
      { Permission: data._id },
      {
        $set: {
          ForceLogout: true,
        },
      }
    );

    // Permission

    return res.status(200).json({
      success: true,
      message: "RBAC Updated Successful",
    });
  } catch (error) {
    return next(error);
  }
};
const deleteRBAC = async (req, res, next) => {
  try {
    const Employee = await EmployeeSchema.findOne({
      Permission: req.params.id,
    });
    if (Employee) {
      return next(
        new ErrorHandler(
          `Data used in another Employee table so you can not delete`,
          400
        )
      );
    }
    await RBACSchema.findByIdAndDelete(req.params.id);
    res
      .status(200)
      .json({ success: true, message: "RBAC Deleted Successfully" });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getRBAC,
  postRBAC,
  putRBAC,
  deleteRBAC,
};
