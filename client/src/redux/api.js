import axios from "axios";

const baseURL = "http://localhost:5000/recipes";

export const fetchRecipes = () => axios.get(baseURL);
export const createRecipe = (newRecipe) => axios.post(baseURL, newRecipe);
export const updateRecipe = (id, updatedRecipe) =>
  axios.patch(`${baseURL}/${id}`, updatedRecipe);
