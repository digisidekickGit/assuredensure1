const router = require("express").Router();
const UserSchema = require("../../modal/userSchema");
const jwt = require("jsonwebtoken");
const { UserVerifyToken } = require("../../util/verifyToken");

//GET USER
router.get("/", async (req, res) => {
  try {
    const user = await UserSchema.find({});
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "User Not Fetched" });
  }
});

//POST USER
router.post("/", async (req, res) => {
  try {
    await UserSchema.create(req.body);
    res
      .status(200)
      .json({ success: "true", message: "User Created Successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: "User Not Created" });
  }
});

router.get("/me", UserVerifyToken, async (req, res) => {
  try {
    const data = await UserSchema.findById(req.user._id);
    if (!req.user._id) {
      return res.status(400).json({
        success: true,
        message: "Please login first",
        from: "myData",
      });
    }
    return res.status(200).json({
      success: true,
      user: data,
      from: "myData",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
      from: " myData error",
    });
  }
});

//login
router.post("/login", async (req, res) => {
  const options = {
    expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
    httpOnly: true,
    // maxAge: 5000,
    // secure: true,
    // encode: String,
  };
  try {
    const user = await UserSchema.findOne({
      Email: req.body.Email,
    });

    if (!user) {
      res.status(200).json({ success: false, message: "Username Not Exist" });
      return;
    }
    if (user.Password !== req.body.Password) {
      return res
        .status(200)
        .json({ success: false, message: "Password Not Exist" });
    }

    //Creating Token
    if (user) {
      const token = jwt.sign(
        {
          id: user._id,
          isAdmin: true,
        },
        process.env.JWT_SECRET_KEY,
        { expiresIn: "3d" }
      );
      const { Password, ...others } = user._doc;
      // const token2 = jwt.sign({ _id: user._id }, process.env.JWT_SECRET_KEY);
      return res
        .status(200)
        .cookie(`token`, token, options)
        .json({
          success: true,
          message: "Login successful",
          user: { ...others },
        });
    } else {
      return res
        .status(200)
        .json({ success: false, message: "Wrong Username or Password" });
    }
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.get("/logout", async (req, res) => {
  try {
    const options = {
      expires: new Date(Date.now()),
      httpOnly: true,
    };
    res.status(200).cookie(`token`, null, options).json({
      success: true,
      message: "Logout successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;
