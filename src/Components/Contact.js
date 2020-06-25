import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Footer from './Footer';
import './Scroll.css';
import bg3 from './Media/bg3.png';
import bg2 from './Media/bg2.png';


const font = 'Lato';
const grey = '#808080';
const styleMap = {width: '100vw', height: '70vh', 'lineHeight': '0', float: 'left'};
const styleHeadline = {color:'#f8b04b', fontFamily: font}
  

export default function Contact() {
    return(
        <div>
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg2} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Contact
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Contact
                        </Typography>
                    </div>
                </Hidden>
                <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '10vh'}}>
                    <Grid item xs={12} style={styleMap}>
                        <a href="https://www.google.com/maps/place/Metta+Capital+Advisors+LLP/@19.0975382,72.8477836,17z/data=!3m1!4b1!4m5!3m4!1s0x3be7c9498df952fb:0x9defdc99ff341c7e!8m2!3d19.0975382!4d72.8499723" target="_blank" rel="noopener noreferrer" >
                            <img src={maps} alt="Maps" style={{'width': '100vw'}}/>
                        </a>
                    </Grid>
                    <Grid item xs={12}  style={{position: 'relative', 'paddingTop': '5vh', 'marginBottom': '0vh', 'paddingBottom': '0vh'}}>
                        <Grid container direction="row" justify="center">
                            <Grid item xs={10} sm={3}>
                                <Grid container direction="column">
                                    <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                    Address
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                                    Metta Capital Advisors LLP <br/>
                                    803, Symphony, <br/>
                                    Nehru Rd, Vile Parle East, <br/>
                                    Mumbai, Maharashtra 400057
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={10}  sm={3} >
                                <Grid container direction="column">
                                    <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                    Email
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                                    contact@mettacapital.in
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item xs={10} sm={2}>
                                <Grid container direction="column">
                                    <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                    Tel
                                    </Typography>
                                    <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                                    +91 22 2611-9900
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}