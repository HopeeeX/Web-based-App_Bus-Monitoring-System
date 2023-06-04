import React, { useState } from 'react';
import tw from 'tailwind-styled-components';
import SearchFieldAdmin from '../../components/Table/SearchFieldAdmin';
import Header from '../../components/Table/Header';
import Row from '../../components/Table/RowAdmin';

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

  // Sample reports array with placeholder values
  const reports = [
    {
      id: '1',
      busNumber: 'Bus 1',
      reportId: '123',
      dateSubmitted: '2023-06-01',
      status: 'Pending',
    },
    {
      id: '2',
      busNumber: 'Bus 2',
      reportId: '456',
      dateSubmitted: '2023-06-02',
      status: 'Approved',
    },
    // Add more sample reports as needed
  ];

  // Filter the reports based on the search query
  const filteredReports = reports.filter((report) =>
    report.reportId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Wrapper>
      <Container>
        <SearchFieldAdmin
          type="text"
          id="id"
          placeholder="Search Report ID"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Container>
      <TableWrapper>
        <TableContainer>
          <table className="w-full">
            <Header
              text={['Bus Number', 'Report ID', 'Date Submitted', 'Status', '']}
            />
            <tbody className="divide-y divide-gray-200">
              {filteredReports.map((report) => (
                <Row
                  key={report.id}
                  text={[
                    report.busNumber,
                    report.reportId,
                    report.dateSubmitted,
                    report.status,
                  ]}
                />
              ))}
            </tbody>
          </table>
        </TableContainer>
      </TableWrapper>
    </Wrapper>
  );
};

export default AdminReports;
