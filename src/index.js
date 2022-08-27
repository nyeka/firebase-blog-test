import React from "react";
import ReactDOM from "react-dom/client";
import Google from "./Google";
import "./index.css";
import Login from "./Sign";
import Main from "./components/layouts/Main";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Log from "./Log";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Log />
  </Router>
);
