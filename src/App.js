import React, { useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import { Route } from "react-router-dom";
import Quiz from "./Quiz";

const App = () => {
  const [welcomeUser, setWelcomeUser] = useState("");

  return (
    <>
      <Route exact path="/">
        <Home setWelcomeUser={setWelcomeUser} />
      </Route>
      <Route exact path="/quiz">
        <Quiz name={welcomeUser} />
      </Route>
    </>
  );
};

export default App;
