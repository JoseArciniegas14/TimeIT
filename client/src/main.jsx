import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "./scss/index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
