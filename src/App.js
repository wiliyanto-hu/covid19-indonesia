import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import ProvinceSelector from "./components/ProvinceSelector";
import LineChart from "./components/LineChart";
import { isBrowser, isMobile } from "react-device-detect";
import "./App.css";
import { fetchProvinsiData, fetchCardData } from "./utils/api";

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
      <ProvinceSelector data={data.provinsi} changeProvince={changeProvince} />
      <p>{`Last Update: ${new Date(data.lastUpdate).toDateString()}`}</p>
      <Cards
        provinces={data.provinsi}
        selected={data.selected}
        isMobile={isMobile}
      />
      {isBrowser && <LineChart />}
    </div>
  );
}

export default App;
