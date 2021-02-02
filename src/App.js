import React, { useEffect, useState } from "react";
import { Switch } from "@material-ui/core";
import Cards from "./components/Cards";
import ProvinceSelector from "./components/ProvinceSelector";
import LineChart from "./components/LineChart";
import Table from "./components/Table";
import DataGrid from "./components/DataGrid";
import dateFormat from "./utils/dateFormat";
import { fetchProvinsiData, fetchCardData } from "./utils/api";
import toggler from "./hooks/toggler";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [indo, toggleEn] = toggler(true);
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
      <div className="Language">
        <span>{indo ? "ID" : "EN"}</span>
        <Switch checked={indo} onChange={toggleEn} color="default" />
      </div>
      <h2>{indo ? "Kasus COVID-19 Indonesia" : "Indonesia COVID-19 Cases"}</h2>
      <ProvinceSelector
        data={provinsi}
        changeProvince={changeProvince}
        indo={indo}
      />
      <p>{`${indo ? "Diperbarui" : "Last Update"}: ${dateFormat(
        lastUpdate
      )}`}</p>
      <Cards provinces={provinsi} selected={selected} indo={indo} />
      <LineChart indo={indo} />
      <DataGrid provinsis={provinsi} indo={indo} />
      <Table provinsis={provinsi} indo={indo} />
    </div>
  );
}

export default App;
