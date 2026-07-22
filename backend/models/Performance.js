const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    subject: {
        type: String,
        required: true
    },

    marks: {
        type: Number,
        required: true
    },

    attendance: {
        type: Number,
        default: 0
    },

    codingScore: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Performance", performanceSchema);