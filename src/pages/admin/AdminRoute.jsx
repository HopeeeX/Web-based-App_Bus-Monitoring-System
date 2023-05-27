/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import tw from 'tailwind-styled-components'
import AddButton from '../../components/Table/AddButton';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';
import AddRoute from '../../components/Modals/AddRoute'

const Wrapper = tw.div`
    sm:w-full `;

const Container = tw.div`
    flex items-center justify-end gap-1 md:gap-2`;

const TableWrapper = tw.div`
    h-screen p-5 md:pl-44 md:pr-8 lg:pl-16`;

const TableContainer = tw.div`
    overflow-auto rounded-sm shadow`;

const ModalWrapper = tw.div`
    fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center`;

const AdminRoute = ({onClose}) => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => {
    setShowModal(true);
    };
    const handleCloseModal = () => {
    setShowModal(false);
    onClose();
    };
    return (
        <Wrapper>
            <Container>
                <AddButton text='Add Route' clickfunc={handleOpenModal}/>
                {showModal && (
                    <ModalWrapper>
                        <AddRoute onClose={handleCloseModal}/>
                    </ModalWrapper>
                )}
                <SearchFieldAdmin type='text' id='id' placeholder='Search Route Number'/>
            </Container>
            <TableWrapper>
                <TableContainer>
                    <table className='w-full'>
                        <Header text={['Route Number', 'Origin', 'Destination','']}/>
                        <tbody className='divide-y divide-gray-200'>
                            <Row text={['123', '123', '123']}/>
                        </tbody>
                    </table>
                </TableContainer>
            </TableWrapper>
        </Wrapper>
    );
}

export default AdminRoute;