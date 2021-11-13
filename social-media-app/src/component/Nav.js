import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useHistory } from "react-router";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/Actions/authActions";

function Nav() {
  const history = useHistory();
  const dispatch = useDispatch();

  const userData = useSelector((state) => state.authReducer.user);
  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );
  // console.log(isAuthenticated);
  const handleLogin = () => (isAuthenticated ? "" : history.push("/login"));

  const handleNewUser = () =>
    isAuthenticated ? dispatch(logoutUser(history)) : history.push("/signup");

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
          {isAuthenticated ? `Hello ${userData?.name}` : "Login"}
        </Button>
        <Button onClick={handleNewUser} style={{ color: "white" }}>
          {isAuthenticated ? "Logout" : "Signup"}
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
