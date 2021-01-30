import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CountUp from "react-countup";
import { isMobile } from "react-device-detect";

const styles = {
  Card: {
    backgroundColor: (props) => (props.bgColor ? props.bgColor : "white"),
    color: (props) => (props.color ? props.color : "black"),
  },
};
const SingleCard = ({ type, total, classes, color, bgColor }) => (
  <Grid item xs={5} sm={5} md={3} lg={2}>
    <Card className={classes.Card}>
      <CardContent>
        <Typography variant={`${isMobile ? "h5" : "h4"}`}>{type}</Typography>
        <Typography variant={`${isMobile ? "h5" : "h4"}`}>
          <CountUp start={0} end={parseInt(total)} duration={5} separator="," />
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default withStyles(styles)(SingleCard);
