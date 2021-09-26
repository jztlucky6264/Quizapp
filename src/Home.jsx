import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom";

const Home = ({ setWelcomeUser }) => {
  const [name, setName] = useState("");
  const history = useHistory();

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleClick = () => {
    if (name === "") {
      alert("please fill your name");
    } else {
      history.push("/quiz");
    }
    setWelcomeUser(name);
    setName("");
  };

  return (
    <>
      <div className="bg-light w-100 pt-4 pb-4">
        <h1 className="text-center  text-info">TECHY QUIZ APP</h1>
      </div>

      <div className="info_div container mt-5 text-center pt-4 pb-5  d-flex justify-content-between align-items-centerd flex-column ">
        <div className="mt-5 mb-5">
          <TextField
            value={name}
            onChange={handleName}
            id="standard-basic"
            label="Standard"
            variant="standard"
          />
        </div>
        <div className="mt-5 ">
          <Button onClick={handleClick} variant="contained">
            Take Quiz
          </Button>
        </div>
      </div>
    </>
  );
};

export default Home;
