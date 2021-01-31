import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CountUp from "react-countup";
import size from "../utils/sizeHelper";

const styles = {
  Card: {
    backgroundColor: (props) => (props.bgColor ? props.bgColor : "white"),
    color: (props) => (props.color ? props.color : "black"),
  },
  CardFont: {
    fontSize: "1.9rem",
    [size("md")]: {
      fontSize: "1.7rem",
    },
    [size("xs")]: {
      fontSize: "1.3rem",
    },
  },
};
const SingleCard = ({ type, total, classes, color, bgColor }) => (
  <Grid item xs={5} sm={5} md={3} lg={2}>
    <Card className={classes.Card}>
      <CardContent>
        <Typography variant="h4" className={classes.CardFont}>
          {type}
        </Typography>
        <Typography variant="h4" className={classes.CardFont}>
          <CountUp start={0} end={parseInt(total)} duration={5} separator="," />
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default withStyles(styles)(SingleCard);
