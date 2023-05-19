import React from 'react'
import tw from 'tailwind-styled-components'
import SearchField from '../../components/Table/SearchFieldUser'
import Header from '../../components/Table/Header'
import Row from '../../components/Table/Row'

const Wrapper = tw.div`
  sm:w-full md:p-5 `;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-44 md:pr-8 lg:pl-16`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow`;

const DriverReports = () => {

  return (
  <Wrapper>
    <SearchField type='number' id='number' placeholder='Search Bus Number'/>
    <TableWrapper>
        <TableContainer>
        <table className='w-full'>
          <Header text={['Bus Number', 'Report ID', 'Date Submitted', 'Status']}/>
          <tbody className='divide-y divide-gray-200'>
            <Row text={['123', '000001', 'christinehopemedalla', 'christinehopemedalla']}></Row>
            <Row text={['123', '000002', 'christinehopemedalla', 'christinehopemedalla']}></Row>
            <Row text={['123', '000003', 'christinehopemedalla', 'christinehopemedalla']}></Row>
          </tbody>
        </table>
        </TableContainer>
      </TableWrapper>
  </Wrapper>
  )
}

export default DriverReports