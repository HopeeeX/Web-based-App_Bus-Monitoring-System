import React from 'react';
import tw from 'tailwind-styled-components'
import SearchField from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';

const Wrapper = tw.div`
  sm:w-full`;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-40 md:pr-8 lg:pl-16`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow`;


const DriverTrips = () => {
  return (
    <Wrapper>
      <SearchField type='number' id='number' placeholder='Search Trip ID'/>
      <TableWrapper>
        <TableContainer>
          <table className='w-full'>
            <Header text={['Trip ID', 'Time Started', 'Time Ended', 'Date', 'Route' ]}/>
            <tbody className='divide-y divide-gray-200'>
              <Row text={['123', '123', '123', '123', '123']}/>
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
}

export default DriverTrips;