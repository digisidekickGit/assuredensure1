const PolicySchema = require("../../modal/PolicySchema");

const getPolicyCountByEmployee = async (req, res, next) => {
  const { startDate, endDate, isReport = "$EnteredBy" } = req.query;

  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            $lte: new Date(`${endDate}T23:59:59.000+05:30`),
          },
        },
      },
      {
        $group: {
          _id: isReport,
          Count: { $sum: 1 },
        },
      },
      {
        $lookup: {
          from: "employees",
          localField: "_id",
          foreignField: "_id",
          as: "Employees",
        },
      },
      {
        $unwind: "$Employees",
      },
      {
        $project: {
          _id: "$_id",
          Name: "$Employees.Name",
          Salutation: "$Employees.Salutation",
          MiddleName: "$Employees.MiddleName",
          LastName: "$Employees.LastName",
          Count: "$Count",
        },
      },
      { $sort: { Name: 1 } },
    ]);
    return res.status(200).json({
      success: true,
      message: "Policy Report successfully",
      data: Policy,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

const CompanyReportOfPolicy = async (req, res, next) => {
  const { startDate, endDate, ReportOf = "InsuranceCompany" } = req.query;

  const IS_FILTER = {
    InsuranceCompany: {
      lookupFrom: "insurancecompanies",
      groupByName: "$InsuranceCompany",
      showInProject: {
        Name: "$insurancecompanies.Name",
        Logo: "$insurancecompanies.Logo",
      },
    },
    Broker: {
      lookupFrom: "brokers",
      groupByName: "$Broker",
      showInProject: {
        Name: "$brokers.Name",
      },
    },
    // Branch PENDING
    Branch: {
      lookupFrom: "branches",
      groupByName: "$Branch",
      showInProject: {
        Name: "$branches.BranchName",
      },
    },
    POS: {
      lookupFrom: "pos",
      groupByName: "$POS",
      showInProject: {
        // Name: "$pos.Name",
        Name: {
          $concat: [
            "$pos.Salutation",
            " ",
            "$pos.Name",
            " ",
            "$pos.MiddleName",
            " ",
            "$pos.LastName",
          ],
        },
      },
    },
  };

  try {
    const Policy = await PolicySchema.aggregate([
      {
        $match: {
            // createdAt: {
            //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
            // },
          Status: "APPROVED",
        },
      },
      {
        $group: {
          //   _id: "$InsuranceCompany",
          _id: IS_FILTER[ReportOf]["groupByName"],
          Count: { $sum: 1 },
          GrossPremium: { $sum: { $toInt: "$GrossPremium" } },
          NETPremium: { $sum: { $toInt: "$NETPremium" } },
          ODPremium: { $sum: { $toInt: "$ODPremium" } },
          TPPremium: { $sum: { $toInt: "$TPPremium" } },
          TotalPolicyProfit: {
            $sum: { $toInt: "$Commission.TotalPolicyProfit" },
          },
          TotalAmountToPay: {
            $sum: { $toInt: "$Commission.TotalAmountToPay" },
          },
          PolicyProfit: { $sum: { $toInt: "$Commission.PolicyProfit" } },
          CommisionablePremium: { $sum: { $toInt: "$Commission.CommisionablePremium" } },
        },
      },
      {
        $lookup: {
          //   from: "insurancecompanies",
          from: IS_FILTER[ReportOf]["lookupFrom"],
          localField: "_id",
          foreignField: "_id",
          as: IS_FILTER[ReportOf]["lookupFrom"],
        },
      },
      {
        $unwind: `$${IS_FILTER[ReportOf]["lookupFrom"]}`,
      },
      {
        $project: {
          _id: "$_id",
          //   Name: "$insurancecompanies.Name",showInProject
          ...IS_FILTER[ReportOf]["showInProject"],
          GrossPremium: "$GrossPremium",
          NETPremium: "$NETPremium",
          ODPremium: "$ODPremium",
          TPPremium: "$TPPremium",
          PolicyProfit: "$PolicyProfit",
          TotalAmountToPay: "$TotalAmountToPay",
          TotalPolicyProfit: "$TotalPolicyProfit",
          CommisionablePremium: "$CommisionablePremium",
          Count: "$Count",
        },
      },
      { $sort: { Name: 1 } },
    ]);
    const PolicyCount = await PolicySchema.aggregate([
      {
        $match: {
            // createdAt: {
            //   $gte: new Date(`${startDate}T00:00:00.000+05:30`),
            //   $lte: new Date(`${endDate}T23:59:59.000+05:30`),
            // },
          Status: "APPROVED",
        },
      },
      {
        $group: {
          //   _id: "$InsuranceCompany",
          _id: IS_FILTER[ReportOf]["groupByName"],
          Count: { $sum: 1 },
          GrossPremium: { $sum: { $toInt: "$GrossPremium" } },
          NETPremium: { $sum: { $toInt: "$NETPremium" } },
          ODPremium: { $sum: { $toInt: "$ODPremium" } },
          TPPremium: { $sum: { $toInt: "$TPPremium" } },
          TotalPolicyProfit: {
            $sum: { $toInt: "$Commission.TotalPolicyProfit" },
          },
          TotalAmountToPay: {
            $sum: { $toInt: "$Commission.TotalAmountToPay" },
          },
          PolicyProfit: { $sum: { $toInt: "$Commission.PolicyProfit" } },
            CommisionablePremium: { $sum: { $toInt: "$Commission.CommisionablePremium" } },
        },
      },
      {
        $lookup: {
          //   from: "insurancecompanies",
          from: IS_FILTER[ReportOf]["lookupFrom"],
          localField: "_id",
          foreignField: "_id",
          as: IS_FILTER[ReportOf]["lookupFrom"],
        },
      },
      {
        $unwind: `$${IS_FILTER[ReportOf]["lookupFrom"]}`,
      },
      {
        $project: {
          _id: "$_id",
          //   Name: "$insurancecompanies.Name",showInProject
          ...IS_FILTER[ReportOf]["showInProject"],
          GrossPremium: "$GrossPremium",
          NETPremium: "$NETPremium",
          ODPremium: "$ODPremium",
          TPPremium: "$TPPremium",
          PolicyProfit: "$PolicyProfit",
          TotalAmountToPay: "$TotalAmountToPay",
          TotalPolicyProfit: "$TotalPolicyProfit",
          CommisionablePremium: "$CommisionablePremium",
          Count: "$Count",
        },
      },
      {
        $group: {
          //   _id: "$InsuranceCompany",
          _id: null,
          Count: { $sum: "$Count" },
          NETPremium: { $sum: "$NETPremium" },
          GrossPremium: { $sum: "$GrossPremium" },
          ODPremium: { $sum: "$ODPremium" },
          TPPremium: { $sum: "$TPPremium" },
          TotalPolicyProfit: { $sum: "$TotalPolicyProfit" },
          TotalAmountToPay: { $sum: "$TotalAmountToPay" },
          PolicyProfit: { $sum: "$PolicyProfit" },
          CommisionablePremium: { $sum: "$CommisionablePremium" },
        },
      },
      { $sort: { Name: 1 } },
    ]);
    return res.status(200).json({
      success: true,
      message: "Policy Report 1",
      data: Policy,
      PolicyCount: PolicyCount[0],
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  getPolicyCountByEmployee,
  CompanyReportOfPolicy,
};
