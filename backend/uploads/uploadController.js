const XLSX = require("xlsx");
const Performance = require("../models/Performance");

// Upload Excel and Read Data
const uploadExcel = async (req, res) => {
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Please upload an Excel file"
            });
        }

        // Read Excel File
        const workbook = XLSX.readFile(req.file.path);

        // First Sheet
        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        // Convert Excel to JSON
        const data = XLSX.utils.sheet_to_json(sheet);

        // Save into MongoDB
        await Performance.insertMany(data);

        res.status(200).json({
            success: true,
            message: "Excel Uploaded Successfully",
            totalRecords: data.length
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    uploadExcel
};