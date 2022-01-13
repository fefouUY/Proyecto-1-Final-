import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Analisis,Footer,Navigation,Historia,} from "./components";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/Historia" element={<Historia />} />
      <Route path="/Analisis" element={<Analisis/>} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);
