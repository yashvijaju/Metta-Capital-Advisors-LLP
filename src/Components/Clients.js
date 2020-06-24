import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar'
import {Typography, Hidden} from '@material-ui/core'
import {Pagination} from '@material-ui/lab'
import shopperstop from './Media/shopperstop.png'
import hypercity from './Media/hypercity.png'
import arvind from './Media/arvind.png'
import arvindfashion from './Media/arvindfashion.png'
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


const font = 'Lato';
const grey = '#808080';

const styleItem = {display: 'flex', flexDirection: 'column', 'paddingTop': '3vh', 'paddingLeft': '5vw', fontFamily: font}
const styleDesc = {color: grey, fontFamily: font}
const styleHeadline = {color:'#f8b04b', fontfamily: font}


const intMax = 9;

export default function Transactions() {

    const [arrayIndex, setArrayIndex] = React.useState(0);

    function handleClick(props) {
        if (props === "prev") {
            if (arrayIndex !== 0) {
                var x = arrayIndex - 1;
            }
            else {
                x = intMax;
            }
            
            setArrayIndex(x);
        }
        if (props === "next") {
            if (arrayIndex !== intMax) {
                x = arrayIndex + 1;
            }
            else {
                x = 0;
            }
            setArrayIndex(x);
        }
    };

    const handleChange = (event, value) => {
        setArrayIndex(value-1);
    }

    let arrayImg = [fretail,shopperstop,arvind,arvind,koovs,foodworld,vulcan,nse,landmark,arvindfashion];
    let arrayImg2 = [nulll,hypercity,multiples,nulll,flf,fretail,fsc,nulll,nulll,nulll];
    let arrayTitles = ['Investment in Future Coupons by Amazon','Sale of HyperCity to Future Retail','Private Equity Investment in Arvind Fashions by Multiples','Demerger & Listing of Branded Apparel & Engineering Businesses','Acquisition of 29.9% Stake in Koovs PLC by Future Lifestyle','Acquisition of Foodworld Supermarkets by Future Retail','Acquisition of Vulcan Express by Future Supply Chain Solutions','NSE Block Deal','Consolidation of Landmark Auto companies','Advisor to Rights Issue'];
    let arrayDesc = ['Undisclosed (Investment)','Represented both Buy- and Sell- side. Rs 9,100 Mn (Acquisition)','Rs 7,400 Mn (Private Equity)','Rs 66,000 Mn (Restructuring)','Rs 1,400 Mn (Investment)','Rs 408 Mn (Acquisition)','Acquisition','','(Restructuring)','Rs. 400 Cr'];
    let arrayMedia = ['','','','','','','','','',''];


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
                            Recent Transactions
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Transactions
                        </Typography>
                    </div>
                </Hidden>

                <Hidden smUp>
                    <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '10vh'}}>
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}} onClick={()=>{handleClick("prev")}}>
                            <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '10vh'}}/>
                        </Grid>
                        <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '5vw'}}>
                            <Grid item xs={12} style={{display: 'flex', flexDirection: 'row'}}>
                                <img src={arrayImg[arrayIndex]} alt="Future Retail" width="40%" style={{marginRight: '3vw'}}/>
                                <img src={arrayImg2[arrayIndex]} alt="Future Retail" width="40%"/>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: '2vh'}}>
                                <Grid container direction="column" justify="left">
                                    <Grid item>
                                        <Typography gutterBottom variant="body1" align="left" style={styleHeadline}>
                                        {arrayTitles[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle2" gutterBottom style={styleDesc}>
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
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}} onClick={()=>{handleClick("next")}}>
                            <KeyboardArrowRightOutlined id="rightPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '10vh'}}/>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '20vh'}}>
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}} onClick={()=>{handleClick("prev")}}>
                            <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '5vh'}}/>
                        </Grid>
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
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}} onClick={()=>{handleClick("next")}}>
                            <KeyboardArrowRightOutlined id="rightPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '5vh'}}/>
                        </Grid>
                    </Grid>
                </Hidden>

                <Grid item style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5vh'}}>
                    <Pagination count={intMax+1} page={arrayIndex+1} onChange={handleChange} shape="rounded" size="small"/>
                </Grid>
                
                <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '7vh', display: 'none'}}>
                    <Grid item xs={10}  sm={3} style={styleItem}>
                            <Grid item>
                                <img src={fretail} alt="Future Retail" width="40%" style={{'paddingRight': '5%'}}/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Investment in Future Coupons by Amazon
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Undisclosed (Investment) <br/> August 2019
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} style={styleItem}>
                            <Grid item>
                                <img src={shopperstop} alt="Shopper Stop" width="45%" style={{'paddingRight': '5%'}}/>
                                <img src={hypercity} alt="HyperCity" width="45%"/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Sale of HyperCity to Future Retail
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Represented both Buy- and Sell- side <br/>
                                Rs 9,100 Mn (Acquisition) <br/> October 2017
                                </Typography>
                            </Grid> 
                    </Grid>
                    <Grid item xs={10} sm={3} style={styleItem}>
                            <Grid item>
                                <img src={arvind} alt="Arvind Ltd" width="30%" style={{'paddingRight': '5%'}}/>
                                <img src={multiples} alt="Multiples" width="50%"/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
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
                    <Grid item xs={10} sm={3} style={styleItem}>
                            <Grid item >
                                <img src={arvind} alt="Arvind Ltd" width="30%" style={{'paddingRight': '5%'}}/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Demerger & Listing of Branded Apparel & Engineering Businesses
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Rs 66,000 Mn (Restructuring) <br/> March 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10}  sm={3} style={styleItem}>
                            <Grid item >
                                <img src={koovs} alt="Koovs PLC" width="40%" style={{'paddingRight': '5%'}}/>
                                <img src={flf} alt="Future Lifestyle" width="20%"/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of 29.9% Stake in Koovs PLC by Future Lifestyle
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                Rs 1,400 Mn (Investment) <br/> July 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} style={styleItem}>
                            <Grid item >
                                <img src={foodworld} alt="Foodworld" width="20%" style={{'paddingRight': '5%'}}/>
                                <img src={fretail} alt="Future Retail" width="40%"/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
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
                    <Grid item xs={10}  sm={3} style={styleItem}>
                            <Grid item >
                                <img src={vulcan} alt="Vulcan Express" width="30%" style={{'paddingRight': '5%'}}/>
                                <img src={fsc} alt="Future Supply Chain Solutions" width="20%"/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Acquisition of Vulcan Express by Future Supply Chain Solutions
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                (Acquisition) <br/> January 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} style={styleItem}>
                            <Grid item >
                                <img src={nse} alt="NSE" width="30%" style={{'paddingRight': '5%'}}/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                NSE Block Deal 
                                </Typography>
                                <Typography variant="body2" gutterBottom style={styleDesc}>
                                November 2018
                                </Typography>
                            </Grid>
                    </Grid>
                    <Grid item xs={10} sm={3} style={styleItem}>
                            <Grid item >
                                <img src={landmark} alt="Landmark Cars" width="40%" style={{'paddingRight': '5%'}}/>
                            </Grid>
                            <Grid item style={{display: 'flex', flexDirection: 'column'}}>
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