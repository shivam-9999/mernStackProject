import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import uuid from "react-uuid";

function TopicPost(props) {
  const { handleDropdownTopicSelect, userTopics, topicPosts } = props;
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Choose Topics</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Choose Topics"
            onChange={(e) => handleDropdownTopicSelect(e)}
            defaultValue=""
          >
            {userTopics.topics.map((topic, index) => {
              return (
                <MenuItem key={uuid()}  value={topic.name}>
                  {topic.name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Grid>
    </React.Fragment>
  );
}

export default TopicPost;
