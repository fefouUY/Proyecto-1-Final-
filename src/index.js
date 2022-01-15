import React from "react";
import "./index.css";
import "./App.css";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Ingresar from "./components/Login";
import Analisis from "./components/Analisis";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";


ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Historia" element={<Historia />} />
      <Route path="/Login" element={<Ingresar />} />
      <Route path="/Contactos" element={<Contactos />} />
      <Route path="/Analisis" element={<Analisis/>} />
    </Routes>
    <Footer />
  </Router>,
  document.getElementById("root")
);




