const express = require("express");
const router = express.Router();

const {
    addExam,
    getExams,
    updateExam,
    deleteExam
} = require("../controllers/examController");

router.post("/exams", addExam);
router.get("/exams", getExams);
router.put("/exams/:id", updateExam);
router.delete("/exams/:id", deleteExam);

module.exports = router;