import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import AddButton from '../../components/Table/AddButton';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import RowAdmin from '../../components/Table/RowAdmin';
import AddBus from '../../components/Modals/AddBus';
import { collection, getDocs, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase';

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


const AdminBus = () => {
  const [showModal, setShowModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);
  const [rows, setRows] = useState([]);
  const [refreshTable, setRefreshTable] = useState(false);

  useEffect(() => {
    const fetchBuses = async () => {
      try {
        if (rows.length > 0 && !refreshTable) {
          setLoading(false);
          return;
        }

        const busesCollection = collection(firestore, 'buses');
        const querySnapshot = await getDocs(busesCollection);
        const fetchedBuses = [];
        querySnapshot.forEach((doc) => {
          const busData = {
            id: doc.id,
            ...doc.data(),
          };
          fetchedBuses.push(busData);
        });
        setRows(fetchedBuses);
        setLoading(false);
        setRefreshTable(false);
      } catch (error) {
        console.log('Error fetching buses:', error);
        setLoading(false);
      }
    };

    fetchBuses();
  }, [rows, refreshTable]);

  const handleRefreshTable = () => {
    setLoading(true);
    setRows([]);
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setRefreshTable(true);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDelete = async (id) => {
    try {
      const busRef = doc(firestore, 'buses', id);
      await deleteDoc(busRef);

      const updatedRows = rows.filter((row) => row.id !== id);
      setRows(updatedRows);
    } catch (error) {
      console.log('Error deleting bus:', error);
    }
  };

  const filteredRows = rows.filter((row) =>
    row.plate.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <AddButton text='Add Bus' clickfunc={handleOpenModal} />
        {showModal && (
          <ModalWrapper>
            <AddBus onClose={handleCloseModal} onTableRefresh={handleRefreshTable} />
          </ModalWrapper>
        )}
        <SearchFieldAdmin
          type='text'
          id='id'
          placeholder='Search Plate Number'
          onChange={handleSearchChange}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className='w-full'>
              <Header text={['Bus ID', 'Plate Number', 'Brand', 'Sitting Capacity', '']} />
              <tbody className='divide-y divide-gray-200'>
                {filteredRows.map((row) => (
                  <RowAdmin
                    key={row.id}
                    text={[row.id, row.plate, row.brand, row.capacity]}
                    onDelete={() => handleDelete(row.id)}
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

export default AdminBus;
