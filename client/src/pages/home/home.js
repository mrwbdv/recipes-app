import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Grow,
} from "@material-ui/core/";

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
  },
  toolBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export const HomePage = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Toolbar className={classes.toolBar}>
          <Typography
            component="h2"
            variant="h5"
            color="inherit"
            align="left"
            noWrap
          >
            Recipes Web App
          </Typography>
          <Button color="primary" variant="contained">
            Sign up
          </Button>
        </Toolbar>
      </AppBar>
      <Grow in>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={12} sm={7}>
            Posts
          </Grid>
          <Grid item xs={12} sm={4}>
            Form
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};
