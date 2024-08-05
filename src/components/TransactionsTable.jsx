import React, { useEffect, useState } from "react";
import TableHeader from "./TableHeader";
import TableData from "./TableData";

const TransactionsTable = () => {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  console.log(search);

  useEffect(() => {
    fetch("https://bank-of-flatiron-database.vercel.app/transactions")
      .then((response) => response.json())
      .then((td) => setTransactions(td))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="flex flex-col items-center mt-4 text-3xl text-white">
        Transactions
      </h2>
      <form
        action=""
        className="mt-12  flex flex-col items-center"
        onChange={(e) => setSearch(e.target.value)}
      >
        <input
          type="text"
          className="bg-gray-500 mb-3 w-96 h-9 rounded "
          placeholder="Search transaction by description..."
          name="search"
          required
        />
      </form>
      {
        <div className="flex flex-row justify-center mt-3">
          <table className="">
            <thead className="">
              <TableHeader />
            </thead>
            <tbody className="bg-lime-300">
              {transactions
                .filter((td) => {
                  return search.toLowerCase() === ""
                    ? td
                    : td.description.toLowerCase().includes(search);
                })
                .map((td, index) => (
                  <TableData key={index} td={td} />
                ))}
            </tbody>
          </table>
        </div>
      }
    </div>
  );
};

export default TransactionsTable;
