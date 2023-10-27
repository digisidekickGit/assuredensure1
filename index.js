const express = require("express");
var cookieParser = require("cookie-parser");
const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const cluster = require("cluster");
const os = require("os");
const process = require("process");
const backup = require("mongodb-backup");
var compression = require("compression");
const app = express();

const userRoute = require("./route/Master/userRoute");
const RTORoute = require("./route/Master/RtoRoute");
const EmployeeRoute = require("./route/Master/EmployeeRoute");
const ManufacturerRoute = require("./route/Master/ManufacturerRoute");
const PolicyTypeRoute = require("./route/Master/PolicyTypeRoute");
const ReceiptRoute = require("./route/Voucher/ReceiptRoute");
const PaymentListRoute = require("./route/Voucher/PaymentListRoute");
const StateRoute = require("./route/Master/StateRoute");
const PosRoute = require("./route/Master/PosRoute");
const PolicyRoute = require("./route/PolicyRoute");
const InsuranceCompany = require("./route/Master/InsuranceCompanyRoute");
const InsuranceType = require("./route/Master/InsuranceTypeRoute");
const VehicleModal = require("./route/Master/VehicleModalRoute");
const InsuranceSubCategory = require("./route/Master/InsuranceSubCategoryRoute");
const PayoutGridRoute = require("./route/Master/PayoutGridRoute");
const Pincode = require("./route/Master/PincodeRoute");
const BankRoute = require("./route/Master/BankRoute");
const BranchRoute = require("./route/Master/BranchRoute");
const Accountancy = require("./route/Books/AccountancyRoute");
const LedgerGroup = require("./route/Master/LedgerGroupRoute");
const LedgerEntry = require("./route/Master/LedgerEntryRoute");
const CreditNotes = require("./route/Voucher/CreditNotesRoute");
const Contra = require("./route/Voucher/ContraRoute");
const RtoGroupChecker = require("./route/Master/RtoGroupCheckerRoute");
const DebitNotes = require("./route/Voucher/DebitNotesRoute");
const RBAC = require("./route/AccessControl/RBAC-Route");
const Broker = require("./route/Master/BrokerRoute");
const MakeModal = require("./route/Master/myMakeModaRoute");
const PBD = require("./route/Master/BankDetailsForPortalRoute");
const DBBackUp = require("./route/Backup/DBBackUp");
const PurchaseRoute = require("./route/Voucher/PurchaseRoute");
const PurchaseReturnRoute = require("./route/Voucher/PurchaseReturnRoute");
const GeneralRoute = require("./route/Voucher/GenralVoucherRoute");
const SaleRoute = require("./route/Voucher/SaleRoute");
const { wrongUrl, errorHandler } = require("./middleware/errorhandler");
dotenv.config();
app.set("view engine", "ejs");
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
    limit: "50mb",
  })
);
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));
app.use(compression({ filter: shouldCompress, level: 6 }));

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }
  // fallback to standard filter function
  return compression.filter(req, res);
}
const PORT = process.env.port || 8000;
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use("/working", (req, res) => {
  try {
    return res.status(200).json({
      message: "service is running",
    });
  } catch (error) {}
});

app.use("/api/v1/user", userRoute);
app.use("/api/v1/RTO", RTORoute);
app.use("/api/v1/Bank", BankRoute);
app.use("/api/v1/Branch", BranchRoute);
app.use("/api/v1/Employee", EmployeeRoute);
app.use("/api/v1/Manufacturer", ManufacturerRoute);
app.use("/api/v1/PolicyType", PolicyTypeRoute);
app.use("/api/v1/Receipt", ReceiptRoute);
app.use("/api/v1/PaymentList", PaymentListRoute);
app.use("/api/v1/State", StateRoute);
app.use("/api/v1/Pos", PosRoute);
app.use("/api/v1/InsuranceCompany", InsuranceCompany);
app.use("/api/v1/InsuranceType", InsuranceType);
app.use("/api/v1/InsuranceSubCategory", InsuranceSubCategory);
app.use("/api/v1/VehicleModal", VehicleModal);
app.use("/api/v1/PayoutGrid", PayoutGridRoute);
app.use("/api/v1/Policy", PolicyRoute);
app.use("/api/v1/Pincode", Pincode);
app.use("/api/v1/Accountancy", Accountancy);
app.use("/api/v1/LedgerGroup", LedgerGroup);
app.use("/api/v1/LedgerEntry", LedgerEntry);
app.use("/api/v1/CreditNotes", CreditNotes);
app.use("/api/v1/Contra", Contra);
app.use("/api/v1/RtoGroupChecker", RtoGroupChecker);
app.use("/api/v1/DebitNotes", DebitNotes);
app.use("/api/v1/RBAC", RBAC);
app.use("/api/v1/Broker", Broker);
app.use("/api/v1/MakeModal", MakeModal);
app.use("/api/v1/Purchase", PurchaseRoute);
app.use("/api/v1/Sale", SaleRoute);
app.use("/api/v1/PurchaseReturn", PurchaseReturnRoute);
app.use("/api/v1/General", GeneralRoute);
app.use("/api/v1/PBD", PBD); // PORTAL BANK DETAILS
app.use("/api/v1/backup", DBBackUp); // PORTAL BANK DETAILS

__dirname = path.resolve();
app.use(express.static(path.join(__dirname, "./build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`mongoDB Connect`);
  })
  .catch((err) => {
    console.log(err);
  });
app.use(errorHandler);
app.use(wrongUrl);
// const CPULength = os.cpus().length;
// if (cluster.isPrimary) {
//   console.log(`Primary ${process.pid} is running`);
//   for (let i = 0; i < CPULength; i++) {
//     cluster.fork();
//   }
//   cluster.on("exit", (worker, code, signal) => {
//     console.log(`worker ${worker.process.pid} died`);
//     cluster.fork();
//   });
// } else {
//   app.listen(PORT, () => {
//     console.log(`listening on port ${PORT}`);
//     console.log(`Worker ${process.pid} started`);
//   });
// }

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  // console.log(`Worker ${process.pid} started`);
});
