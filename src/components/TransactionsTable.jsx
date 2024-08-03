import React, { useEffect, useState } from "react";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState([]);
  console.log(search);
  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((response) => response.json())
      .then((data) => setTransactions(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <form
        action=""
        className="mt-20  flex flex-col items-center"
        onChange={(e) => setSearch(e.target.value)}
      >
        <input
          type="text"
          className="bg-gray-500 mb-3 w-96 h-9 rounded "
          placeholder="search category..."
          name="search"
          required
        />
      </form>
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
            {transactions
              .filter((td) => {
                return search.toLowerCase() === ""
                  ? td
                  : td.category.toLowerCase().includes(search);
              })
              .map((td, index) => (
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
    </div>
  );
};

export default TransactionsTable;
