import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchProvinsiData, fetchCardData } from "./utils/api";
import Cards from "./components/Cards";
import CitySelector from "./components/CitySelector";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const indonesia = await fetchCardData();
      const provinsi = await fetchProvinsiData();
      setData({ indonesia, provinsi });
    };
    fetch();
  }, []);

  const changeProvince = (e) => {
    console.log(e.target.value);
    const selected = data.find(
      (provinsi) => provinsi.provinsi === e.target.value
    );
    console.log(selected);
  };
  return (
    <div className="App">
      <Cards />
      <CitySelector data={data} changeProvince={changeProvince} />
    </div>
  );
}

export default App;
