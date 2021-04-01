import * as api from "../api";

//Recipes
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const FETCH_RECIPES_FAILURE = "FETCH_RECIPES_FAILURE";
export const RECIPE_ADDED_SUCCESS = "RECIPE_ADDED_SUCCESS";
export const RECIPE_ADDED_FAILURE = "RECIPE_ADDED_FAILURE";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({ type: FETCH_RECIPES_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: FETCH_RECIPES_FAILURE, payload: error });
  }
};

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({ type: RECIPE_ADDED_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: RECIPE_ADDED_FAILURE, payload: error });
  }
};
