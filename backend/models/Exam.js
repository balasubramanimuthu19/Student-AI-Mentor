const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    subject: {
        type: String,
        required: true
    },
    examDate: {
        type: Date,
        required: true
    },
    examType: {
        type: String,
        enum: ["Internal", "Model", "Semester"],
        default: "Semester"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Exam", examSchema);