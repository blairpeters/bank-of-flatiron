import React, { useEffect, useState } from "react";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="flex flex-row justify-center mt-3">
      <table className="">
        <thead className="">
          <tr>
            <th className="text-white">Description</th>
            <th className="text-white">Category</th>
            <th className="text-white">Amount</th>
            <th className="text-white">Date</th>
          </tr>
        </thead>
        <tbody className="bg-lime-300">
          {transactions.map((td, index) => (
            <tr key={index}>
              <td className="mr-3">{td.description}</td>

              <td className="bg-red-300">{td.category}</td>
              <td className="bg-green-300">{td.amount}</td>
              <td className="bg-yellow-300">{td.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionsTable;
