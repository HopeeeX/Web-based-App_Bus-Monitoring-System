import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Status from "./Status";

const RowUser = ({ text }) => {
  return (
    <tr>
      {text.map((row, index) => {
        if (row.includes("link=")) {
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
        } else if (row.includes("status=")) {
          row = row.replace("status=", "");
          return (
            <td key={index}>
              <Status status={row} />
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
  text: PropTypes.array.isRequired,
};

export default RowUser;
