import * as api from "../api";

//Recipes
export const FETCH_RECIPES_SUCCESS = "FETCH_RECIPES_SUCCESS";
export const RECIPE_ADDED_SUCCESS = "RECIPE_ADDED_SUCCESS";
export const RECIPE_UPDATED_SUCCESS = "RECIPE_UPDATED_SUCCESS";
export const RECIPE_DELETED_SUCCESS = "RECIPE_DELETED_SUCCESS";
export const RECIPE_LIKED_SUCCESS = "RECIPE_LIKED_SUCCESS";

export const getRecipes = () => async (dispatch) => {
  try {
    const { data } = await api.fetchRecipes();
    dispatch({ type: FETCH_RECIPES_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createRecipe = (recipe) => async (dispatch) => {
  try {
    const { data } = await api.createRecipe(recipe);
    dispatch({ type: RECIPE_ADDED_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateRecipe = (id, recipe) => async (dispatch) => {
  try {
    const { data } = await api.updateRecipe(id, recipe);
    dispatch({ type: RECIPE_UPDATED_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteRecipe = (id) => async (dispatch) => {
  try {
    await api.deleteRecipe(id);
    dispatch({ type: RECIPE_DELETED_SUCCESS, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeRecipe = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeRecipe(id);
    dispatch({ type: RECIPE_LIKED_SUCCESS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
