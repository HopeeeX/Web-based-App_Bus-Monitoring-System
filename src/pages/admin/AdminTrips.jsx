import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase'; // Assuming you have a Firebase configuration file and initialized Firebase app

const Wrapper = tw.div`
  lg:ml-[220px] md:ml-[105px] sm:w-full  
`;

const Container = tw.div`
  flex items-center justify-end gap-1 md:gap-2
`;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-44 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const AdminTrips = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredTrips = trips.filter((trip) =>
    trip.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <SearchFieldAdmin
          type="text"
          id="id"
          placeholder="Search Trip ID"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          <table className="w-full">
            <Header
              text={['Trip ID','Driver', 'Time Started', 'Time Ended', 'Date', 'Route', '']}
            />
            <tbody className="divide-y divide-gray-200">
              {filteredTrips.map((trip) => (
                <Row
                  key={trip.id}
                  text={[
                    trip.id,
                    trip.driver,
                    trip.timeStart,
                    trip.timeEnd,
                    trip.date,
                    trip.route,
                  ]}
                />
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminTrips;
