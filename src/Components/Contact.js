import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Skyline from './Media/bg2.png'
import GoogleApiWrapperr from './Maps'
import Footer from './Footer';
import './Scroll.css';
import bg3 from './Media/bg3.png';
import bg2 from './Media/bg2.png';


const font = 'Roboto';
const grey = '#808080';
const styleMap = {width: '100vw', height: '70vh', 'line-height': '0', float: 'left'};
const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
const styleHeadline = {color:'#f8b04b', fontFamily: font}
  

export default function Contact() {
    return(
        <div>
            <div style={{'min-height': '90vh', 'padding-bottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg2} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'margin-top': '-10vh', 'padding-left': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Contact
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'margin-top': '-10vh', 'padding-left': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Contact
                        </Typography>
                    </div>
                </Hidden>
                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '10vh'}}>
                    <Grid item xs={12} style={styleMap}>
                        <GoogleApiWrapperr/>
                    </Grid>
                    <Grid container direction="row" justify="center" xs={12} sm={12} style={{position: 'relative', 'padding-top': '5vh', 'margin-bottom': '0vh', 'padding-bottom': '0vh'}}>
                        <Grid item xs={0} sm={1}></Grid>
                        <Grid item xs={10} sm={2} direction="column" >
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
                        <Grid item xs={1} sm={0}></Grid>
                        <Grid item xs={10}  sm={2} direction="column" >
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Email
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                                contact@mettacapital.in
                                </Typography>
                        </Grid>
                        <Grid item xs={1} sm={0}></Grid>
                        <Grid item xs={10} sm={2} direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Tel
                                </Typography>
                                <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                                +91 22 2611-9900
                                </Typography>
                        </Grid>
                        <Grid item xs={1} sm={1}></Grid>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}