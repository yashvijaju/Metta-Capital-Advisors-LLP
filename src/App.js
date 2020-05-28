import React, { Component }  from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Transactions from './Components/Clients';
import WhyUs from './Components/WhyUs';
import Contact from './Components/Contact';
import Expertise from './Components/Expertise';
import Team from './Components/Team';


class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/transactions" component={Transactions}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/about-us" component={WhyUs}/>
             <Route path="/expertise" component={Expertise}/>
             <Route path="/team" component={Team}/>
            <Route component={Error}/>
           </Switch>
           
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
