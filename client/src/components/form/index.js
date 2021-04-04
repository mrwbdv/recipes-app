import React, { useState, useEffect } from "react";

import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase from "react-file-base64";

import { useDispatch, useSelector } from "react-redux";

import { createRecipe, updateRecipe } from "../../redux/actions";

import { useStyles } from "./styles";

export const Form = ({ currentId, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [recipeData, setRecipeData] = useState({
    creator: "",
    title: "",
    body: "",
    tags: "",
    selectedFile: "",
  });

  const recipe = useSelector((state) =>
    currentId ? state.recipes.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (recipe) setRecipeData(recipe);
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentId === 0) {
      dispatch(createRecipe(recipeData));
      clear();
    } else {
      dispatch(updateRecipe(currentId, recipeData));
      clear();
    }
  };

  const clear = () => {
    setRecipeData({
      creator: "",
      title: "",
      body: "",
      tags: "",
      selectedFile: "",
    });
    setCurrentId(0);
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Updating ${recipe.title}` : `Creating Recipe`} Card
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={recipeData.creator}
          onChange={(e) =>
            setRecipeData({ ...recipeData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={recipeData.title}
          onChange={(e) =>
            setRecipeData({ ...recipeData, title: e.target.value })
          }
        />
        <TextField
          name="recipeText"
          variant="outlined"
          label="Recipe Text"
          fullWidth
          multiline
          rows={4}
          value={recipeData.body}
          onChange={(e) =>
            setRecipeData({ ...recipeData, body: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags (coma separated)"
          fullWidth
          value={recipeData.tags}
          onChange={(e) =>
            setRecipeData({ ...recipeData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setRecipeData({ ...recipeData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clear}
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};
