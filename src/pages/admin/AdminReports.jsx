import React, { useState, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';
import { collection, getDocs } from 'firebase/firestore';
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

const AdminReports = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'inspection_reports'));
        const fetchedReports = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setReports(fetchedReports);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching reports:', error);
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  // Filter the reports based on the search query
  const filteredReports = reports.filter((report) =>
    report.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <SearchFieldAdmin
          type="text"
          id="id"
          placeholder="Search Report ID"
          onChange={handleSearchChange}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          {loading ? (
            <tr>
              <td colSpan="5">Loading...</td>
            </tr>
          ) : (
            <table className="w-full">
              <Header
                text={['Bus Number', 'Report ID', 'Date Submitted', 'Status', '']}
              />
              <tbody className="divide-y divide-gray-200">
                {filteredReports.map((report) => (
                  <Row
                    key={report.id}
                    text={[
                      report.bus,
                      'link=' + report.id,
                      report.date + ' ' + report.time,
                      'status=' + report.status,
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

export default AdminReports;
