/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Status from './Status';

const RowUser = ({ text, reportId, onStatusChange }) => {
  return (
    <tr>
      {text.map((row, index) => {
                  if (typeof row === 'number') {
                    row = row.toString();
                  } 
        if (row.includes('link=')) {
          row = row.replace('link=', '');
          const path = '/mechanic/viewInspection/' + row;
          return (
            <td
              key={index}
              className="p-3 text-sm text-gray-600 font-inter font-semibold text-center"
            >
              <Link className="underline text-blue-400" to={path}>
                {row}
              </Link>
            </td>
          );
        } else if (row.includes('status=')) {
          row = row.replace('status=', '');
          return (
            <td className="text-center" key={index}>
              <Status status={row} reportId={reportId} onStatusChange={onStatusChange} />
            </td>
          );
        } else {
          return (
            <td
              key={index}
              className="p-3 text-sm text-gray-600 font-inter font-semibold text-center"
            >
              {row}
            </td>
          );
        }
      })}
    </tr>
  );
};

RowUser.propTypes = {
  text: PropTypes.array,
  reportId: PropTypes.string,
  onStatusChange: PropTypes.func,
};

export default RowUser;
