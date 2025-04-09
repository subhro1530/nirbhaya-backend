const express = require("express");
const router = express.Router();
const { getDashboard } = require("../controllers/userController");
const auth = require("../middlewares/auth");

router.get("/dashboard", auth, getDashboard);

module.exports = router;
