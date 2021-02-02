import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Line } from "react-chartjs-2";
import dateFormat from "../utils/dateFormat";
import size from "../utils/sizeHelper";
import { fetchCumulativeData } from "../utils/api";
const styles = {
  container: {
    marginTop: "2rem",
    width: "85%",
    [size("xs")]: {
      display: "none",
    },
  },
};
const LineChart = ({ classes, indo }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const data = await fetchCumulativeData();
      setData(data);
    };
    fetch();
  }, []);
  if (!data.length) {
    return null;
  }

  return (
    <section className={classes.container}>
      <h2>{indo ? "Grafik Kasus Kumulatif" : "Cumulative Cases chart"}</h2>
      <Line
        data={{
          labels: data.map((data) => dateFormat(data.tanggal)),
          datasets: [
            {
              label: indo ? "Kasus" : "Case",
              data: data.map((data) => data.positif_kumulatif),
              backgroundColor: ["rgba(230, 105, 180, 0)"],
              borderColor: "rgba(230, 105, 180, 0.7)",
              fill: true,
            },
            {
              label: indo ? "Sembuh" : "Recovered ",
              data: data.map((data) => data.sembuh_kumulatif),
              backgroundColor: ["rgba(0, 250 , 0, 0)"],
              borderColor: "rgba(0, 250 , 0, 0.7)",
              fill: true,
            },
            {
              label: indo ? "Dirawat" : "In Recovery ",
              data: data.map((data) => data.dirawat_kumulatif),
              backgroundColor: ["rgba(0 , 0, 200, 0)"],
              borderColor: "rgba(0,0,200,0.7)",
              fill: true,
            },
            {
              label: indo ? "Meninggal" : "Deaths ",
              data: data.map((data) => data.meninggal_kumulatif),
              backgroundColor: ["rgba(255 , 0, 0, 0)"],
              borderColor: "rgba(255,0,0,0.7)",
              fill: true,
            },
          ],
        }}
      />
    </section>
  );
};

export default withStyles(styles)(LineChart);
