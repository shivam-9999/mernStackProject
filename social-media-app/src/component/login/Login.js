import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { green, brown } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../redux/Actions/authActions";
import { useHistory } from "react-router";
import "../../App.css";
import Nav from "../Nav";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: brown[500],
    },
    // '&:hover fieldset': {
    //   borderColor: 'yellow',
    // },
    "&.Mui-focused fieldset": {
      borderColor: green[200],
    },
  },
});

function Login() {
  const [_input, _setInput] = useState("");
  const history = useHistory();

  const isAuthenticated = useSelector(
    (state) => state.authReducer.isAuthenticated
  );

  const dispatch = useDispatch();

  if (isAuthenticated) {
    history.push("/dashboard");
  }

  const handleRoute = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    _setInput({ ..._input, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser(_input));
  };

  return (
    <React.Fragment>
      <Nav />
      <Button
        variant="contained"
        onClick={handleRoute}
        color="danger"
        sx={{
          marginTop: "2rem",
          marginLeft: "2rem",
          color: "white",

          // bgcolor: "#cb9b8c",
        }}
        startIcon={<ArrowBackIosNewIcon />}
      >
        back
      </Button>

      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#97b498" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleChange}
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link href="/Signup" variant="body2" color="secondary">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default Login;






// {
//    "topics": [
//     {
//       "id": "0",
//       "name": "technology",
//       "posts": [
//         {
//           "name": "Car",
//           "picture": "https://gomechanic.in/blog/wp-content/uploads/2020/11/How-compatible-are-Tesla-Cars-in-India-1200x900.jpg",
//           "description": ""
//         },
//         {
//           "name": "helicopter",
//           "picture": "https://s3-prod-europe.autonews.com/s3fs-public/styles/800x600/public/Tesla-Model%20S%20PLAID%20web.jpg",
//           "description": "https://www.army-technology.com/wp-content/uploads/sites/3/2019/01/3l-image-UH-X-Utility-Helicopter.jpg"
//         }
//       ]
//     },
//     {
//       "id": "1",
//       "name": "Environment",
//       "posts": [
//         {
//           "name": "Car",
//           "picture": "https://gomechanic.in/blog/wp-content/uploads/2020/11/How-compatible-are-Tesla-Cars-in-India-1200x900.jpg",
//           "description": ""
//         },
//         {
//           "name": "helicopter",
//           "picture": "https://s3-prod-europe.autonews.com/s3fs-public/styles/800x600/public/Tesla-Model%20S%20PLAID%20web.jpg",
//           "description": "https://www.army-technology.com/wp-content/uploads/sites/3/2019/01/3l-image-UH-X-Utility-Helicopter.jpg"
//         }
//       ]
//     }
//   ]
// }