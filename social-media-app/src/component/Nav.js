import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";

function Nav() {
  const history = useHistory();
  const handleLogin = () => {
    history.push("/login");
  };

  const handleNewUser = () => {
    history.push("/signup");
  };

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <InsertEmoticonIcon
          fontSize="large"
          sx={{ marginRight: "2rem", color: "yellow" }}
        />
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "white" }}
        >
          My Topics
        </Typography>
        <Button onClick={handleLogin} style={{ color: "white" }}>
          Login
        </Button>
        <Button onClick={handleNewUser} style={{ color: "white" }}>
          Signup
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
