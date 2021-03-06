import { Bar } from "react-chartjs-2";
import { withStyles } from "@material-ui/styles";

const styles = {
  container: {
    width: "85%",
    marginTop: "3rem",
  },
};
const BarChart = ({ data, classes, indo }) => {
  if (!data) {
    return null;
  }
  const { positif, dirawat, sembuh, meninggal, kasus } = data;

  const labels = () => {
    if (indo) return ["Kasus", "Dirawat", "Sembuh", "Meninggal"];
    return ["Cases", "In Recovery", "Recovered", "Deaths"];
  };
  return (
    <section className={classes.container}>
      <Bar
        data={{
          labels: labels(),
          datasets: [
            {
              label: indo ? "Orang" : "People",
              data: [positif || kasus, dirawat, sembuh, meninggal],
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(255, 0, 0, 1)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(255, 0, 0, 1)",
              ],
            },
          ],
        }}
      />
    </section>
  );
};

export default withStyles(styles)(BarChart);
