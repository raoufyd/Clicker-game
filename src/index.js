import React from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Log from "./components/Log";
import Rank from "./components/Rank";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/home" element={<App />} />
      <Route path="/" element={<Log />} />
      <Route path="/rank" element={<Rank />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
