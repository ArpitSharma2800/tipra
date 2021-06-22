import { Card, CardContent, CardHeader, Divider, Typography } from "@material-ui/core";
import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  barGrpah: {
    marginLeft: theme.spacing(2),
  },
  DougGrpah:{
    marginRight:theme.spacing(2)
  },
  DougGrpah2:{
    marginRight:theme.spacing(1)
  }
}))
function App() {
  const classes = useStyles();
  return (
    <div >
      <Typography variant="h5" className={classes.title}>
        Dashboard
      </Typography>
      <Divider variant="middle" />
      <AltCard/>
      <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <Card elevation={0} variant="outlined" className={classes.barGrpah}>
            <CardContent>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12}  md={6}>
        <Grid container spacing={2}>
        <Grid item xs={12}  md={6}>
        <Card elevation={0} variant="outlined"  className={classes.DougGrpah2}>
            <CardContent>
                <Typography variant="h5" gutterBottom >
                </Typography>
            </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12}  md={6}>
        <Card elevation={0} variant="outlined" className={classes.DougGrpah} >
            <CardContent>
                <Typography variant="h5" gutterBottom>
                </Typography>
            </CardContent>
        </Card>
        </Grid>
      </Grid>
        </Grid>
      </Grid>
    </div>
    </div>
  );
}

export default App;
