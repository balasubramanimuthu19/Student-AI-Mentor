// src/pages/Upload.jsx

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  UploadCloud,
  FileSpreadsheet,
  FileText,
  Trash2,
  CheckCircle2,
  Info,
  Clock3,
} from "lucide-react";

export default function Upload() {
  const inputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [progress] = useState(72);
  const [dragging, setDragging] = useState(false);

  const recentUploads = [
    {
      name: "Semester_5_Marks.xlsx",
      date: "Today • 10:30 AM",
      status: "Uploaded",
    },
    {
      name: "Attendance_Report.csv",
      date: "Yesterday • 05:15 PM",
      status: "Uploaded",
    },
    {
      name: "Internal_Marks.xls",
      date: "2 Days Ago",
      status: "Uploaded",
    },
  ];

  const handleFile = (file) => {
    if (!file) return;
    setSelectedFile(file);
  };

  const handleInputChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const removeFile = () => {
    setSelectedFile(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const formatSize = (bytes) => {
    if (!bytes) return "0 KB";

    const kb = bytes / 1024;

    if (kb < 1024) return `${kb.toFixed(1)} KB`;

    return `${(kb / 1024).toFixed(2)} MB`;
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
      >
        <h1 className="text-4xl font-bold text-white">Upload Marks</h1>

        <p className="mt-3 max-w-3xl text-gray-400">
          Upload your Excel or CSV file to analyze student performance,
          generate AI study plans, predict scores, and visualize academic
          progress.
        </p>
      </motion.div>

      {/* Upload Area */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={handleDrop}
        className={`rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
          dragging
            ? "border-[#FF7A00] bg-[#FF7A00]/10"
            : "border-white/10 bg-white/5"
        } backdrop-blur-2xl`}
      >
        <UploadCloud className="mx-auto mb-6 h-20 w-20 text-[#FF7A00]" />

        <h2 className="text-2xl font-semibold text-white">
          Drag & Drop your file here
        </h2>

        <p className="mt-3 text-gray-400">
          Supported formats: .xlsx, .xls, .csv
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".xlsx,.xls,.csv"
          onChange={handleInputChange}
          className="hidden"
        />

        <button
          onClick={() => inputRef.current.click()}
          className="mt-8 rounded-xl bg-[#FF7A00] px-8 py-3 font-semibold text-white transition hover:bg-orange-600"
        >
          Choose File
        </button>
      </motion.div>

      {/* File Preview */}
      {selectedFile && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-5">
              <div className="rounded-2xl bg-[#FF7A00]/10 p-4">
                {selectedFile.name.endsWith(".csv") ? (
                  <FileText className="text-[#FF7A00]" size={34} />
                ) : (
                  <FileSpreadsheet className="text-[#FF7A00]" size={34} />
                )}
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white">
                  {selectedFile.name}
                </h3>

                <p className="mt-1 text-gray-400">
                  {selectedFile.type || "Spreadsheet File"}
                </p>

                <p className="text-sm text-gray-500">
                  {formatSize(selectedFile.size)}
                </p>
              </div>
            </div>

            <button
              onClick={removeFile}
              className="flex items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-3 text-red-400 transition hover:bg-red-500/20"
            >
              <Trash2 size={18} />
              Remove
            </button>
          </div>

          {/* Progress */}
          <div className="mt-8">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-sm text-gray-400">
                Upload Progress
              </span>

              <span className="font-semibold text-[#FF7A00]">
                {progress}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1 }}
                className="h-full rounded-full bg-[#FF7A00]"
              />
            </div>

            <button className="mt-6 rounded-xl bg-[#FF7A00] px-6 py-3 font-semibold text-white transition hover:bg-orange-600">
              Upload File
            </button>
          </div>
        </motion.div>
      )}

      {/* Bottom Cards */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Info className="text-[#FF7A00]" />
            <h2 className="text-xl font-semibold text-white">
              Upload Instructions
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Supported formats: .xlsx, .xls and .csv",
              "Maximum recommended size: 10 MB",
              "First row should contain column names",
              "Marks should be numeric values",
              "Attendance column is optional",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <CheckCircle2 className="text-green-400" size={20} />
                <span className="text-gray-300">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Recent Uploads */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-2xl"
        >
          <div className="mb-6 flex items-center gap-3">
            <Clock3 className="text-[#FF7A00]" />
            <h2 className="text-xl font-semibold text-white">
              Recent Uploads
            </h2>
          </div>

          <div className="space-y-4">
            {recentUploads.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 p-4"
              >
                <div>
                  <h3 className="font-medium text-white">{file.name}</h3>

                  <p className="mt-1 text-sm text-gray-400">
                    {file.date}
                  </p>
                </div>

                <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
                  {file.status}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}