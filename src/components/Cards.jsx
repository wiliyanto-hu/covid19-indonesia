import { Grid } from "@material-ui/core";
import Card from "./Card";
const Cards = () => {
  return (
    <Grid container spacing={2} justify="center">
      <Card type="Deaths" total="900000" lastUpdate="12 January 1998" />
    </Grid>
  );
};
export default Cards;
