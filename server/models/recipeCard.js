import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  title: String,
  body: String,
  name: String,
  tags: [String],
  selectedFile: String,
  likes: { type: [String], default: [] },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const RecipeCard = mongoose.model("RecipeCard", recipeSchema);
