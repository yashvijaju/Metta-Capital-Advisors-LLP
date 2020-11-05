import React, { Component }  from 'react';

import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Transactions from './Components/Clients';
import WhyUs from './Components/WhyUs';
import Contact from './Components/Contact';
import Expertise from './Components/Expertise';
import Team from './Components/Team';

import MA from './Components/M&A';
import SA from './Components/StrategicAdvisory';
import FR from './Components/FundRaise';



class App extends Component {
  render() {
    return (      
      <HashRouter>
        <Switch>
          <Route path="/transactions" >
            <Transactions/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/about-us">
            <WhyUs/>
          </Route>
          <Route path="/expertise">
            <Expertise/>
          </Route>
          <Route path="/team">
            <Team/>
          </Route>
          <Route path="/mergers-acquisitions">
            <MA/>
          </Route>
          <Route path="/strategic-advisory">
            <SA/>
          </Route>
          <Route path="/fund-raise">
            <FR/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
          <Route>
            <Home/>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
