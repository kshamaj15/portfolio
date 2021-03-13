import React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing(2),
    },
  }));

const WorkExp = () => {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();
    return (
        <Grid container className={classes.root} spacing={2}>
            <Paper elevation={3}></Paper>
        </Grid>
    )
}

export default WorkExp;
