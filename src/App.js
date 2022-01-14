import React from 'react';
import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Historia from "./components/Historia";
import Analisis from "./components/Analisis";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/Analisis" exact component={() => <Analisis />}/>
          <Route path="/Historia" exact component={() => <Historia />}/>
        </Switch>
        <Footer />
      </Router>
    </div>  
  );
}
export default App;
