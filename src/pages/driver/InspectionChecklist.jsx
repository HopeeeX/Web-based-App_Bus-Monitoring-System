import React, { useState, useRef, useEffect} from 'react';
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
import { doc, getDoc, setDoc, getDocs, query, where, collection, updateDoc} from 'firebase/firestore';
import { UserAuth } from '../../components/Auth/Auth';
import Cookies from 'js-cookie';

function ReportIDGenerate(number) {
  const paddedNumber = String(number).padStart(5, '0');
  return 'R' + paddedNumber;
}

function TripIDGenerate(number) {
  const paddedNumber = String(number).padStart(5, '0');
  return 'T' + paddedNumber;
}

const InspectionChecklist = () => {
  const { damaged, busId, setBusId, routeId, setRouteId, setNewReportID, setReportCount } = InspectionAccess();
  const [busIdError, setBusIdError] = useState('');
  const [routeIdError, setRouteIdError] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [focusedInput, setFocusedInput] = useState("");
  const busIdInputRef = useRef(null);
  const routeIdInputRef = useRef(null);
  const [currentUser, setCurrentUser] = useState(null);
  const { user } = UserAuth();

  const handleBusIdChange = (e) => {
    setBusId(e.target.value);
    validateBusId(e.target.value);
    setFocusedInput("bus");
  };

  const handleRouteIdChange = (e) => {
    setRouteId(e.target.value);
    validateRouteId(e.target.value);
    setFocusedInput("route");
  };

  useEffect(() => {
    const fetchUser = async () => {
      if(user){
        setCurrentUser(user.userInstance.uid);
      }

    }

    fetchUser();

  }, [setNewReportID, setReportCount, user])
  

  const submitReport = async () => {
    const reportsCounterRef = doc(firestore, 'counters', 'reports');
    const countDoc = await getDoc(reportsCounterRef);
    const count = countDoc.data().count;
    const newReportID = ReportIDGenerate(count);
    setReportCount(count);
    setNewReportID(newReportID);
    if (damaged.length === 0 && busId !== '' && routeId !== '') {
      const reportsCounterRef = doc(firestore, 'counters', 'reports');
      await setDoc(reportsCounterRef, {
        count: count+1,
      });
      await setDoc(doc(firestore, 'inspection_reports', newReportID), {
        date: date,
        damaged: damaged,
        bus: busId,
        mechanic: 'N/A',
        remarks: '',
        status: 'Approved',
        time: time,
      });
      const tripsCounterRef = doc(firestore, 'counters', 'trips');
      var tripCount = (await getDoc(tripsCounterRef)).data().count + 1;
      await setDoc(tripsCounterRef, {
        count: tripCount,
      });
      const newTripID = TripIDGenerate(tripCount);
      await setDoc(doc(firestore, 'trips', newTripID), {
        date: date,
        timeStart: time,
        route: routeId,
        timeEnd: "On Journey",
        driver: Cookies.get("name")
      });

      await updateDoc(doc(firestore, 'drivers', currentUser), {
        onJourney: true,
        currentTrip: newTripID
      })
    } else if (busId === '') {
      alert('Bus ID is required.');
      return;
    } else {
      const remarksInput = document.getElementById('remarksInput');
      if (!remarksInput.value.trim()) {
        alert('Remarks is required.');
        return;
      }
    }

    if(damaged.length !== 0 && busId !== '' && routeId !== ''){
      const reportsCounterRef = doc(firestore, 'counters', 'reports');
      await setDoc(reportsCounterRef, {
        count: count+1,
      });
      await setDoc(doc(firestore, 'inspection_reports', newReportID), {
        date: date,
        damaged: damaged,
        bus: busId,
        mechanic: 'N/A',
        remarks: '',
        status: 'Pending',
        time: time,
      });
    } else if (busId === '') {
      alert('Bus ID is required.');
      return;
    } else {
      const remarksInput = document.getElementById('remarksInput');
      if (!remarksInput.value.trim()) {
        alert('Remarks is required.');
        return;
      }
    }
    
    navigate('/driver');
  };

  const navigate = useNavigate();

  const validateBusId = async (busId) => {
    try {
      const docRef = doc(firestore, 'buses', busId);
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

  const validateRouteId = async (routeId) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(firestore, 'routes'), where('number', '==', routeId))
      );
  
      if (querySnapshot.empty) {
        setRouteIdError('Route ID does not exist.');
      } else {
        setRouteIdError('');
      }
    } catch (error) {
      console.error('Error validating route ID:', error);
    }
  };
  

  const MainWrapper = tw.div`
    flex flex-col justify-center items-center font-inter bg-[#F3F3F3] pb-14 md:pb-40 lg:pb-52
  `;

  return (
    <MainWrapper>
      <h1 className="w-full font-semibold text-center text-inspectionTitle  text-2xl sm:text-3xl md:text-4xl lg:text-[40px] border-b-2 pt-8 pb-6 border-secondary mb-8">
        360-Degree Inspection Form
      </h1>
      <InspectionFieldInput
        busIdError={busIdError}
        routeIdError={routeIdError}
        handleBusIdChange={handleBusIdChange}
        handleRouteIdChange={handleRouteIdChange}
        busId={busId}
        routeId={routeId}
        setDate={setDate}
        setTime={setTime}
        busIdInputRef={busIdInputRef}
        routeIdInputRef={routeIdInputRef}
        focusedInput={focusedInput}
      />
      <div className="flex flex-col items-center gap-5 lg:gap-12">
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
