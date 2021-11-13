import React, { useState } from "react";
import Nav from "../component/Nav";
// import FilledInput from "@mui/material/FilledInput";
// import InputLabel from "@mui/material/InputLabel";
import Grid from "@mui/material/Grid";
import uuid from "react-uuid";
// import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import "../App.css";
import { Box, width } from "@mui/system";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import topicPostsApi from "../Api/postsApi";
import Topics from "../component/Topics";
import TopicPost from "../component/TopicPost";
import { TextField, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import userTopicsData from "../Api/TopicsApi";
import { useSelector } from "react-redux";
import Post from "../component/Post";

const useStyles = makeStyles({
  topic: {
    color: "green",
  },
  post: {
    color: "#ffa733",
  },
});

function Dashboard() {

  const userId = useSelector(state => state.authReducer.user._id)
  userTopicsData.userId = userId;
  const [userTopics, setUserTopics] = useState(userTopicsData);
  const [topicPosts, setTopicPosts] = useState(topicPostsApi);
  const classes = useStyles();

  // ------topic------

  const handleTopicAdd = (e, index) => {
    e.preventDefault();
    const cloneUserTopics = { ...userTopics };
    cloneUserTopics.topics.push({ id: uuid(), name: "" });
    setUserTopics(cloneUserTopics);
  };

  const handleTopicRemove = (index) => {
    const cloneUserTopics = { ...userTopics };
    cloneUserTopics.topics.splice(index, 1);
    setUserTopics(cloneUserTopics);
  };

  const handleTopicChange = (e, index, key) => {
    const { name, value } = e.target;
    const cloneTopic = JSON.parse(JSON.stringify(userTopics));
    cloneTopic.topics[index].name = value;
    setUserTopics(cloneTopic);
  };

  // -------post-----

  const handlePostAdd = () => {
    const cloneTopicPosts = JSON.parse(JSON.stringify(topicPosts));
    if (cloneTopicPosts.topicName) {
      cloneTopicPosts.posts[cloneTopicPosts.posts.length] = {
        name: "",
        picture: "",
        description: "",
      };
    }
    setTopicPosts(cloneTopicPosts);
  };
  console.log(userTopics);

  const handleDropdownTopicSelect = (e) => {
    const { value } = e.target;
    const cloneTopicPosts = JSON.parse(JSON.stringify(topicPosts));
    cloneTopicPosts.topicName = value;
    setTopicPosts(cloneTopicPosts);
  };

  const handlePostChange = (e, key) => {
    const { name, value } = e.target;
    const cloneTopicPosts = JSON.parse(JSON.stringify(topicPosts));
    // console.log(`key`, key)
    cloneTopicPosts.posts[key][name] = value;
    setTopicPosts(cloneTopicPosts);
  };

  // console.log(`userTopics`, userTopics);
  console.log(`topicPosts`, topicPosts);

  return (
    <React.Fragment>
      <Nav />
      <Container maxWidth="xl">
        <Grid container>
          <Grid container item sm={6} xs={12}>
            <Grid item xs={12} align="center">
              <IconButton sx={{ mt: 2 }} onClick={handleTopicAdd}>
                <AddCircleIcon className={classes.topic} fontSize="large" />
              </IconButton>
              <Typography> Add Topics </Typography>
            </Grid>
            
            {/* ---- topic ---- */}
            
            {userTopics?.topics?.map((topic, index) => {
              return (
                <Topics
                  key={index}
                  handleTopicAdd={handleTopicAdd}
                  handleTopicChange={handleTopicChange}
                  index={index}
                  topic={topic}
                  handleTopicRemove={handleTopicRemove}
                />
              );
            })}
          </Grid>
           {/* --- topic End--- */}
          
          <Grid
            container
            item
            sm={6}
            xs={12}
            sx={{ marginTop: "2rem", maxHeight: 6 }}
          >

           {console.log(`userTopics`, userTopics)}

            <Grid container item xs={12}>
              <TopicPost
                handleDropdownTopicSelect={handleDropdownTopicSelect}
                userTopics={userTopics}
              />

              {/* -----add topic button---- */}
              
              {topicPosts.topicName && (
                <Grid item sx={{ mt: 1, mx: "auto" }}>
                  <div style={{ width: "5rem" }}>
                    <IconButton onClick={handlePostAdd} sx={{ ml: "8px" }}>
                      <AddCircleIcon
                        className={classes.post}
                        fontSize="large"
                      />
                    </IconButton>
                    <Typography>Add Posts</Typography>
                  </div>
                </Grid>
              )}
            </Grid>
              
            {/* ----post---- */}

            <Grid container item spacing={2} sx={{ mt: 1 }}>
              {topicPosts.posts.length > 0 &&
                topicPosts.posts.map((post, postIndex) => (
                  <Post key={postIndex} postIndex={postIndex} post={post} handlePostChange={handlePostChange}/>
                ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default Dashboard;
