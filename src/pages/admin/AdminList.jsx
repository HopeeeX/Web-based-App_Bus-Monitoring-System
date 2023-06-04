import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import AddButton from '../../components/Table/AddButton';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';
import AddUserModal from '../../components/Modals/AddUserModal';

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

const ModalWrapper = tw.div`
  fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex items-center justify-center
`;

const AdminList = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Placeholder data for table rows
  const rows = [
    { id: 1, name: 'John Doe', userId: '123', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', userId: '456', email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', userId: '789', email: 'bob@example.com' },
  ];

  const filteredRows = rows.filter(row =>
    row.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <AddButton text='Add User' clickfunc={handleOpenModal} />
        {showModal && (
          <ModalWrapper>
            <AddUserModal onClose={handleCloseModal} />
          </ModalWrapper>
        )}
        <SearchFieldAdmin
          type='text'
          id='id'
          placeholder='Search Name'
          onChange={handleSearchChange}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          <table className='w-full'>
            <Header text={['Name', 'User ID', 'Email Address', '']} />
            <tbody className='divide-y divide-gray-200'>
              {filteredRows.map(row => (
                <Row
                  key={row.id}
                  text={[row.name, row.userId, row.email]}
                />
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminList;
