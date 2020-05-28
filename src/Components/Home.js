import React from 'react';
import NavBarHome from './NavBarHome';
import Skyline from './Media/Worli.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';


const styleItem = {display: 'flex', 'flexDirection': 'column', padding: '2vw'}
const styleHeadline = {color:'#f8b04b'}

const styleMap = {width: '100vw', height: '30vh'};

function App() {
  return (
    <div>
      <NavBarHome></NavBarHome>
      <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative'}}>
        <img src={Skyline} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '90vh', 'width': '100vw'}}/>
      </div>
      <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '5vh', 'padding-bottom': '0vh'}}>
          <Grid item xs={10} sm={3} direction="column" style={styleItem} >
              <NavLink to="/about-us" style={{textDecoration: 'none'}}>
                  <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                  About Us
                  </Typography>
                  <Typography variant="body2" gutterBottom style={{color: 'black'}}>
                  Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder
                  </Typography>
              </NavLink>
          </Grid>
          <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
              <NavLink to="/expertise" style={{textDecoration: 'none'}}>
                  <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                  Our Expertise
                  </Typography>
                  <Typography variant="body2" gutterBottom style={{color: 'black'}}>
                  Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder
                  </Typography>
              </NavLink>
          </Grid>
          <Grid item xs={10} sm={3} direction="column" style={styleItem}>
              <NavLink to="/team" style={{textDecoration: 'none'}}>
                  <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                  Our Team
                  </Typography>
                  <Typography variant="body2" gutterBottom style={{color: 'black'}}>
                  Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder Description goes here bcause this is a placeholder
                  </Typography>
              </NavLink>
          </Grid>
      </Grid>
      <Footer/>
    </div>
  );
}

export default withWidth()(App);
