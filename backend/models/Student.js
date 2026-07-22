const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    registerNo: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    department: {
        type: String,
        required: true
    },

    year: {
        type: Number,
        required: true
    },

    semester: {
        type: Number,
        required: true
    },

    section: {
        type: String,
        required: true
    },

    gender: {
        type: String
    },

    phone: {
        type: String
    },

    cgpa: {
        type: Number,
        default: 0
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Student", studentSchema);