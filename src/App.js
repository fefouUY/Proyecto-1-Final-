import React from 'react';
import Vite from 'vite';
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./components/navigation";
import Home from "./components/Home";
import Historia from "./components/Historia";
import Analisis from "./components/Analisis";
import LoginForm from "./components/LoginForm";
import Contactos from "./components/Contactos";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
        <Route path="/Home" exact component={() => <Home />}/>
          <Route path="/Analisis" exact component={() => <Analisis />}/>
          <Route path="/Contactos" exact component={() => <Contactos />}/>
          <Route path="/LoginForm" exact component={() => <LoginForm />}/>
          <Route path="/Historia" exact component={() => <Historia />}/>
        </Switch>
        <Footer />
      </Router>
    </div>  
  );
}
export default App;
