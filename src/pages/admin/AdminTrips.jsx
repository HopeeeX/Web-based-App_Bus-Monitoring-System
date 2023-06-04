import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';

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

  // Sample trips array with placeholder values
  const trips = [
    {
      id: '1',
      tripId: '123',
      timeStarted: '9:00 AM',
      timeEnded: '10:00 AM',
      date: '2023-06-01',
      route: 'Route 1',
    },
    {
      id: '2',
      tripId: '456',
      timeStarted: '10:30 AM',
      timeEnded: '11:30 AM',
      date: '2023-06-02',
      route: 'Route 2',
    },
    // Add more sample trips as needed
  ];

  // Filter the trips based on the search query
  const filteredTrips = trips.filter((trip) =>
    trip.tripId.toLowerCase().includes(searchQuery.toLowerCase())
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
              text={['Trip ID', 'Time Started', 'Time Ended', 'Date', 'Route', '']}
            />
            <tbody className="divide-y divide-gray-200">
              {filteredTrips.map((trip) => (
                <Row
                  key={trip.id}
                  text={[
                    trip.tripId,
                    trip.timeStarted,
                    trip.timeEnded,
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
