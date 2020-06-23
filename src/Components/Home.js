import React from 'react';
import NavBarHome from './NavBarHome';
import Skyline from './Media/Worli.jpg';
import bg from './Media/bg.jpg';
import bg2 from './Media/bg2.png';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import './Scroll.css';


const grey = '#808080';
const font = 'Helvetica Neue';

const styleItem = {'padding-top': '3vw', 'padding-left': '5vw'}
const styleHeadline = {color:'#f8b04b', fontFamily: font}
const styleMap = {width: '100vw', height: '30vh'};

function App() {
  return (
    <div>
      <div style={{'min-height': '90vh', 'padding-bottom': '5vh'}}>
        <NavBarHome></NavBarHome>
        <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative'}}>
          <img src={bg} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '90vh', 'width': '100vw'}}/>
        </div>
        <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '2vh'}}>
            <Grid item xs={10} sm={3} style={styleItem}>
                <NavLink to="/expertise" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <Grid container direction="row">
                      <Grid item xs={2} sm={3} md={2}>
                        <Typography gutterBottom variant="h5" style={styleHeadline}>
                        1
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sm={9} md={10}>
                        <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                        Ranked #1 for P/E and M&A transactions in Fashion and Retail in India for most of 2016-2020
                        </Typography>
                      </Grid>
                    </Grid>
                </NavLink>
            </Grid>
            <Grid item xs={10} sm={3} style={styleItem}>
                <NavLink to="/team" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <Grid container direction="row">
                      <Grid item xs={2} sm={3} md={2}>
                        <Typography gutterBottom variant="h5" style={styleHeadline}>
                        17
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sm={9} md={10}>
                        <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                        Our Leadership Team has an average of 17 years of experience in Investment Banking.
                        </Typography>
                      </Grid>
                    </Grid>
                </NavLink>
            </Grid>
            <Grid item xs={10} sm={3} style={styleItem} >
                <NavLink to="/transactions" style={{textDecoration: 'none', cursor: 'pointer'}}>
                    <Grid container direction="row">
                      <Grid item xs={2} sm={3} md={2}>
                        <Typography gutterBottom variant="h5" style={styleHeadline}>
                        10
                        </Typography>
                      </Grid>
                      <Grid item xs={10} sm={9} md={10}>
                        <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                        Executed 10 transactions in the last 4 years.
                        </Typography>
                      </Grid>
                    </Grid>
                </NavLink>
            </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}

export default withWidth()(App);
