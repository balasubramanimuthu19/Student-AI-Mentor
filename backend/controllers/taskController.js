const Task = require("../models/Task");

// Create Task
const createTask = async (req, res) => {
    try {
        const task = new Task(req.body);
        await task.save();

        res.status(201).json({
            success: true,
            message: "Task Created Successfully",
            task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get All Tasks
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();

        res.status(200).json({
            success: true,
            tasks
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Update Task
const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({
            success: true,
            message: "Task Updated",
            task
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Delete Task
const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success: true,
            message: "Task Deleted Successfully"
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};