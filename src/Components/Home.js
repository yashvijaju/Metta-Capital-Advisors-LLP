import React from 'react';
import NavBarHome from './NavBarHome';
import bg from './Media/bg.jpg';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from './Footer';
import { NavLink } from 'react-router-dom';
import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';
import './Scroll.css';


const grey = '#808080';
const font = 'Lato';

const styleItem = {'paddingTop': '3vw', 'paddingLeft': '5vw'}
const styleHeadline = {color:'#f8b04b', fontFamily: font}

function App() {
  return (
    <div>
      <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
        <NavBarHome></NavBarHome>
        <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative'}}>
          <img src={bg} alt="Worli Sea Link" style={{objectFit: 'fill', maxHeight: '90vh', width: '100vw', zIndex: '-1'}}/>
        </div>
        <Hidden xlDown>
          <div style={{marginTop:'-75vh', paddingLeft: '10vw', paddingBottom: '50vh'}}>
            <Typography variant="h3" style={{color:'#000000', fontFamily: font, fontWeight:'bold'}}>
              Metta Capital Advisors LLP
            </Typography>
            <Typography variant="h6" style={{color:'#000000', fontFamily: font}}>
              A boutique investment bank led by seasoned bankers.
            </Typography>
          </div>
        </Hidden>
        <Hidden xsUp>
          <Hidden xsDown>
            <div style={{marginTop:'-50vh', paddingLeft: '10vw', paddingBottom: '35vh'}}>
              <Typography variant="h3" style={{color:'#000000', fontFamily: font}}>
                Metta Capital Advisors LLP
              </Typography>
              <Typography variant="h6" style={{color:'#000000', fontFamily: font}}>
                A boutique investment bank led by seasoned bankers.
              </Typography>
            </div>
          </Hidden>
          <Hidden smUp>
            <div style={{marginTop:'-15vh', paddingLeft: '10vw', paddingBottom: '0vh'}}>
              <Typography variant="h5" style={{color:'#ffffff', fontFamily: font}}>
                Metta Capital Advisors LLP
              </Typography>
              <Typography variant="body2" style={{color:'#ffffff', fontFamily: font}}>
                A boutique investment bank led by seasoned bankers.
              </Typography>
            </div>
          </Hidden>
        </Hidden>
        
        <Hidden smDown>
          <Grid container spacing={0} direction="row" style={{paddingTop: '2vh', backgroundColor: '#F9DDB7', padding: '5vh 0vw 5vh 10vw'}}>
            <Grid item xs={10}>
              <Typography variant="h4" style={{color: 'black', fontFamily: font}}>
                Metta Capital Advisors LLP
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body1" style={{color: 'black', fontFamily: font}}>
                A boutique investment bank led by seasoned bankers
              </Typography>
            </Grid>
          </Grid>
        </Hidden>
        <Hidden mdUp>
          <Grid container spacing={0} direction="row" style={{paddingTop: '2vh', backgroundColor: '#F9DDB7', padding: '3vh 0vw 3vh 10vw'}}>
            <Grid item xs={10}>
              <Typography variant="h6" style={{color: 'black', fontFamily: font}}>
                Metta Capital Advisors LLP
              </Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography variant="body2" style={{color: 'black', fontFamily: font}}>
                A boutique investment bank led by seasoned bankers
              </Typography>
            </Grid>
          </Grid>
        </Hidden>

        <Grid container spacing={0} direction="row" style={{padding: '5vh 0vw 5vh 5vw'}}>
            <Grid item xs={10} sm={4} style={styleItem}>
                <NavLink to="/mergers-acquisitions" style={{textDecoration: 'none', cursor: 'pointer'}}>
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
                        We have executed 10 transactions in the last 4 years.
                        </Typography>
                      </Grid>
                    </Grid>
                </NavLink>
            </Grid>
            <Grid item xs={10} sm={4} style={styleItem}>
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
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}

export default withWidth()(App);
