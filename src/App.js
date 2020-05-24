import React, { Component }  from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Clients from './Components/Clients';
import WhyUs from './Components/WhyUs';
import Contact from './Components/Contact';
import Expertise from './Components/Expertise';
import Media from './Components/Media';
import Team from './Components/Team';
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <NavBar></NavBar>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/clients" component={Clients}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/why-us" component={WhyUs}/>
             <Route path="/expertise" component={Expertise}/>
             <Route path="/media" component={Media}/>
             <Route path="/team" component={Team}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;
