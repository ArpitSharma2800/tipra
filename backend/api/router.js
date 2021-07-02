const {
  serverCheck,
  signup,
  signIn,
  getusers,
  getSingleUser,
  blockUser,
} = require("./controller");

const { allowifloggedin, grantAccess } = require("./middleware");

const router = require("express").Router();

router.get("/check", serverCheck);

router.post("/signup", signup);
router.post("/signin", signIn);
router.get(
  "/getusers",
  allowifloggedin,
  grantAccess("readAny", "user"),
  getusers
);
router.get(
  "/getuser",
  allowifloggedin,
  grantAccess("readAny", "user"),
  getSingleUser
);
router.post(
  "/block",
  allowifloggedin,
  grantAccess("updateOwn", "connection"),
  blockUser
);

module.exports = router;
