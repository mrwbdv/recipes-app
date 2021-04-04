import mongoose from "mongoose";
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
  const newRecipe = new RecipeCard({
    ...recipe,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  try {
    await newRecipe.save();
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const recipe = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No recipe with that id");

  const updateRecipe = await RecipeCard.findByIdAndUpdate(
    id,
    { ...recipe, _id: id },
    {
      new: true,
    }
  );

  res.json(updateRecipe);
};

export const deleteRecipe = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No recipe with that id");

  await RecipeCard.findByIdAndDelete(id);

  res.json({ message: "Recipe deleted successfully!" });
};

export const likeRecipe = async (req, res) => {
  const { id } = req.params;

  if (!req.userId) {
    return res.json({ message: "Unauthenticated" });
  }
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No recipe with that id");

  const recipe = await RecipeCard.findById(id);

  const index = recipe.likes.findIndex((id) => id === String(req.userId));

  if (index === -1) {
    recipe.likes.push(req.userId);
  } else {
    recipe.likes = recipe.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await RecipeCard.findByIdAndUpdate(id, recipe, {
    new: true,
  });

  res.json(updatedPost);
};
