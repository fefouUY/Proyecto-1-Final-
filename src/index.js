import React from "react";
import "./index.css";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Historia from "./components/Historia";
import Analisis from "./components/Analisis";
import Footer from "./components/Footer";


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

