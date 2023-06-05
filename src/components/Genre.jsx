import * as React from "react";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { ToggleButton } from "@mui/material";
import "../index.css";
import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import { useEffect } from "react";

function Genre({ genre, setGenre }) {
  const [alignment, setAlignment] = React.useState("Romance");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(genre);
  };

  useEffect(() => {
    setGenre(alignment);
  }, [alignment]);

  return (
    <div style={{ textAlign: "center", paddingBottom: "60px" }}>
      <h3> Please select a genre</h3>
      <ToggleButtonGroup
        color="primary"
        exclusive
        onChange={handleAlignment}
        value={alignment}
        aria-label="Platform"
        sx={{ color: "#432263" }}
        size="large"
      >
        <ToggleButton value="Romance">Romance</ToggleButton>
        <ToggleButton value="Horror">Horror</ToggleButton>
        <ToggleButton value="Sci-fi">Sci fi</ToggleButton>
        <ToggleButton value="Comedy">Comedy</ToggleButton>
        <ToggleButton value="Fiction">Fiction</ToggleButton>
        <ToggleButton value="Fantasy">Fantasy</ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default Genre;
