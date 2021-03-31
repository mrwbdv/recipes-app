import { RecipeCard } from "../models/recipeCard.js";

export const getRecipes = async (req, res) => {
  try {
    const recipeCards = await RecipeCard.find();
    res.status(200).json(recipeCards);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new RecipeCard(recipe);
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
