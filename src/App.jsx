import { useState } from "react";
import "./index.css";

import Genre from "./components/Genre";
import Length from "./components/Length";
import Characters from "./components/Characters";
import { Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import "./index.css";
import { runPrompt } from "./api";
import { TextField } from "@mui/material";
import { Grid } from "@mui/material";
import logo from "./assets/logo.jpeg";

import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [genre, setGenre] = useState("Romance");
  const [length, setLength] = useState(300);
  const [characters, setCharacters] = useState(1);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <div className="navbar">
            <h1>Cyberfilm AI</h1>

            <h5 style={{ color: "#432263" }}> Powered by OPEN AI | GPT</h5>
          </div>
        </Grid>

        <Grid item>
          <img src={logo} width={100}></img>
        </Grid>
      </Grid>

      <Genre genre={genre} setGenre={setGenre} />

      <Length length={length} setLength={setLength} />
      <Characters />

      <div
        style={{
          width: "100%",
          margin: "auto",
          display: "block",
          paddingBottom: "60px",
          textAlign: "center",
        }}
      >
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          sx={{
            color: "white",
            textAlign: "center",
            backgroundColor: "#432263",
            height: "100%",
            width: "60%",
            textAlign: "center",
            paddingLeft: "10px",
          }}
          onClick={() =>
            runPrompt({ output, setOutput, setLoading, length, genre })
          }
        >
          Generate Story
        </Button>
      </div>

      <div style={{ textAlign: "center", paddingBottom: "30px" }}>
        <PropagateLoader
          color="purple"
          loading={loading}
          aria-label="Loading Spinner"
        ></PropagateLoader>
      </div>

      <TextField
        sx={{ width: "85%", paddingLeft: "10%" }}
        multiline={true}
        value={output}
        minRows="10"
        InputProps={{ readOnly: true }}
      ></TextField>
    </div>
  );
}

export default App;
