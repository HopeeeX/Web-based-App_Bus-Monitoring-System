import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowUser';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../../firebase';

const Wrapper = tw.div`
  lg:ml-[220px] md:ml-[105px] sm:w-full
`;

const TableWrapper = tw.div`
  h-screen mx-auto p-5 md:pl-44 md:pr-8 lg:pl-16
`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow
`;

const MechanicPending = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'inspection_reports'));
        const fetchedReports = querySnapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data()
          }))
          .filter((report) => report.status === 'Pending');
        setReports(fetchedReports);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching reports:', error);
        setLoading(false);
      }
    };
  
    fetchReports();
  }, []);

  // Filter reports based on the search term
  const filteredReports = reports.filter((report) =>
    report.id.toLowerCase().includes(searchTerm.toLowerCase())
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
          {loading ? (
            <div>Loading...</div>
          ) : (
            <table className='w-full'>
              <Header text={['Bus Number', 'Report ID', 'Date Submitted', 'Status']} />
              <tbody className='divide-y divide-gray-200'>
                {filteredReports.map((report) => (
                  <Row
                    key={report.id}
                    text={[
                      report.bus,
                      'link=' + report.id,
                      report.date + ' ' + report.time,
                      "status=" + report.status,
                    ]}
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

export default MechanicPending;
