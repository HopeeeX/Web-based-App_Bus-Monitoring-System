import React from "react";
import PropTypes from "prop-types";
import Delete from "./DeleteButton";
import Status from "./Status";
import { Link } from "react-router-dom";

const RowAdmin = ({ text, onDelete }) => {
  return (
    <tr>
      {text.map((row, index) => {
          if (typeof row === 'number') {
            row = row.toString();
          }
          if (typeof row === 'undefined') {
            row = "N/A";
          }
        if (row.includes("status=")) {
          row = row.replace("status=", "");
          return (
            <td className="text-center" key={index}>
              <Status status={row} />
            </td>
          );
        } else if (row.includes("link=")) {
          row = row.replace("link=", "");
          const path = "/mechanic/viewInspection/" + row;
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
      <td className="text-center">
        <Delete onDelete={onDelete} />
      </td>
    </tr>
  );
};

RowAdmin.propTypes = {
  text: PropTypes.array.isRequired,
  onDelete: PropTypes.func,
};

export default RowAdmin;
