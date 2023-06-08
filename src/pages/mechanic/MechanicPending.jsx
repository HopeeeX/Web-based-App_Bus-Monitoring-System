import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldUser from '../../components/Table/SearchFieldUser';
import Header from '../../components/Table/Header';
import RowUser from '../../components/Table/RowUser';
import { collection, getDocs, doc, updateDoc } from 'firebase/firestore';
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

  const removeReportFromView = (reportId) => {
    setReports((prevReports) => prevReports.filter((report) => report.id !== reportId));
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

  const handleStatusChange = async (reportId, newStatus) => {
    try {
      const reportRef = doc(firestore, 'inspection_reports', reportId);
      await updateDoc(reportRef, { status: newStatus });
      console.log('Status updated successfully!');
      removeReportFromView(reportId);
    } catch (error) {
      console.log('Error updating status:', error);
    }
  };

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
                  <RowUser
                    key={report.id}
                    text={[
                      report.bus,
                      'link=' + report.id,
                      report.date + ' ' + report.time,
                      'status=' + report.status,
                    ]}
                    reportId={report.id} // Pass the reportId prop
                    onStatusChange={handleStatusChange} // Pass the onStatusChange callback
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
