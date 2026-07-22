const Student = require("../models/Student");

// Student Login
const loginStudent = async (req, res) => {
    try {
        const { email, registerNo } = req.body;

        // Check if student exists
        const student = await Student.findOne({ email, registerNo });

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Invalid Email or Register Number"
            });
        }

        res.status(200).json({
            success: true,
            message: "Login Successful",
            student
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    loginStudent
};