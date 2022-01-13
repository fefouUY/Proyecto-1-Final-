import "./index.css";
import "./App.css";
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Analisis,Footer,Navigation,Home,Historia,} from './components';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />}/>
          <Route path="/Analisis" exact component={() => <Analisis />}/>
          <Route path="/Historia" exact component={() => <Historia />}/>
        </Switch>
        <Footer />
      </Router>
    </div>  
  );
}export default App;
