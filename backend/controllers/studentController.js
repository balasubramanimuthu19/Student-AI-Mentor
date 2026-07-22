const Student = require("../models/Student");

// Create Student
const createStudent = async (req, res) => {

    try {

        const student = new Student(req.body);

        await student.save();

        res.status(201).json({
            success: true,
            message: "Student Registered Successfully",
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createStudent
};