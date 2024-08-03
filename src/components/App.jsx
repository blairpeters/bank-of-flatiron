import { useState } from "react";
import React from "react";

import "../App.css";
import InputDetails from "./InputDetails";
import TransactionsTable from "./TransactionsTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-900">
      <InputDetails />

      <TransactionsTable />
    </div>
  );
}

export default App;
