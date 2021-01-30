import React, { useEffect, useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Line, Doughnut } from "react-chartjs-2";
import dateFormat from "../utils/dateFormat";
import { fetchCumulativeData } from "../utils/api";
const styles = {
  container: {
    marginTop: "2rem",
    width: "85%",
  },
};
const Chart = ({ classes }) => {
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
      <Doughnut
        data={{
          labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
          datasets: {
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
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
          },
        }}
      />

      <h2>Cases chart</h2>
      <Line
        data={{
          labels: data.map((data) => dateFormat(data.tanggal)),
          datasets: [
            {
              label: "Case",
              data: data.map((data) => data.positif_kumulatif),
              backgroundColor: ["rgba(230, 105, 180, 0)"],
              borderColor: "rgba(230, 105, 180, 0.7)",
              fill: true,
            },
            {
              label: "Recovered ",
              data: data.map((data) => data.sembuh_kumulatif),
              backgroundColor: ["rgba(0, 250 , 0, 0)"],
              borderColor: "rgba(0, 250 , 0, 0.7)",
              fill: true,
            },
            {
              label: "In Recovery ",
              data: data.map((data) => data.dirawat_kumulatif),
              backgroundColor: ["rgba(0 , 0, 200, 0)"],
              borderColor: "rgba(0,0,200,0.7)",
              fill: true,
            },
            {
              label: "Meninggal ",
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

export default withStyles(styles)(Chart);
