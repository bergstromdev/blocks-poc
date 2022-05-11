import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./fonts/Milanesa Serif Light.woff2";
import "./fonts/Indigo Antiqua Pro Text Italic.woff2";
import "./fonts/Indigo Antiqua Pro Text Regular.woff2";
import "./fonts/Monotype - SackersGothicStd-Light.woff2";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
