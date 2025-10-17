/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import UploadImg from '../assets/img/Upload.png';
import UploadTxt from "../assets/img/Uploadtext.png";
import UpImg from '../assets/img/document-upload.png';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [idType, setIdType] = useState('');
  const [expDate, setExpDate] = useState('');
  const [serialNo, setSerialNo] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Handle drag and drop
  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Prevent default drag behaviors
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};
    const maxSizeInBytes = 25 * 1024 * 1024; // 25 MB in bytes

    // Check if file is selected
    if (!selectedFile) {
      newErrors.file = "Please upload a file.";
    } else if (selectedFile.size > maxSizeInBytes) {
      newErrors.file = "File size must be less than 25 MB.";
    }

    // Check if ID type is selected
    if (!idType) {
      newErrors.idType = "Please select a valid ID type.";
    }

    // Check expiration date format (DD/MM/YYYY)
    const expDatePattern = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/;
    if (!expDate.match(expDatePattern)) {
      newErrors.expDate = "Please enter a valid expiration date (DD/MM/YYYY).";
    }

    // Check if serial number is provided
    if (!serialNo) {
      newErrors.serialNo = "Please enter a serial number.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      // Proceed with form submission or navigation
      alert("Form submitted successfully!");
      handleNext(); // Navigate to the next page if validation passes
    }
  };

  // Navigate to the next page
  const handleNext = () => {
    navigate('/Passport');
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-5 py-5 bg-white px-4'>
      <img src={UploadImg} className='w-7/12 hidden md:block' alt="Upload Icon" />
      <img src={UploadTxt} className='mt-8 max-w-full' alt="Upload Text" />

      <div className='flex flex-col items-center w-full mt-5'>
        <div
          className='flex flex-col border-dashed border-2 rounded-md border-gray-300 p-16 text-center w-full max-w-md'
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          <img src={UpImg} className='w-7 mb-6 ml-32' alt="Upload Document" />
          <p><span className='font-bold text-red-600'>Click to Upload</span> or drag and drop</p>
          <p>(Max. file size: 25 MB)</p>
          <input
            type="file"
            accept="*/*"
            className="hidden"
            onChange={handleFileChange}
            id="file-upload"
          />
          <label
            htmlFor="file-upload"
            className="mt-4 cursor-pointer text-blue-600 underline">
            Choose a file
          </label>
          {selectedFile && (
            <p className="mt-2 text-green-600">Selected file: {selectedFile.name}</p>
          )}
          {errors.file && <p className="text-red-600">{errors.file}</p>}
        </div>

        <div className='flex flex-col gap-4 mt-5 w-full max-w-md'>
          <label className="text-gray-950 font-medium text-sm">Valid ID type</label>
          <select
            className="bg-gray-100 rounded p-3 outline-none text-gray-700"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
          >
            <option value="">-Select-</option>
            <option value="ID Card">ID Card</option>
            <option value="Passport">Passport</option>
            <option value="Driver's License">Driver's License</option>
            <option value="NIN">NIN</option>
            <option value="BVN">BVN</option>
          </select>
          {errors.idType && <p className="text-red-600">{errors.idType}</p>}

          <label className="text-gray-950 font-medium text-sm">Exp Date</label>
          <input
            type='text' // Changed to text for date format validation
            placeholder='DD/MM/YYYY'
            className="bg-gray-100 rounded p-2 outline-none"
            value={expDate}
            onChange={(e) => setExpDate(e.target.value)}
          />
          {errors.expDate && <p className="text-red-600">{errors.expDate}</p>}

          <label className="text-gray-950 font-medium text-sm">Serial no</label>
          <input
            type='text'
            className="bg-gray-100 rounded p-2 outline-none"
            value={serialNo}
            onChange={(e) => setSerialNo(e.target.value)}
          />
          {errors.serialNo && <p className="text-red-600">{errors.serialNo}</p>}

          <button
            type="submit"
            onSubmit={
              () => {
                handleSubmit(),
                handleNext();
              }
            }
            className='bg-red-600 text-white rounded p-2'>
            Next
          </button>

        </div>
      </div>
    </form>
  );
}

export default Upload;