const Exam = require("../models/Exam");

// Add Exam
const addExam = async (req, res) => {
    try {
        const exam = new Exam(req.body);
        await exam.save();

        res.status(201).json({
            success: true,
            message: "Exam Added Successfully",
            exam
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Exams
const getExams = async (req, res) => {
    try {
        const exams = await Exam.find().populate("studentId");

        res.status(200).json({
            success: true,
            exams
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Exam
const updateExam = async (req, res) => {
    try {
        const exam = await Exam.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Exam Updated",
            exam
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Exam
const deleteExam = async (req, res) => {
    try {
        await Exam.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Exam Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addExam,
    getExams,
    updateExam,
    deleteExam
};