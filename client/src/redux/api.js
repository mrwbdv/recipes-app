import axios from "axios";

const baseURL = "http://localhost:5000/";

export const fetchRecipes = () => axios.get(baseURL);
export const createRecipe = (newRecipe) => axios.post(baseURL, newRecipe);
