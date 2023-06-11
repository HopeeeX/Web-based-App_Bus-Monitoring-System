/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { auth, firestore } from '../../../firebase';
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

const AdminDriver = () => {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  const handleDeleteUser = async (userId) => {
    try {
      setLoading(true); // Set loading state to true
      // Delete user from Firestore collection
      const userDocRef = doc(firestore, 'drivers', userId);
      await deleteDoc(userDocRef);

      // Reload the drivers data from Firestore
      

      const driversCollection = collection(firestore, 'drivers');
      const querySnapshot = await getDocs(driversCollection);
      const fetchedDrivers = [];
      querySnapshot.forEach((doc) => {
        const mechanicData = { ...doc.data(), userId: doc.id };
        fetchedDrivers.push(mechanicData);
      });
      setUsers(fetchedDrivers);
      setLoading(false); // Set loading state back to false
    } catch (error) {
      console.log('Error deleting user:', error);
    }
  };

  const handleAddUser = async () => {
    try {
      // Add user logic here
      // ...

      // Close the modal
      handleCloseModal();

      // Reload the drivers data from Firestore
      setLoading(true); // Set loading state to true

      const driversCollection = collection(firestore, "drivers");
      const querySnapshot = await getDocs(driversCollection);
      const fetchedDrivers = [];
      querySnapshot.forEach((doc) => {
        const mechanicData = { ...doc.data(), userId: doc.id };
        fetchedDrivers.push(mechanicData);
      });
      setUsers(fetchedDrivers);
      setLoading(false); // Set loading state back to false
    } catch (error) {
      console.log("Error adding user:", error);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Check if users are already in local state (cached)
        if (users.length > 0) {
          setLoading(false);
          return;
        }

        // Fetch users from Firestore and update local state
        const querySnapshot = await getDocs(collection(firestore, 'drivers'));
        const userData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          userId: doc.id, // Use document ID as the user.userID
        }));
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching users:', error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, [users]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
            <AddUserModal onClose={handleCloseModal} onAddUser={handleAddUser} persona="drivers" />
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
          {loading ? (
            <p>Loading...</p>
          ) : (
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
                {filteredUsers.map((user) => (
                  <Row
                    key={user.userId}
                    text={[
                      user.name,
                      user.userId,
                      user.email,
                      user.phone,
                      user.license,
                    ]}
                    onDelete={() => handleDeleteUser(user.userId)}
                  />
                ))}
              </tbody>
            </table>
          )}
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminDriver;
