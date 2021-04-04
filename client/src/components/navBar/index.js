import React, { useEffect, useState } from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  Button,
  Avatar,
} from "@material-ui/core/";

import { useDispatch } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { useStyles } from "./styles";
import { Link } from "react-router-dom";
import { googleLogout } from "../../redux/actions";

export const NavBar = () => {
  const classes = useStyles();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const loaction = useLocation();

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [loaction]);

  const logout = () => {
    dispatch(googleLogout());
    setUser(null);
    history.push("/");
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography
        component={Link}
        to="/"
        variant="h5"
        className={classes.heading}
        align="left"
      >
        Recipes Web App
      </Typography>
      <Toolbar className={classes.toolBar}>
        {user?.result ? (
          <>
            <Avatar
              className={classes.purple}
              alt={user?.result.name}
              src={user?.result.imageUrl}
            >
              {user?.result.name.charAt(0)}
            </Avatar>

            <Typography className={classes.userName} variant="h6">
              {user?.result.name}
            </Typography>

            <Button
              className={classes.logout}
              color="secondary"
              variant="contained"
              onClick={logout}
            >
              Logout
            </Button>
          </>
        ) : (
          <Button
            component={Link}
            to="/auth"
            color="primary"
            variant="contained"
          >
            Sign up
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};
