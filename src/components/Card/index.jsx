import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { red } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  header: {
    backgroundColor: red[500],
  },
  cardContainer:{
      height: 100,
      width: 300,
      marginLeft: 600,
      marginTop: 150
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.cardContainer}>
        <Grid container justify="center" spacing={2} direction="row" alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader className={classes.header}
                    title="Pro"
                    subheader="Lifetime"
                  />
                    <h4>All features of free version</h4>
                    <h4>Create your ad campaign</h4>
                    <h4>Access to detailed reports</h4>
                    <h4>Build your audience</h4>
                    <CardActions>
                      <Button size="small" color="primary">
                        Upgrade
                      </Button>
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper className={classes.paper}>
                <Card className={classes.card}>
                  <CardHeader className={classes.header}
                    title="Free"
                    subheader="Lifetime"
                  />
                    <h4>All features of free version</h4>
                    <h4>Create your ad campaign</h4>
                    <h4>Access to detailed reports</h4>
                    <h4>Build your audience</h4>
                    <CardActions>
                      <Button size="small" color="primary">
                        Upgrade
                      </Button>
                  </CardActions>
                </Card>
              </Paper>
          </Grid>
        </Grid>

    </div>
  );
}