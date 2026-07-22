const XLSX = require("xlsx");
const Student = require("../models/Student");

const uploadStudents = async (req, res) => {
    console.log("Upload API Called");
    try {

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "No Excel file uploaded."
            });
        }

        // Read Excel
        const workbook = XLSX.readFile(req.file.path);

        const sheetName = workbook.SheetNames[0];

        const sheet = workbook.Sheets[sheetName];

        const students = XLSX.utils.sheet_to_json(sheet);

        let inserted = 0;
        let skipped = 0;
        let errors = [];

        for (const row of students) {

            // Check required columns
            if (!row.studName || !row.regno || !row.email) {
                errors.push(`Missing data in row: ${JSON.stringify(row)}`);
                continue;
            }

            // Duplicate Register Number
            const exists = await Student.findOne({
                registerNo: String(row.regno)
            });

            if (exists) {
                skipped++;
                continue;
            }

            // Save Student
            await Student.create({
                name: row.studName,
                registerNo: String(row.regno),
                email: row.email,
                department: row.department || "CSE",
                year: row.year || 3,
                semester: row.semester || 5,
                section: row.section || "A",
                gender: row.gender || "",
                phone: row.phone || "",
                cgpa: row.cgpa || 0
            });

            inserted++;
        }

        res.status(200).json({
            success: true,
            totalRows: students.length,
            inserted,
            skipped,
            errors
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};

module.exports = {
    uploadStudents
};