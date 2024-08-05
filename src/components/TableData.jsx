import React from "react";

const TableData = ({ td }) => {
  return (
    <>
      <tr>
        <td className="mr-3">{td.description}</td>

        <td className="bg-red-300">{td.category}</td>
        <td className="bg-green-300">{td.amount}</td>
        <td className="bg-yellow-300">{td.date}</td>
      </tr>
    </>
  );
};

export default TableData;
