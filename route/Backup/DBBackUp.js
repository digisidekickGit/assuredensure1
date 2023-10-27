const router = require("express").Router();
const zlib = require("zlib");
const { sendBackUpFile } = require("../../util/nodeMailer");

router.get("/db", async (req, res, next) => {
  try {
    sendBackUpFile("ravi@digisidekick.com","DataBase Backups");
  } catch (error) {}
});
const backupMongoDB = async (req, res, next) => {
  const DB_NAME = "Railingo";
  const ARCHIVE_PATH = path.join(__dirname, "public", `${DB_NAME}.gzip`);

  const child = spawn(
    "C:\\Program Files\\MongoDB\\mongodb-database-tools-windows-x86_64-100.8.0\\bin\\mongodump",
    [
      `--db=${DB_NAME}`,
      `--uri=mongodb://railingo:railingo123@65.2.37.61:27017/Railingo?ssl=false&authSource=admin`,
      // `--username=railingo`,
      // `--password=railingo123`,
      // `--authenticationDatabase=admin`,
      `--archive=${ARCHIVE_PATH}`,
      "--gzip",
    ]
  );

  child.stdout.on("data", (data) => {
    console.log("stdout:\n", data);
  });
  child.stderr.on("data", (data) => {
    // console.log("stderr:\n", Buffer.from(data).toString());
  });
  child.on("error", (error) => {
    console.log("error:\n", error);
  });
  child.on("exit", (code, signal) => {
    if (code) console.log("Process exit with code:", code);
    else if (signal) console.log("Process killed with signal:", signal);
    else console.log("Backup is successfull ✅");
    next();
  });
};

module.exports = router;
