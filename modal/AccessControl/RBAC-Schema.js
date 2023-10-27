const mongoose = require("mongoose");
const RBACSchema = new mongoose.Schema(
  {
    Roll: {
      type: String,
      required: [true, "Roll is required"],
    },
    Description: {
      type: String,
      default: true,
    },
    Read: {
      type: Boolean,
      default: true,
    },
    Create: {
      type: Boolean,
      default: false,
    },
    Edit: {
      type: Boolean,
      default: false,
    },
    Delete: {
      type: Boolean,
      default: false,
    },
    Download: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("RBAC", RBACSchema);
