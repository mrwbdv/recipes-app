import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

import recipeRoutes from "./routes/recipes.js";
import userRoutes from "./routes/user.js";

const app = express();

dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/", (req,res) => {
  res.send("Hello to Recipes API");
})

app.use("/recipes", recipeRoutes);
app.use("/user", userRoutes);

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
