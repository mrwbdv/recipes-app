import {
  FETCH_RECIPES_SUCCESS,
  RECIPE_ADDED_SUCCESS,
  RECIPE_UPDATED_SUCCESS,
  RECIPE_DELETED_SUCCESS,
  RECIPE_LIKED_SUCCESS
} from "../actions";

export default (recipes = [], action) => {
  switch (action.type) {
    case FETCH_RECIPES_SUCCESS:
      return action.payload;
    case RECIPE_ADDED_SUCCESS:
      return [...recipes, action.payload];
    case RECIPE_UPDATED_SUCCESS:
      return recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    case RECIPE_DELETED_SUCCESS:
      return recipes.filter((recipe) => recipe._id !== action.payload);
    case RECIPE_LIKED_SUCCESS:
      return recipes.map((recipe) =>
        recipe._id === action.payload._id ? action.payload : recipe
      );
    default:
      return recipes;
  }
};
