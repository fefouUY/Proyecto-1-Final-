import React from "react";
import Vite from 'vite';
import "./index.css";
import "./App.css";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from "./components/navigation";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Analisis from "./components/Analisis";
import LoginForm from "./components/LoginForm";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Historia" element={<Historia />} />
      <Route path="/Analisis" element={<Analisis />} />
      <Route path="/LoginForm" element={<LoginForm />} />
      <Route path="/Contactos" element={<Contactos />} />
      <Route path="*" element={<div>404 - Página no encontrada</div>} />
    </Routes>
    <Footer />
  </Router>
);


