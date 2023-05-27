import React from 'react';
import tw from 'tailwind-styled-components'
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';
import GenerateButton from '../../components/Table/GenerateButton';

const Wrapper = tw.div`
    sm:w-full `;

const Container = tw.div`
    flex items-center justify-end gap-1 md:gap-2`;

const TableWrapper = tw.div`
    h-screen p-5 md:pl-44 md:pr-8 lg:pl-16`;

const TableContainer = tw.div`
    overflow-auto rounded-sm shadow`;

const AdminTrips = () => {
    return (
        <Wrapper>
            <Container>
                <GenerateButton/>
                <SearchFieldAdmin type='text' id='id' placeholder='Search Trip ID'/>
            </Container>
            <TableWrapper>
                <TableContainer>
                    <table className='w-full'>
                        <Header text={['Trip ID', 'Time Started', 'Time Ended', 'Date', 'Route', '']}/>
                        <tbody className='divide-y divide-gray-200'>
                            <Row text={['123', '123', '123', '123', '123']}/>
                        </tbody>
                    </table>
                </TableContainer>
            </TableWrapper>
        </Wrapper>
    );
}

export default AdminTrips;