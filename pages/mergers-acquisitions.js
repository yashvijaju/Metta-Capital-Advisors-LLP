import Grid from '@material-ui/core/Grid'
import NavBar from '../Components/NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Footer from '../Components/Footer';

const font = 'Lato';
const grey = '#808080';

const styleItem = {display: 'flex', 'paddingTop': '2vh'}
const textStyle = {fontFamily: font, color: grey}


export default function Expertise() {

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
                            M&A Advisory
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg3.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            M&A Advisory
                        </Typography>
                    </div>
                </Hidden>


                <Grid container spacing={0} direction="row" style={{'paddingTop': '8vh', 'paddingLeft': '10vw', 'paddingRight': '3vw'}}>
                    <Grid item xs={10} sm={6} style={styleItem}>
                            <Typography variant="body1" gutterBottom id="MA" style={{color: grey, fontFamily: font}}>
                            <span style={{fontWeight:'bold'}}>We provide advisory services on mergers, acquisitions, divestures and strategic partnerships to corporates across the growth spectrum.</span>
                            <br/> <br/> 
                            We offer both, buy and sell side, advisory services driven by our understanding of businesses and deep insights on strategic drivers for such transactions. Our teams combine strategic advice with our understanding of regulations, structuring  and smart execution to help our clients across the entire transaction. This includes business and strategic fit, readiness, funding, structuring, regulatory requirements, due-diligence and documentation. 
                            <br/> <br/>
                            We prioritise long-term interest of the client over the drive for a transaction. This has allowed our clients to repose their confidence in us to allow us to represent both, the buyer and seller, in more than one transaction. 
                            <br/> <br/>
                            We have, in our short history, successfully delivered marquee transactions with both domestic and international counterparts to our clients. 
                            </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} style={styleItem}>
                        <Grid container direction="column">
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Hidden smUp>
                                    <Grid item xs={10} style={{paddingTop: '5vh'}}>
                                        <Typography variant="body1" style={{fontFamily: font, color: grey, fontWeight:'bold'}}>Our Transactions:</Typography>
                                    </Grid>
                                </Hidden>
                                <Hidden xsDown>
                                    <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}/>
                                    <Grid item xs={6}> 
                                        <Typography variant="body1" style={{fontFamily: font, color: grey, fontWeight:'bold'}}>Our Transactions:</Typography>
                                    </Grid>
                                </Hidden>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src="/assets/hypercity.png" alt="HyperCity" style={{width:'75%', height: 'auto'}}/>
                                    <img src="/assets/shopperstop.png" alt="Shoppers Stop" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" style={textStyle}>
                                    Sale of HyperCity by Shoppers Stop to Future Retail
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src="/assets/foodworld.png" alt="Food World" style={{width:'75%', height: 'auto'}}/>
                                    <img src="/assets/fretail.jpg" alt="Fashion Retail" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" style={textStyle}>
                                    Acquisition of Foodworld Supermarkets by Future Retail
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src="/assets/vulcan.png" alt="Vulcan" style={{width:'75%', height: 'auto'}}/>
                                    <img src="/assets/fsc.png" alt="Future Supply Chain" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" style={textStyle}>
                                    Acquisition of Vulcan Express by Future Supply Chain Solutions from Snapdeal
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