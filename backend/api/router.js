const {
    serverCheck,
    signup
} = require("./controller");
const router = require("express").Router();

router.get("/check", serverCheck);

router.post("/signup", signup);

module.exports = router;