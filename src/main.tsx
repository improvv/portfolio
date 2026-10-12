import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { MotionConfig } from "motion/react";
import "@fontsource/anton/latin-400.css";
import "@fontsource-variable/noto-sans-kr";
import "./styles.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MotionConfig reducedMotion="user">
      <HashRouter>
        <App />
      </HashRouter>
    </MotionConfig>
  </React.StrictMode>,
);
