import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Skyline from './Media/bg2.png'
import Footer from './Footer';
import './Scroll.css';
import bg3 from './Media/bg3.png';
import bg2 from './Media/bg2.png';


import hypercity from './Media/hypercity.png'
import amazon from './Media/amazon.jpg'


const font = 'Helvetica Neue';
const grey = '#808080';

const styleItem = {display: 'flex', 'padding-top': '2vh'}
const styleHeadline = {color:'#f8b04b', border: '2px solid #f8b04b', padding: '2vw', cursor: 'pointer', fontFamily: font}


export default function Expertise() {

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
                            Strategic Advisory
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'margin-top': '-10vh', 'padding-left': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Strategic Advisory
                        </Typography>
                    </div>
                </Hidden>


                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '8vh', 'padding-left': '12vw', 'padding-right': '3vw'}}>
                    <Grid item xs={10} sm={6} style={styleItem}>
                            <Typography variant="body1" gutterBottom id="MA" style={{color: grey, fontFamily: font}}>
                            <span style={{fontWeight:'bold'}}>We provide a range of services across the lifecycle to our clients, which aligns with their vision and growth trajectory. Often embedded into client management teams, Metta Capital participates in discussions on strategy, financing, strategic options and other important initiatives.</span>
                            <br/> <br/> 
                            Our clients see us as partners in their long term growth and strategy. 
                            <br/> <br/> 
                            We are seen as bouncing boards, and support, stimulate and challenge our client’s point of view and support their strategic decision-making process. 
                            <br/><br/>
                            Many of our transactions are thus natural outcomes of our engagement with our clients. 
                            </Typography>
                    </Grid>
                    <Grid item xs={10} sm={6} style={styleItem}>
                        <Grid container direction="column">
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={4} style={{textAlign: 'right'}}>
                                    <img src={amazon} style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                    Investment in Future Coupons by Amazon
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={4} style={{textAlign: 'right'}}>
                                    <img src={amazon} style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                    Investment in Future Coupons by Amazon
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={4} style={{textAlign: 'right'}}>
                                    <img src={amazon} style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2">
                                    Investment in Future Coupons by Amazon
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