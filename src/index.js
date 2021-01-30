import React from "react";
import ReactDOM from "react-dom";
import Main from "./routes/main";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
