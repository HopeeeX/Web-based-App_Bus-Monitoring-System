import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase';


const Wrapper = tw.div`
  sm:w-full
`;

const TableWrapper = tw.div`
  h-screen p-5 md:pl-44 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const DriverReports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchReports = async () => {
      const querySnapshot = await getDocs(collection(firestore, 'inspection_reports'));
      const fetchedReports = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setReports(fetchedReports);
    };

    fetchReports();
  }, []);

  // Filter rows based on the search term
  const filteredRows = reports.filter((report) =>
    Object.values(report).some((value) =>
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
              {filteredRows.map((row, index) => (
                <Row key={index} text={[row.bus, "link=" + row.id, row.date + " " + row.time,  "status=" + row.status]} />
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default DriverReports;
