/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase';
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
  const [admins, setAdmins] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        // Check if admins are already in local state (cached)
        if (admins.length > 0) {
          setLoading(false);
          return;
        }

        // Fetch admins from Firestore and update local state
        const querySnapshot = await getDocs(collection(firestore, 'admins'));
        const adminData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id, // Use document ID as the admin ID
        }));
        setAdmins(adminData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching admins:', error);
        setLoading(false);
      }
    };

    fetchAdmins();
  }, [admins]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredAdmins = admins.filter((admin) =>
    admin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <AddButton text="Add User" clickfunc={handleOpenModal} />
        {showModal && (
          <ModalWrapper>
            <AddUserModal onClose={handleCloseModal} />
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
              <Header text={['Name', 'User ID', 'Email Address', '']} />
              <tbody className="divide-y divide-gray-200">
                {filteredAdmins.map((admin) => (
                  <Row
                    key={admin.id}
                    text={[admin.name, admin.id, admin.email]}
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

export default AdminList;
