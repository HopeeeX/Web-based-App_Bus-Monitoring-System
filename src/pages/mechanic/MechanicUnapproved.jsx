import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { firestore } from '../../../firebase'; // Update the path to your firebase.jsx file

import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';

const Wrapper = tw.div`
  lg:ml-[220px] md:ml-[105px] sm:w-full
`;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-44 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const MechanicUnapproved = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reportData, setReportData] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchReportData = async () => {
      const reportsRef = collection(firestore, 'inspection_reports');
      const querySnapshot = await getDocs(query(reportsRef, where('status', '==', 'Disapproved')));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReportData(data);
    };

    fetchReportData();
  }, []);

  // Filter rows based on the search term
  const filteredRows = reportData.filter((row) =>
    Object.values(row).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Wrapper>
      <SearchFieldUser
        type='number'
        id='number'
        placeholder='Search Report ID'
        onChange={handleSearchChange}
      />
      <TableWrapper>
        <TableContainer>
          <table className='w-full'>
            <Header text={['Bus Number', 'Report ID', 'Date Submitted', 'Status']} />
            <tbody className='divide-y divide-gray-200'>
              {filteredRows.map((row) => (
                <Row
                  key={row.id}
                  text={[row.bus, "link=" + row.id, row.date + " " + row.time, "status=" + row.status]}
                />
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default MechanicUnapproved;
