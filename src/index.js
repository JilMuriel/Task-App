import React from "react";
import ReactDOM from "react-dom";
import Main from "./routes/main";
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
