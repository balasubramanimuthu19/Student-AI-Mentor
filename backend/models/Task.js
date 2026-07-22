const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },
    taskName: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    dueDate: {
        type: Date
    },
    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Task", taskSchema);