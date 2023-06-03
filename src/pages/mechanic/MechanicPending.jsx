import React, {useState} from 'react'
import tw from 'tailwind-styled-components'
import SearchField from '../../components/Table/SearchFieldUser'
import Header from '../../components/Table/Header'
import Row from '../../components/Table/RowUser'

const Wrapper = tw.div`
    sm:w-full `;

const TableWrapper = tw.div`
    -screen p-5 md:pl-44 md:pr-8 lg:pl-16`;

const TableContainer = tw.div`
    overflow-auto rounded-sm shadow`;

const MechanicPending = () => {
    return (
    <Wrapper>
        <SearchField type='number' id='number' placeholder='Search Report ID'/>
        <TableWrapper>
            <TableContainer>
            <table className='w-full'>
                <Header text={['Bus Number', 'Report ID', 'Date Submitted', 'Status']}/>
            <tbody className='divide-y divide-gray-200'>
                <Row text={['123', 'link=000001', 'christinehopemedalla', 'christinehopemedalla']}></Row>
                <Row text={['123', 'link=000002', 'christinehopemedalla', 'christinehopemedalla']}></Row>
                <Row text={['123', 'link=000003', 'christinehopemedalla', 'christinehopemedalla']}></Row>
            </tbody>
            </table>
            </TableContainer>
            </TableWrapper>
        </Wrapper>
    );
}

export default MechanicPending;