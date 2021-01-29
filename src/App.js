import React, { useEffect, useState } from "react";
import "./App.css";
import { fetchProvinsiData, fetchCardData } from "./utils/api";
import Cards from "./components/Cards";
import ProvinceSelector from "./components/ProvinceSelector";
import { Line } from "react-chartjs-2";
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
      <Line
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: [
            {
              label: "# of Votes",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
              ],
            },
            {
              label: "Entahlah ",
              data: [6, 14, 1, 4, 1.3, 1.5],
              backgroundColor: "gold",
            },
          ],
        }}
      />
    </div>
  );
}

export default App;
