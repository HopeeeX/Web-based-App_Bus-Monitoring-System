import React, { useState } from 'react';
import InspectionFieldInput from './inspectionLists/InspectionFieldInput';
import InspectionFront from './inspectionLists/InspectionFront';
import InspectionRight from './inspectionLists/InspectionRight';
import InspectionBack from './inspectionLists/InspectionBack';
import InspectionLeft from './inspectionLists/InspectionLeft';
import InspectionInside from './inspectionLists/InspectionInside';
import tw from 'tailwind-styled-components';
import { useNavigate } from 'react-router-dom';
import { InspectionAccess } from './inspectionLists/InspectionContext';
import { firestore } from '../../../firebase';
import { doc, getDoc, setDoc } from "firebase/firestore";

function ReportIDGenerate(number) {
  const paddedNumber = String(number).padStart(5, '0');
  return 'R' + paddedNumber;
}

const InspectionChecklist = () => {
  const { damaged } = InspectionAccess();
  const [busIdError, setBusIdError] = useState('');
  const [busId, setBusId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBusIdChange = (e) => {
    setBusId(e.target.value);
    validateBusId(e.target.value);
  };

  const submitReport = async () => {
    if (damaged.length === 0 && busId !== '') {
      const counterRef = doc(firestore, "counters","reports");
      const count = (await getDoc(counterRef)).data().count + 1;
      await setDoc(counterRef, {
        reports: count
      })
      const newID = ReportIDGenerate(count)
      await setDoc(doc(firestore, "inspection_reports", newID), {
        date: date,
        damaged: damaged,
        bus: busId,
        mechanic: "N/A",
        remarks: "",
        status: "Approved",
        time: time
      })
      // TODO: Dispatch
    } else if(busId === '' ){
      alert('Bus ID is required.');
      return;
    }
    else {
      const remarksInput = document.getElementById('remarksInput');
      if (!remarksInput.value.trim()) {
        alert('Remarks is required.');
        return;
      }
      // TODO: Submit Damaged Bus
    }
    navigate('/driver');
  };
  
  const navigate = useNavigate();

  const validateBusId = async (busId) => {
    try {
      const docRef = doc(firestore, "buses", busId);
      const docSnapshot = await getDoc(docRef);

      if (!docSnapshot.exists()) {
        setBusIdError('Bus ID does not exist.');
      } else {
        setBusIdError('');
      }
    } catch (error) {
      console.error('Error validating bus ID:', error);
    }
  };

  const MainWrapper = tw.div`
    flex flex-col justify-center items-center font-inter bg-[#F3F3F3] pb-14 md:pb-40 lg:pb-52
  `;

  return (
    <MainWrapper>
      <h1 className='w-full font-semibold text-center text-inspectionTitle  text-2xl sm:text-3xl md:text-4xl lg:text-[40px] border-b-2 pt-8 pb-6 border-secondary mb-8'>
        360-Degree Inspection Form
      </h1>
      <InspectionFieldInput
        busIdError={busIdError}
        handleBusIdChange={handleBusIdChange}
        busId={busId}
        setDate={setDate}
        setTime={setTime}
      />
      <div className='flex flex-col items-center gap-5 lg:gap-12'>
        <InspectionFront />
        <InspectionRight />
        <InspectionBack />
        <InspectionLeft />
        <div className="flex flex-col gap-8 items-center">
          <InspectionInside />
          <div className="remarksContainer">
            <label htmlFor="remarksInput" className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Remarks
            </label>
            <input
              type="text"
              id="remarksInput"
              placeholder="Enter your remarks"
              className="remarkInputs focus:outline-none focus:border-fontColor w-full"
              required
            />
          </div>
          <button className="border outline-none buttonTemplate self-stretch" onClick={submitReport}>
            SUBMIT
          </button>
        </div>
      </div>
      {busIdError && <p className="text-red-500">{busIdError}</p>}
    </MainWrapper>
  );
};

export default InspectionChecklist;
