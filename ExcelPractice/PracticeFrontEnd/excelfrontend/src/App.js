import React, { useState } from "react";
import { FaFileExcel } from "react-icons/fa";
import * as XLSX from "xlsx";

const App = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [excelData, setExcelData] = useState(null);

    // Handle file selection
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            readExcelFile(file);
        }
    };

    // Read and parse the Excel file
    const readExcelFile = (file) => {
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = (e) => {
            const data = e.target.result;
            const workbook = XLSX.read(data, { type: "binary" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(sheet);
            setExcelData(jsonData);
        };
    };

    // Upload data to backend
    const handleUpload = async () => {
        if (!excelData) {
            alert("Please select a valid Excel file first.");
            return;
        }

        try {
            const response = await fetch("http://localhost:8080/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(excelData),
            });

            if (response.ok) {
                alert("Data uploaded successfully!");
            } else {
                alert("Error uploading data!");
            }
        } catch (error) {
            console.error("Upload Error:", error);
            alert("Failed to upload. Check console for details.");
        }
    };

    return (
        <div className="container" style={{ border: "1px solid gray" }}>
            {/* First Row */}
            <div id="firstrow" style={{ border: "1px solid gray" }}>
                <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
                    <button
                        style={{ background: "none", border: "none", display: "flex", alignItems: "center" }}
                    >
                        <FaFileExcel style={{ color: "green", marginRight: "5px" }} size={20} />
                        <span style={{ textDecoration: "underline", fontWeight: "bold" }}>Excel Format</span>
                    </button>
                    <h5>For Purchase Lot Upload</h5>
                </div>
            </div>

            {/* Second Row */}
            <div style={{ border: "1px solid gray", padding: "10px", textAlign: "center", background: "#f0f0f0" }}>
                <p style={{ margin: "0" }}>Upload Excel (.xls) File</p>
            </div>

            {/* Third Row */}
            <div style={{ border: "1px solid gray", padding: "10px", display: "flex", alignItems: "center" }}>
                <div style={{ width: "10%" }}>
                    <span className="small-text">File</span>
                </div>
                <div style={{ width: "90%", display: "flex" }}>
                    <label className="file-label">
                        Choose File
                        <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} style={{ display: "none" }} />
                    </label>
                    <div style={{ marginLeft: "10px" }}>{selectedFile ? selectedFile.name : "No File Chosen"}</div>
                </div>
            </div>

            {/* Fourth Row */}
            <div style={{ border: "1px solid gray", textAlign: "center", padding: "10px" }}>
                <button className="upload-btn" onClick={handleUpload}>Upload</button>
            </div>
        </div>
    );
};

export default App;
