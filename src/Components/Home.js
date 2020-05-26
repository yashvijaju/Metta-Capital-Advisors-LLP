import React from 'react';
import NavBarHome from './NavBarHome';
import Skyline from './Media/Worli.jpg'

function App() {
  return (
    <div>
      <NavBarHome></NavBarHome>
      <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative'}}>
        <img src={Skyline} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '90vh', 'width': '100vw'}}/>
      </div>
    </div>
  );
}

export default App;
