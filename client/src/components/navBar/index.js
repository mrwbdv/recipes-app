import React from "react";

import { Typography, AppBar, Toolbar, Button } from "@material-ui/core/";

import { useStyles } from "./styles";

export const NavBar = () => {
  const classes = useStyles();
  return (
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
  );
};
