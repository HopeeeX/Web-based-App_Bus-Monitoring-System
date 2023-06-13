import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import SideBarAdmin from '../../components/SideBar/SideBarAdmin';
import { Outlet } from 'react-router-dom';
import { firestore, database } from '../../../firebase'; // Import the Firestore and Firebase Realtime Database instances
import { collection, getDocs } from 'firebase/firestore';
import { child, onValue, push, ref, set } from 'firebase/database';
import alertAudio from '../../assets/audio/alert.mp3'; // Import the alert audio file

const Wrapper = tw.div`
    flex flex-cols`;

const SidebarContainer = tw.div`
    absolute md:w-64 sm:w-auto`;

const AdminDB = () => {
  const [alertAudioElement, setAlertAudioElement] = useState(null);

  useEffect(() => {
    // Function to fetch bus IDs from Firestore
    const fetchBusIds = async () => {
      try {
        const busesCollection = collection(firestore, 'buses');
        const busesQuerySnapshot = await getDocs(busesCollection);
        const busIds = busesQuerySnapshot.docs.map((doc) => doc.id);

        // Set up listeners for each bus document
        busIds.forEach((busId) => {
          const realtimeBus = ref(database, `/buses/${busId}/emergency`);
          onValue(realtimeBus, (snapshot) => {
            const data = snapshot.val();
            if (data === 1) {
              // Play alert audio
              if (alertAudioElement) {
                alertAudioElement.loop = true;
                alertAudioElement.play();
                const confirmed = window.confirm(`Emergency detected for bus ${busId}! Press OK to reset.`);
                if (confirmed) {
                  set(realtimeBus, 'notified');
                }
              }
              // Stop alert audio
              if (alertAudioElement) {
                alertAudioElement.loop = false;
                alertAudioElement.pause();
                alertAudioElement.currentTime = 0;
              }
            }
          });
        });
      } catch (error) {
        console.error('Error fetching bus IDs from Firestore:', error);
      }
    };

    fetchBusIds(); // Call the fetch bus IDs function

    // Clean up the audio element on component unmount
    return () => {
      if (alertAudioElement) {
        alertAudioElement.pause();
        alertAudioElement.currentTime = 0;
      }
    };
  }, [alertAudioElement]);

  useEffect(() => {
    // Create an audio element for the alert sound
    const audio = new Audio(alertAudio);
    setAlertAudioElement(audio);
  }, []);

  return (
    <Wrapper>
      <SidebarContainer>
        <SideBarAdmin />
      </SidebarContainer>
      <Outlet />
    </Wrapper>
  );
};

export default AdminDB;
