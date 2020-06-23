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
                            Fund Raising
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'margin-top': '-10vh', 'padding-left': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Fund Raising
                        </Typography>
                    </div>
                </Hidden>


                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '8vh', 'padding-left': '12vw', 'padding-right': '3vw'}}>
                    <Grid item xs={10} sm={6} style={styleItem}>
                            <Typography variant="body1" gutterBottom id="MA" style={{color: grey, fontFamily: font}}>
                            <span style={{fontWeight:'bold'}}>We have deep sectoral expertise in fashion, retail & consumer sector and have emerged as the go-to investment bank for companies seeking capital in the sector.</span>
                            <br/> <br/> 
                            We advise companies, across sectors, in raising capital across their growth cycle. 
                            <br/><br/>
                            Our network with global and domestic investors and deep insights into business and capital markets allows us to find the right capital and right partner for our clients. We work with our client across the transaction, right from evaluating the capital needs, to identifying the target investors, creating deal collaterals, negotiations, due diligence and documentation. 
                            <br/><br/>
                            We have deep relationships with leading global and domestic private equity funds. We work closely with them on some of their portfolio companies and also help them evaluate investment opportunities. Our understanding of businesses and the capital markets, deal drivers and valuations, allow us to add value as both, advisors to the investor as well as the investee. 
                            <br/> <br/> 
                            
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