import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { HashRouter as Router } from "react-router-dom";
import Log from "./Log";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router base="/">
    <Log />
  </Router>
);
