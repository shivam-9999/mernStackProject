import React from "react";
import { TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Box, width } from "@mui/system";
import Grid from "@mui/material/Grid";

function Post(props) {
  const { handlePostChange, post ,postIndex } = props;

  return (
    <React.Fragment>
      <Grid item sm={4} xs={12}>
        <TextField
          name="name"
          fullWidth
          label="Name"
          // value={post.name}
          onChange={(e) => handlePostChange(e, postIndex)}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="picture"
          fullWidth
          label="Picture"
          // value={post.picture}
          onChange={(e) => handlePostChange(e, postIndex)}
        />
      </Grid>
      <Grid item sm={4} xs={12}>
        <TextField
          name="description"
          fullWidth
          label="Description"
          onChange={(e) => handlePostChange(e, postIndex)}
          // value={post.description}
        />
      </Grid>
    </React.Fragment>
  );
}

export default Post;
