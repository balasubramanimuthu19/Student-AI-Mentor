const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    // Personal Details
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

    gender: {
        type: String,
        enum: ["Male", "Female", "Other"],
        required: true
    },

    // Academic Details
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
        default: ""
    },

    cgpa: {
        type: Number,
        default: 0
    },

    // Skills
    skills: {
        type: [String],
        default: []
    },

    // Career Profiles
    github: {
        type: String,
        default: ""
    },

    linkedin: {
        type: String,
        default: ""
    },

    // Daily Study Goal
    dailyStudyHours: {
        type: Number,
        default: 2
    },

    // Account Creation Time
    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("Student", studentSchema);