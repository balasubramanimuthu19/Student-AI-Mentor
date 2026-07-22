const express = require("express");
const router = express.Router();

const {
    addPerformance,
    getPerformance
} = require("../controllers/performanceController");

router.post("/performance", addPerformance);
router.get("/performance", getPerformance);

module.exports = router;