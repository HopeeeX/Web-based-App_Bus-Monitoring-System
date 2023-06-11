import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase'; // Assuming you have a Firebase configuration file and initialized Firebase app

const Wrapper = tw.div`
  sm:w-full
`;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-40 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const DriverTrips = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    const fetchTrips = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'trips'));
      const tripData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTrips(tripData);
    };

    fetchTrips();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredRows = trips.filter((trip) =>
    trip.id.includes(searchTerm)
  ).map((trip) => ({
    text: [
      trip.id,
      trip.timeStart,
      trip.timeEnd,
      trip.date,
      trip.route,
    ],
  }));

  return (
    <Wrapper>
      <SearchFieldUser
        type='number'
        id='number'
        placeholder='Search Trip ID'
        onChange={handleSearchChange}
      />
      <TableWrapper>
        <TableContainer>
          <table className='w-full'>
            <Header text={['Trip ID', 'Time Started', 'Time Ended', 'Date', 'Route']} />
            <tbody className='divide-y divide-gray-200'>
              {filteredRows.map((row, index) => (
                <Row key={index} text={row.text} />
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default DriverTrips;
