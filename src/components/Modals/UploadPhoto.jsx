/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../../../firebase";
import { InspectionAccess } from '../../pages/driver/inspectionLists/InspectionContext';
import { doc, getDoc } from 'firebase/firestore';

const UploadPhoto = ({ onClose, onUpload, itemId, itemTitle }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState(null);

  function ReportIDGenerate(number) {
    const paddedNumber = String(number).padStart(5, '0');
    return 'R' + paddedNumber;
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewURL(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (selectedFile) {
      const reportsCounterRef = doc(firestore, 'counters', 'reports');
      const countDoc = await getDoc(reportsCounterRef);
      const count = countDoc.data().count;
      const newReportID = ReportIDGenerate(count);
      const storageRef = ref(storage, "reports/" + newReportID + "/" + itemTitle);
      uploadBytes(storageRef, selectedFile).then(() => {
        getDownloadURL(storageRef).then((downloadURL) => {
          console.log("File uploaded:", selectedFile.name);
          console.log("Download URL:", downloadURL);
          setSelectedFile(null);
          onUpload();
          onClose();
        }).catch((error) => {
          console.error("Error getting download URL:", error);
        });
      }).catch((error) => {
        console.error("Error uploading file:", error);
      });
    }
  };

  const isUploadDisabled = !selectedFile;

  const truncateFileName = (fileName, maxLength) => {
    if (fileName.length <= maxLength) {
      return fileName;
    }
    const truncatedName = fileName.substring(0, maxLength) + '...';
    return truncatedName;
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className='bg-white p-7 rounded-2xl drop-shadow-lg items-center flex flex-col text-center w-64 md:w-96 lg:w-[420px] text-sm md:text-base' >
        <h2 className="text-2xl md:text-4xl lg:text-[40px] font-bold mb-4 font-inter text-fontColor">Upload Photo</h2>
        {previewURL && (
          <img
            src={previewURL}
            alt="Preview"
            className="mb-4 max-w-full h-auto border-dashed border-2 border-gray-500"
          />
        )}
        <div className="relative mb-4">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*" 
            className="opacity-0 absolute text-[0px] inset-0 w-full h-full cursor-pointer"
          />
          <button className="px-4 py-2 bg-primary text-white rounded-full font-inter text-xs md:text-sm font-semibold">
            {selectedFile ? (
              <>
                <span title={selectedFile.name}>{truncateFileName(selectedFile.name, 10)}</span>
                <span className="text-xs md:text-sm">.{selectedFile.name.split('.').pop()}</span>
              </>
            ) : (
              "Choose File"
            )}
          </button>
        </div>
        <div className='flex flex-row justify-around w-full font-inter text-xs md:text-sm font-semibold'>
            <button
            onClick={handleUpload}
            disabled={isUploadDisabled}
            className={`px-4 py-2 rounded-full ${
                isUploadDisabled ? "bg-primary/25 text-white cursor-not-allowed" : "bg-primary text-white"
            }`}
            >
            Upload
            </button>
            <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-500 text-white rounded-full"
            >
            Cancel
            </button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
