const Performance = require("../models/Performance");

// Add Performance
const addPerformance = async (req, res) => {
    try {
        const performance = new Performance(req.body);
        await performance.save();

        res.status(201).json({
            success: true,
            message: "Performance Added Successfully",
            performance
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Performance
const getPerformance = async (req, res) => {
    try {
        const performance = await Performance.find().populate("studentId");

        res.status(200).json({
            success: true,
            performance
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    addPerformance,
    getPerformance
};