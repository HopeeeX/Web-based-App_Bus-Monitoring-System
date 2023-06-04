import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';

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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter rows based on the search term
  const filteredRows = [
    { text: ['123', '123', '123', '123', '123'] },
  ].filter((row) =>
    row.text.some((cell) =>
      cell.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

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
