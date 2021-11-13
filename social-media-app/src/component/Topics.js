import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import uuid from "react-uuid";
import React from "react";
import { Box } from "@mui/system";
import { FilledInput, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

function Topics(props) {
  const { index, topic, handleTopicChange, handleTopicRemove } = props;
  return (
    <React.Fragment>
      <Grid container item>
        <Grid item sx={{ mt: 2 }} xs={11}>
          <Box>
            <FormControl variant="filled" fullWidth>
              <InputLabel htmlFor="component-filled">Topic</InputLabel>
              <FilledInput
                name={`topic${index}`}
                fullWidth
                value={topic.name}
                onChange={(e) => handleTopicChange(e, index)}
                sx={{ py: 1 }}
              />
            </FormControl>
          </Box>
        </Grid>
        <Grid item sx={{ mt: 4 }} xs={1}>
          <Box>
            <IconButton
              aria-label="add"
              onClick={() => handleTopicRemove(index)}
            >
              <RemoveIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Topics;
