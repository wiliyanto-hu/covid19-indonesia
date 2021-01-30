import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import CountUp from "react-countup";
const styles = {
  Card: {
    backgroundColor: (props) => (props.bgColor ? props.bgColor : "white"),
    color: (props) => (props.color ? props.color : "black"),
  },
};
const SingleCard = ({ type, total, classes, color, bgColor }) => (
  <Grid item>
    <Card className={classes.Card}>
      <CardContent>
        <Typography variant="h4">{type}</Typography>
        <Typography variant="h4">
          <CountUp start={0} end={parseInt(total)} duration={5} separator="," />
        </Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default withStyles(styles)(SingleCard);
