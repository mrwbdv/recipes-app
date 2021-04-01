import React from "react";

import { Container, Grid, Grow } from "@material-ui/core/";
import { NavBar } from "../../components/navBar";
import { Recipes } from "../../components/recipes";

export const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <NavBar />
      <Grow in>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={7}>
            <Recipes />
          </Grid>
          <Grid item xs={12} sm={4}>
            Form
          </Grid>
        </Grid>
      </Grow>
    </Container>
  );
};
