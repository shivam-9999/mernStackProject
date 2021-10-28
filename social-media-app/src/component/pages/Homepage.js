import React from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router";
import Nav from "../Nav";

function Homepage() {
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Nav/>
      <div className="container">
        hello
      </div>
    </Box>
  );
}

export default Homepage;
