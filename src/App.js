import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchProvinsiData, fetchCardData } from "./utils/api";
import Cards from "./components/Cards";
import ProvinceSelector from "./components/ProvinceSelector";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const indonesia = await fetchCardData();
      const provinsi = await fetchProvinsiData();
      setData({
        provinsi: [{ ...indonesia, provinsi: "INDONESIA" }, ...provinsi],
        lastUpdate: indonesia.lastUpdate,
      });
    };
    fetch();
  }, []);

  const changeProvince = (e) => {
    setData({ ...data, selected: e.target.value });
  };
  if (!data.provinsi) {
    return <h1>Loading......</h1>;
  }
  return (
    <div className="App">
      <p>{`Last Update: ${new Date(data.lastUpdate).toDateString()}`}</p>
      <Cards provinces={data.provinsi} selected={data.selected} />
      <ProvinceSelector data={data.provinsi} changeProvince={changeProvince} />
    </div>
  );
}

export default App;
