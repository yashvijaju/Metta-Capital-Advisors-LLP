import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Skyline from './Media/bg2.png'
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
import nulll from './Media/null.jpg'
import Footer from './Footer';
import './Scroll.css';
import bg3 from './Media/bg3.png';
import bg2 from './Media/bg2.png';

import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';


const font = 'Helvetica Neue';
const grey = '#808080';

const styleItem = {display: 'flex', 'padding-top': '3vh', 'padding-left': '5vw', fontFamily: font}
const styleDesc = {color: grey, fontFamily: font}
const styleHeadline = {color:'#f8b04b', fontfamily: font}


const intMax = 8;

export default function Transactions() {

    const [arrayIndex, setArrayIndex] = React.useState(0);

    function handleClick(props) {
        if (props === "prev") {
            if (arrayIndex !== 0) {
                var x = arrayIndex - 1;
            }
            else {
                var x = intMax;
            }
            
            setArrayIndex(x);
        }
        if (props === "next") {
            if (arrayIndex !== intMax) {
                var x = arrayIndex + 1;
            }
            else {
                var x = 0;
            }
            setArrayIndex(x);
        }
    };

    let arrayImg = [fretail,shopperstop,arvind,arvind,koovs,foodworld,vulcan,nse,landmark];
    let arrayImg2 = [nulll,hypercity,multiples,nulll,flf,fretail,fsc,nulll,nulll];
    let arrayTitles = ['Investment in Future Coupons by Amazon','Sale of HyperCity to Future Retail','Private Equity Investment in Arvind Fashions by Multiples','Demerger & Listing of Branded Apparel & Engineering Businesses','Acquisition of 29.9% Stake in Koovs PLC by Future Lifestyle','Acquisition of Foodworld Supermarkets by Future Retail','Acquisition of Vulcan Express by Future Supply Chain Solutions','NSE Block Deal','Consolidation of Landmark Auto companies'];
    let arrayDesc = ['Undisclosed (Investment)','Represented both Buy- and Sell- side. Rs 9,100 Mn (Acquisition)','Rs 7,400 Mn (Private Equity)','Rs 66,000 Mn (Restructuring)','Rs 1,400 Mn (Investment)','Rs 408 Mn (Acquisition)','Acquisition','','(Restructuring)'];
    let arrayMedia = ['','','','','','','','',''];


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
                            Recent Transactions
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'margin-top': '-10vh', 'padding-left': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Transactions
                        </Typography>
                    </div>
                </Hidden>

                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '20vh'}}>
                    <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>{handleClick("prev")}}>
                        <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="large" style={{cursor: 'pointer'}}/>
                    </Grid>
                    <Hidden smUp>
                        <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                            <Grid item xs={12} style={{display: 'flex', flexDirection: 'row'}}>
                                <img src={arrayImg[arrayIndex]} alt="Future Retail" width="45%" style={{marginRight: '3vw'}}/>
                                <img src={arrayImg2[arrayIndex]} alt="Future Retail" width="45%"/>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: '2vh'}}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography gutterBottom variant="h6" style={styleHeadline}>
                                        {arrayTitles[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="body2" gutterBottom style={styleDesc}>
                                        {arrayDesc[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="caption">
                                        {arrayMedia[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Hidden mdDown>
                        <Grid item xs={8} style={{display: 'flex', flexDirection: 'row'}}>
                            <Grid item xs={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={arrayImg[arrayIndex]} alt="Future Retail" width="50%" style={{marginBottom: '1vh'}}/>
                                <img src={arrayImg2[arrayIndex]} alt="Future Retail" width="50%"/>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid container direction="column">
                                    <Grid item>
                                        <Typography gutterBottom variant="h5" style={styleHeadline}>
                                        {arrayTitles[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="h6" gutterBottom style={styleDesc}>
                                        {arrayDesc[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="caption">
                                        {arrayMedia[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Hidden>
                    <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} onClick={()=>{handleClick("next")}}>
                        <KeyboardArrowRightOutlined id="rightPtr"  fontSize="large" style={{cursor: 'pointer'}}/>
                    </Grid>
                </Grid>


                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '7vh', display: 'none'}}>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={fretail} alt="Future Retail" width="40%" style={{'padding-right': '5%'}}/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Investment in Future Coupons by Amazon
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Undisclosed (Investment) <br/> August 2019
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
                                Sale of HyperCity to Future Retail
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Represented both Buy- and Sell- side <br/>
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
                                Private Equity Investment in Arvind Fashions by Multiples 
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Rs 7,400 Mn (Private Equity) <br/> October 2016
                                </Typography>
                            </Grid>
                    </Grid>
                    
                </Grid>
                <Grid container spacing={0} direction="row" justify="center" style={{display: 'none'}}>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={arvind} alt="Arvind Ltd" width="30%" style={{'padding-right': '5%'}}/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Demerger & Listing of Branded Apparel & Engineering Businesses
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Rs 66,000 Mn (Restructuring) <br/> March 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={koovs} alt="Koovs PLC" width="40%" style={{'padding-right': '5%'}}/>
                                <img src={flf} alt="Future Lifestyle" width="20%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of 29.9% Stake in Koovs PLC by Future Lifestyle
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
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
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Rs 408 Mn (Acquisition) <br/> May 2018
                                </Typography>
                            </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={0} direction="row" justify="center" style={{display: 'none'}}>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Grid item direction="row">
                                <img src={vulcan} alt="Vulcan Express" width="30%" style={{'padding-right': '5%'}}/>
                                <img src={fsc} alt="Future Supply Chain Solutions" width="20%"/>
                            </Grid>
                            <Grid item direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of Vulcan Express by Future Supply Chain Solutions
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                (Acquisition) <br/> January 2018
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
                                <Typography variant="body2" gutterBottom style={styleDesc}>
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
                                Consolidation of Landmark Auto companies
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>  
                                (Restructuring) <br/> September 2018
                                </Typography>
                            </Grid>
                    </Grid>                    
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}