import { FETCH_RECIPES_SUCCESS, RECIPE_ADDED_SUCCESS } from "../actions";

export default (recipes = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return action.payload;
    case RECIPE_ADDED_SUCCESS:
      return [...recipes, action.payload];
    default:
      return recipes;
  }
};
