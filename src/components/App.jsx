import { useState } from "react";

import "../App.css";
import InputDetails from "./InputDetails";

function App() {
  const [count, setCount] = useState(0);

  return <InputDetails />;
}

export default App;
