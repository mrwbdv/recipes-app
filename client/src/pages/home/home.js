import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { Container, Grid, Grow } from "@material-ui/core/";
import { Form } from "../../components/form";
import { Recipes } from "../../components/recipes";

import { getRecipes } from "../../redux/actions";
import { NavBar } from "../../components/navBar";

import { useStyles } from "./styles";

export const HomePage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);

  useEffect(() => {
    dispatch(getRecipes());
  }, [currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grow in>
        <Grid
          className={classes.mainContainer}
          container
          justify="space-between"
          spacing={2}
        >
          <Grid item xs={12} md={7}>
            <Recipes setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={5}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};
