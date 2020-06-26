import ReactGA from 'react-ga';
import React, { Component }  from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
       <BrowserRouter>
        <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/transactions" component={Transactions}/>
              <Route path="/contact" component={Contact}/>
              <Route path="/about-us" component={WhyUs}/>
              <Route path="/expertise" component={Expertise}/>
              <Route path="/team" component={Team}/>
              <Route path="/mergers-acquisitions" component={MA}/>
              <Route path="/strategic-advisory" component={SA}/>
              <Route path="/fund-raise" component={FR}/>
              <Route path="" component={Home} />
              <Route path="/*" component={Home} />
              <Route component={Home} />
           </Switch>
           
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
