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
    <div>
      <table>
        {transactions.map((list, index) => (
          <li key={index}>
            description = {list.description} | Category = {list.category} |
            Amount ={list.amount} | Date = {list.date}
          </li>
        ))}
      </table>
    </div>
  );
};

export default TransactionsTable;
