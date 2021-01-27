import { Grid, Card, CardContent, Typography } from "@material-ui/core";
const SingleCard = ({ type, total, lastUpdate }) => (
  <Grid item>
    <Card>
      <CardContent>
        <Typography variant="h4">{type}</Typography>
        <Typography variant="h3">{total}</Typography>
        <Typography variant="subtitle1">{lastUpdate}</Typography>
      </CardContent>
    </Card>
  </Grid>
);

export default SingleCard;
