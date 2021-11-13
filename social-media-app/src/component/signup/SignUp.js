import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import { green, brown } from "@mui/material/colors";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "../../redux/type";
import { registerUser } from "../../redux/Actions/authActions";
import Nav from "../Nav";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const CssSelectField = styled(Select)({
  "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderColor: brown[500],
  },
  "&:hover .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
    borderColor: "yellow",
  },
  "&.Mui-focused .css-1d3z3hw-MuiOutlinedInput-notchedOutline ": {
    borderColor: green[200],
  },
  "& .css-2g4it7-MuiFormLabel-root-MuiInputLabel-root.Mui-focused": {
    color: green[200],
  },
});

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "green",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: brown[500],
    },
    "&:hover fieldset": {
      borderColor: "yellow",
    },
    "&.Mui-focused fieldset": {
      borderColor: green[200],
    },
  },
});

function SignUp() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [_input, _setInput] = useState({ role: "user" });
  const [_invalidInput, _setInvalidInput] = useState({
    name: false,
    email: false,
    password: false,
    password_confirmation: false,
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    _setInput({ ..._input, [name]: value });
  };

  const handleRoute = (e) => {
    e.preventDefault();
    history.push("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(_input, history));
  };

  const invalidEmail = (email) => {
    const emailRegexp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegexp.test(email)) return true;
    else return false;
  };

  const invalidPassword = (password) => {
    const passwordRegexp =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{5,16}$/;
    if (!passwordRegexp.test(password)) return true;
    else return false;
  };

  const validateName = (e) => {
    const name = e.target.value;
    if (!name) _setInvalidInput({ ..._invalidInput, name: true });
    else _setInvalidInput({ ..._invalidInput, name: false });
  };

  const validateEmail = (e) => {
    const email = e.target.value;
    if (invalidEmail(email))
      _setInvalidInput({ ..._invalidInput, email: true });
    else _setInvalidInput({ ..._invalidInput, email: false });
  };

  const validatePassword = (e) => {
    const password = e.target.value;
    if (!password || invalidPassword(password))
      _setInvalidInput({ ..._invalidInput, password: true });
    else _setInvalidInput({ ..._invalidInput, password: false });
  };

  const validateConfirmPassword = (e) => {
    const password_confirmation = e.target.value;
    if (password_confirmation !== _input.password)
      _setInvalidInput({ ..._invalidInput, password_confirmation: true });
    else _setInvalidInput({ ..._invalidInput, password_confirmation: false });
  };

  return (
    <React.Fragment>
      <Nav />
      <Button
        variant="contained"
        color="danger"
        sx={{
          marginTop: "2rem",
          marginLeft: "2rem",
          color: "white",
        }}
        onClick={handleRoute}
        startIcon={<ArrowBackIosNewIcon />}
      >
        back
      </Button>
      <Container component="main" maxWidth="xs">
        <CssBaseline />

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
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid container item xs={6}>
                <CssTextField
                  // autoComplete="given-name"
                  name="name"
                  required
                  id="Name"
                  label="First Name"
                  onChange={handleChange}
                  onBlur={validateName}
                  error={_invalidInput.name}
                  helperText={
                    _invalidInput.name ? "Please enter a valid Name" : " "
                  }
                />
              </Grid>
              <Grid container item xs={6} >
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <CssSelectField
                    name="role"
                    id="demo-simple-select-label"
                    value={_input.role}
                    label="Age"
                    onChange={handleChange}
                  >
                    <MenuItem value={"user"}>user</MenuItem>
                    <MenuItem value={"admin"}>admin</MenuItem>
                  </CssSelectField>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  name="email"
                  required
                  fullWidth
                  id="Email"
                  label="Email Address"
                  autoComplete="email"
                  onChange={handleChange}
                  onBlur={validateEmail}
                  error={_invalidInput.email}
                  helperText={
                    _invalidInput.email ? "Please enter a valid Email" : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  name="password"
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  id="Password"
                  onChange={handleChange}
                  onBlur={validatePassword}
                  error={_invalidInput.password}
                  helperText={
                    _invalidInput.password
                      ? "Please enter a valid password"
                      : " "
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <CssTextField
                  name="password_confirmation"
                  required
                  fullWidth
                  label="confirm Password"
                  type="password"
                  id="c_password"
                  onChange={handleChange}
                  onBlur={validateConfirmPassword}
                  error={_invalidInput.password_confirmation}
                  helperText={
                    _invalidInput.password_confirmation
                      ? "password is not matching"
                      : " "
                  }
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2" color="secondary.main">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
export default SignUp;
