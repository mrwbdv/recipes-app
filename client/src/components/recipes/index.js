import React from "react";
import { useSelector } from "react-redux";

import { Grid, CircularProgress } from "@material-ui/core";
import { RecipeCard } from "../recipeCard";

import { useStyles } from "./styles";

export const Recipes = () => {
  const classes = useStyles();
  const recipes = useSelector((state) => state.recipes);
  return !recipes.length ? (
    <CircularProgress />
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {recipes.map((recipe) => (
        <Grid key={recipe._id} item xs={12} sm={6} md={6}>
          <RecipeCard recipe={recipe} />
        </Grid>
      ))}
    </Grid>
  );
};
