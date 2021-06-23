const {
    serverCheck,
    signup,
    signIn
} = require("./controller");
const router = require("express").Router();

router.get("/check", serverCheck);

router.post("/signup", signup);
router.post("/signin", signIn);



module.exports = router;