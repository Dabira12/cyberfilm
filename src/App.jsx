import { useEffect, useState } from "react";
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

import Typewriter from 'typewriter-effect/dist/core';

import PropagateLoader from "react-spinners/PropagateLoader";

function App() {
  const [genre, setGenre] = useState("Romance");
  const [length, setLength] = useState(300);
  const [characters, setCharacters] = useState(1);
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);


  var i = 0;
  var txt = output; /* The text */

  var speed = 20; /* The speed/duration of the effect in milliseconds */

  function typeWriter() {
    document.getElementById("TextField").scrollTop = document.getElementById("TextField").scrollHeight 
    if (i < txt.length) {
      document.getElementById("TextField").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }


  useEffect(() => {
   
    
    document.getElementById("TextField").innerHTML = ""
    if (output != "") {
      let story = {
        title: "",
        genre: genre,
        length: length,
        character: characters,
        output: output,
      };

     

      // var typewriter = new Typewriter(text, {
      //   loop: true,
      //   delay: 75,
      // });
     
     

      

      typeWriter();

      let story_serialized = JSON.stringify(story);

      // localStorage.setItem("test", story_serialized);

      // let test = localStorage.getItem("test");
    }
    return () => {
      // Cleanup code (optional) goes here
      // This function will be called before the next side effect is executed
    };
  }, [output]); // The empty array as the second argument means the effect will only run once (on mount) and not on subsequent renders

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
            paddingLeft: "10px",
          }}
          onClick={() =>
            runPrompt({
              output,
              setOutput,
              setLoading,
              length,
              genre,
              characters,
            })
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

      <TextField className="TextField" id="TextField"
        sx={{ width: "85%", paddingLeft: "10%" }}
        multiline={true}
        // value={output}
        minRows="10"
        
        InputProps={{ readOnly: true }}
      >
      
      
      </TextField>
    </div>
  );
}

export default App;
