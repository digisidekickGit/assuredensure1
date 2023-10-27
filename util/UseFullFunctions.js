const { ObjectId } = require("mongodb");
const AccountancySchema = require("../modal/AccountancySchema");

const CreateOpeningBalance = async ({ _id, Amount, isPos }) => {
  try {
    const AccountancyCR = {
      VoucherType: "Opening Balance",
      EntryDate: "2023-10-01",
      Ledger: ObjectId(_id), // RAVI
      RefNumber: "OpeningBalance",
      Amount: Amount,
    };
    await AccountancySchema.create(AccountancyCR);
  } catch (error) {
    console.log(error, "CreateOpeningBalance");
  }
};
const DeletedOpeningBalance = async ({ _id }) => {
  try {
    const log = await AccountancySchema.deleteMany({
      EntryDate: "2023-10-01",
      Ledger: ObjectId(_id),
      RefNumber: "OpeningBalance",
    });

    console.log(log, "check is deleted or not");
  } catch (error) {}
};

const removeEmptyValues = (object, isConvertToObjectId = []) => {
  const keys = Object.keys(object);
  for (var i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const value = object[key];
    if (
      value === null ||
      value === undefined ||
      value === "" ||
      value === "undefined" ||
      value === " "
    ) {
      return delete object[key];
    }
    if (isConvertToObjectId.includes(key)) {
      object[key] = ObjectId(value);
    }
  }
};

const removeObjectEmptyValues = (obj) => {
  for (let key in obj) {
    if (
      obj.hasOwnProperty(key) &&
      (obj[key] === null || obj[key] === undefined || obj[key] === "")
    ) {
      delete obj[key];
    }
  }
  return obj;
};

const removeDuplicates = (arr) => {
  // Create an array of objects

  let jsonObject = arr.map(JSON.stringify);
  let uniqueSet = new Set(jsonObject);
  let uniqueArray = Array.from(uniqueSet).map(JSON.parse);

  return uniqueArray;
};

function generateOTP() {
  // Generate a random 6-digit number
  const min = 100000; // Minimum 6-digit number
  const max = 999999; // Maximum 6-digit number
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



module.exports = {
  removeEmptyValues,
  removeObjectEmptyValues,
  removeDuplicates,
  generateOTP,
  CreateOpeningBalance,
  DeletedOpeningBalance,


};
