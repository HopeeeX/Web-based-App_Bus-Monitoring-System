import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';

const Wrapper = tw.div`
  lg:ml-[220px] md:ml-[105px] sm:w-full
`;

const TableWrapper = tw.div`
  h-screen mx-auto p-5 md:pl-44 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const MechanicPending = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter rows based on the search term
  const filteredRows = [
    { text: ['123', 'link=000001', 'christinehopemedalla', 'christinehopemedalla'] },
    { text: ['123', 'link=000002', 'christinehopemedalla', 'christinehopemedalla'] },
    { text: ['123', 'link=000003', 'christinehopemedalla', 'christinehopemedalla'] },
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
        placeholder='Search Report ID'
        onChange={handleSearchChange}
      />
      <TableWrapper>
        <TableContainer>
          <table className='w-full'>
            <Header text={['Bus Number', 'Report ID', 'Date Submitted', 'Status']} />
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

export default MechanicPending;
