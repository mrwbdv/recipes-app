import React, { useState } from "react";

import { Paper, TextField, Typography, Button } from "@material-ui/core";
import FileBase64  from "react-file-base64";

import { useDispatch } from "react-redux";
import { createRecipe } from "../../redux/actions";
import { useStyles } from "./styles";

export const Form = () => {
  const [recipeData, setRecipeData] = useState({
    creator: "",
    title: "",
    body: "",
    tags: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();

  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRecipe(recipeData));
  };

  const clear = () => {
    console.log("clear");
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Recipe Card</Typography>
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
          <FileBase64
            type="file"
            multiple={true}
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
