import React from "react";
import "./App.css";
import Cards from "./components/Cards";

import { fetchCardData } from "./utils/api";

function App() {
  React.useEffect(() => {
    const fetchCard = async () => {
      return await fetchCardData();
    };
    console.log(fetchCard());
  }, []);
  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
