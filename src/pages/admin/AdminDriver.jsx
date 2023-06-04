/* eslint-disable react/prop-types */
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

const AdminDriver = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', userId: 'johndoe123', emailAddress: 'johndoe@example.com', mobileNo: '1234567890', licenseNo: 'ABCD1234' },
    { id: 2, name: 'Jane Smith', userId: 'janesmith456', emailAddress: 'janesmith@example.com', mobileNo: '9876543210', licenseNo: 'WXYZ5678' },
    // Add more user objects as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    onClose();
  };

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <AddButton text="Add User" clickfunc={handleOpenModal} />
        {showModal && (
          <ModalWrapper>
            <AddUserModal onClose={handleCloseModal} addUser={addUser} />
          </ModalWrapper>
        )}
        <SearchFieldAdmin
          type="text"
          id="id"
          placeholder="Search Name"
          onChange={handleSearchChange}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          <table className="w-full">
            <Header
              text={[
                'Name',
                'User ID',
                'Email Address',
                'Mobile No.',
                'License No.',
                '',
              ]}
            />
            <tbody className="divide-y divide-gray-200">
              {users.map((user) => (
                user.name.toLowerCase().includes(searchTerm.toLowerCase()) && (
                  <Row
                    key={user.id}
                    text={[
                      user.name,
                      user.userId,
                      user.emailAddress,
                      user.mobileNo,
                      user.licenseNo,
                    ]}
                  />
                )
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminDriver;
