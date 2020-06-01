import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography'
import Skyline from './Media/Worli.jpg'
import logo from './Media/logo_bg.jpg'
import shopperstop from './Media/shopperstop.png'
import hypercity from './Media/hypercity.png'
import amazon from './Media/amazon.jpg'
import arvind from './Media/arvind.png'
import multiples from './Media/multiples.png'
import fsc from './Media/fsc.png'
import vulcan from './Media/vulcan.png'
import landmark from './Media/landmark.png'
import nse from './Media/nse.png'
import koovs from './Media/koovs.jpg'
import flf from './Media/flf.jpg'
import fretail from './Media/fretail.jpg'
import foodworld from './Media/foodworld.png'
import Footer from './Footer';

const styleItem = {display: 'flex', 'padding-top': '5vh', 'padding-left': '5vw'}
const styleHeadline = {color:'#f8b04b'}

export default function Transactions() {
    return(
        <div>
            <div style={{'min-height': '95vh', 'padding-bottom': '5vh'}}>
                <NavBar></NavBar>
                <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                    <img src={Skyline} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.7'}}/>
                </div>
                <div class="row" style={{position: 'relative', 'margin-top': '-15vh', 'padding-left': '12vw'}}>
                    <Typography variant="h4" style={{color: 'white'}}>
                        Transactions
                    </Typography>
                </div>
                
                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '15vh'}}>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={amazon} alt="Amazon" width="40%" style={{'padding-right': '5%'}}/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Strategic Investment in Future Coupons by Amazon
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Undisclosed (Investment) <br/> August 2019
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={nse} alt="NSE" width="30%" style={{'padding-right': '5%'}}/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                NSE Block Deal 
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                November 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={landmark} alt="Landmark Cars" width="40%" style={{'padding-right': '5%'}}/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Consolidation of Landmark Cars group companies
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                (Restructuring) <br/> September 2018
                                </Typography>
                            </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={0} direction="row" justify="center">
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={koovs} alt="Koovs PLC" width="40%" style={{'padding-right': '5%'}}/>
                                <img src={flf} alt="Future Lifestyle" width="20%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of 29.9% Stake in Koovs PLC by Future Lifestyle
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Rs 1,400 Mn (Investment) <br/> July 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={foodworld} alt="Foodworld" width="20%" style={{'padding-right': '5%'}}/>
                                <img src={fretail} alt="Future Retail" width="40%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of Foodworld Supermarkets by Future Retail
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Rs 408 Mn (Acquisition) <br/> May 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={arvind} alt="Arvind Ltd" width="30%" style={{'padding-right': '5%'}}/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Demerger & Listing of Arvind Ltd Branded Apparel & Engineering Businesses
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Rs 66,000 Mn (Restructuring) <br/> March 2018
                                </Typography>
                            </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={0} direction="row" justify="center">
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={vulcan} alt="Vulcan Express" width="30%" style={{'padding-right': '5%'}}/>
                                <img src={fsc} alt="Future Supply Chain Solutions" width="20%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of Vulcan Express by Future Supply Chain Solutions
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                January 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={shopperstop} alt="Shopper Stop" width="45%" style={{'padding-right': '5%'}}/>
                                <img src={hypercity} alt="HyperCity" width="45%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of HyperCity by Future Retail
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Rs 9,100 Mn (Acquisition) <br/> October 2017
                                </Typography>
                            </Grid> 
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={arvind} alt="Arvind Ltd" width="30%" style={{'padding-right': '5%'}}/>
                                <img src={multiples} alt="Multiples" width="50%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                PE Investment for Arvind LTD by Multiples
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                Rs 7,400 Mn (Private Equity) <br/> October 2016
                                </Typography>
                            </Grid>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}