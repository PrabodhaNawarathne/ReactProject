import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { Design } from './components/Design';
import { About } from './components/About';
import  Contact  from './components/contact/Contact';
import { WebPackages } from './components/ourServices/WebPackages';



function App() {
  return (
    <div className="App">
      <Router>
       <Switch>
          <Route exact path="/" />
          <div>
          <Navbar />
          <Route   path="/home" component={HomePage} />
          <Route   path="/design" component={Design} />
          <Route   path="/aboutPage" component={About} />
          <Route   path="/contactPage" component={Contact} />
          <Route   path="/webPackages" component={WebPackages} />
          </div>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
