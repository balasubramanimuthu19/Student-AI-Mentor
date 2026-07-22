const express = require("express");
const router = express.Router();
const multer = require("multer");

const { uploadStudents } = require("../controllers/uploadController");

// Storage Configuration
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({ storage });

// Upload Student Excel
router.post(
    "/upload/students",
    upload.single("file"),
    uploadStudents
);

module.exports = router;