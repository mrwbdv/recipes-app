import mongoose from "mongoose";

const recipeSchema = mongoose.Schema({
  title: String,
  recipeText: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const RecipeCard = mongoose.model("RecipeCard", recipeSchema);

