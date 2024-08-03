import { useState } from "react";

import "../App.css";
import InputDetails from "./InputDetails";
import TransactionsTable from "./TransactionsTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <InputDetails />
      <TransactionsTable />
    </div>
  );
}

export default App;
