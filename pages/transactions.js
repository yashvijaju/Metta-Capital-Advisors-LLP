import Grid from '@material-ui/core/Grid'
import NavBar from '../components/NavBar'
import {Typography, Hidden} from '@material-ui/core'
import {Pagination} from '@material-ui/lab'
import Footer from '../components/Footer';
import { useState } from 'react';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';


const font = 'Lato';
const grey = '#808080';

const styleDesc = {color: grey, fontFamily: font, marginTop: '2vh'}
const styleHeadline = {color:'#f8b04b', fontfamily: font}


const intMax = 11;

export default function Transactions() {

    const [arrayIndex, setArrayIndex] = useState(0);

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

    let arrayImg = ["/assets/fgroup.png","/assets/flipkart.png","/assets/fgroup.png","/assets/shopperstop.png","/assets/arvindfashion.png","/assets/arvind.png","/assets/koovs.jpg","/assets/foodworld.png","/assets/vulcan.png","/assets/nse.png","/assets/landmark.png","/assets/arvindfashion.png","/assets/beinghuman.png"];
    let arrayImg2 = ["/assets/reliance.jpg","/assets/flyingmachine.jpg","/assets/amazon.jpg","/assets/hyercity.png","/assets/multiples.png","/assets/null.jpg","/assets/flf.jpg","/assets/fretail.jpg","/assets/fsc.png","/assets/null.jpg","/assets/null.jpg","/assets/null.jpg","/assets/mrvl.png"];
    let arrayTitles = [`Merger of FRL, FLFL, FCL, FSCL and FMNL into FEL.`,'Sale of significant minority stake by AFL in Arvind Youth Brands to Flipkart','Investment in Future Coupons by Amazon','Sale of HyperCity by Shoppers Stop to Future Retail','Private Equity Investment in Arvind Fashions by Multiples','Demerger & Listing of Branded Apparel & Engineering Businesses','Acquisition of 29.9% Stake in Koovs PLC by Future Lifestyle','Acquisition of Foodworld Supermarkets by Future Retail','Acquisition of Vulcan Express by Future Supply Chain Solutions from Snapdeal','Block Deal','Consolidation of Landmark Auto companies','Advisor to Rights Issue','Sale of Assets'];
    let arraySubTitles = [`Sale by FEL of the retail, wholesale, logistics and warehouse businesses to Reliance Retail`];
    let arrayDesc = ['(Rs 24,713 Cr)','(Rs 260 Cr)','','Represented both - Buyer and Seller (Rs 910 Cr)','(Rs 740 Cr)','(Rs 6,600 Cr)','(Rs 140 Cr)','(Rs 41 Cr)','','','','(Rs 400 Cr)',''];
    let arrayMedia = ['','','','','','','','','','','',''];


    return(
        <div>
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg2.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Recent Transactions
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg3.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Recent Transactions
                        </Typography>
                    </div>
                </Hidden>

                <Hidden smUp>
                    <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '10vh'}}>
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}} onClick={()=>{handleClick("prev")}}>
                            <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '10vh'}}/>
                        </Grid>
                        <Grid item xs={8} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', paddingLeft: '5vw'}}>
                            <Grid item xs={12} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <img src={arrayImg2[arrayIndex]} alt="Logo" width="60%" style={{marginBottom: '1vh'}}/>
                                <img src={arrayImg[arrayIndex]} alt="Logo" width="60%"/>
                            </Grid>
                            <Grid item xs={12} style={{marginTop: '2vh'}}>
                                <Grid container direction="column" justify="left" alignItems="center">
                                    <Grid item>
                                        <Typography gutterBottom variant="subtitle1" align="center" style={styleHeadline}>
                                        {arrayTitles[arrayIndex]}
                                        <br/>
                                        {arraySubTitles[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="caption" align="center" gutterBottom style={styleDesc}>
                                        {arrayDesc[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{display: 'none'}}>
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
                    <Grid container spacing={0} direction="row" style={{'paddingTop': '20vh','paddingLeft': '10vw'}}>
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'left'}} onClick={()=>{handleClick("prev")}}>
                            <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '5vh'}}/>
                        </Grid>
                        <Grid item xs={9} style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                            <Grid item xs={5} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={arrayImg[arrayIndex]} alt="Logo" width="50%" style={{marginBottom: '1vh'}}/>
                                <img src={arrayImg2[arrayIndex]} alt="Logo" width="50%"/>
                            </Grid>
                            <Grid item xs={7}>
                                <Grid container direction="column" justify="center">
                                    <Grid item>
                                        <Typography gutterBottom variant="h6" style={styleHeadline}>
                                        {arrayTitles[arrayIndex]}
                                        {(arraySubTitles[arrayIndex]) && 
                                            <>
                                                <br/> <br/>
                                                {arraySubTitles[arrayIndex]}
                                            </>
                                        }
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1" gutterBottom style={styleDesc}>
                                        {arrayDesc[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{display:'none'}}>
                                        <Typography variant="caption">
                                        {arrayMedia[arrayIndex]}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={1} style={{display: 'flex', justifyContent: 'right'}} onClick={()=>{handleClick("next")}}>
                            <KeyboardArrowRightOutlined id="rightPtr"  fontSize="large" style={{cursor: 'pointer', paddingTop: '5vh'}}/>
                        </Grid>
                    </Grid>
                </Hidden>

                <Grid item style={{display: 'none', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5vh'}}>
                    <Pagination count={intMax+1} page={arrayIndex+1} onChange={handleChange} shape="rounded" size="small"/>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}