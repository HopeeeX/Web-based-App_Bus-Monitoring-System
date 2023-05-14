import React from 'react';
import tw from 'tailwind-styled-components'

const TableWrapper = tw.div`
  h-screen p-5`;

const TableContainer = tw.div`
  overflow-auto rounded-sm shadow`;

const ReportsTable = () => { 
    return (
      <TableWrapper>
        <TableContainer>
        <table className='w-full'>
          <thead className='bg-gray-100 border-b-2 border-gray-100'>
            <tr>
                <th className='p-3 text-sm text-gray-500 font-inter tracking-wide text-center'>Bus Number</th>
                <th className='p-3 text-sm text-gray-500 font-inter tracking-wide text-center'>Report ID</th>
                <th className='p-3 text-sm text-gray-500 font-inter tracking-wide text-center'>Date Submitted</th>
                <th className='p-3 text-sm text-gray-500 font-inter tracking-wide text-center'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>123</td>
            </tr>
          </tbody>
        </table>
        </TableContainer>
      </TableWrapper>
    );
}

export default ReportsTable;