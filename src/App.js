import React, { useEffect, useState } from "react";
import Cards from "./components/Cards";
import ProvinceSelector from "./components/ProvinceSelector";
import LineChart from "./components/LineChart";
import Table from "./components/Table";
import DataGrid from "./components/DataGrid";
import "./App.css";
import { fetchProvinsiData, fetchCardData } from "./utils/api";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      try {
        const indonesia = await fetchCardData();
        const rawProvinsi = await fetchProvinsiData();
        const provinsi = rawProvinsi.map((prov, idx) => {
          return { ...prov, id: idx };
        });
        setData({
          provinsi: [
            { ...indonesia, provinsi: "INDONESIA", id: 99 },
            ...provinsi,
          ],
          lastUpdate: indonesia.lastUpdate,
        });
      } catch (e) {
        console.log(e, "HERE");
        setData({
          error:
            "Something went wrong, please check your connection and try again later",
        });
      }
    };
    fetch();
  }, []);

  const changeProvince = (e) => {
    setData({ ...data, selected: e.target.value });
  };
  if (data.error) {
    return <h1 style={{ textAlign: "center" }}>{data.error}</h1>;
  } else if (!data.provinsi) {
    return <h1 style={{ textAlign: "center" }}>Loading Data......</h1>;
  }
  const { provinsi, lastUpdate, selected } = data;
  return (
    <div className="App">
      <h2>Indonesia COVID-19 Cases</h2>
      <ProvinceSelector data={provinsi} changeProvince={changeProvince} />
      <p>{`Last Update: ${new Date(lastUpdate).toDateString()}`}</p>
      <Cards provinces={provinsi} selected={selected} />
      <LineChart />
      <DataGrid provinsis={provinsi} />
      <Table provinsis={provinsi} />
    </div>
  );
}

export default App;
