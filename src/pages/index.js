import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const HomePage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to the Home Page</h1>
      <p>This is a simple React application with routing.</p>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/about"
      >
        Go to About Page
      </Button>
    </div>
  );
}