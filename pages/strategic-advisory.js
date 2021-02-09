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
                            Strategic Advisory
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg3.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Strategic Advisory
                        </Typography>
                    </div>
                </Hidden>


                <Grid container spacing={0} direction="row" style={{'paddingTop': '8vh', 'paddingLeft': '10vw', 'paddingRight': '3vw'}}>
                    <Grid item xs={10} sm={6} style={styleItem}>
                            <Typography variant="body1" gutterBottom id="MA" style={{color: grey, fontFamily: font}}>
                            <span style={{fontWeight:'bold'}}>We provide a range of services across the lifecycle to our clients, which aligns with their vision and growth trajectory. </span>
                            <br/> <br/> 
                            Often embedded into client management teams, Metta Capital participates in discussions on strategy, financing, strategic options and other important initiatives. 
                            <br/> <br/> 
                            We are seen as bouncing boards, and support, stimulate and challenge our client’s point of view and support their strategic decision-making process. Our clients see us as partners in their long term growth and strategy.  
                            <br/><br/>
                            Many of our transactions are thus natural outcomes of our engagement with our clients. 
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
                                    <img src="/assets/landmark.png" alt="Landmark Auto" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2"style={textStyle}>
                                    Consolidation of Landmark Auto companies
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container direction="row" justify="center" alignItems="center" style={{marginBottom: '5vh'}}>
                                <Grid item xs={6} md={4} style={{textAlign: 'right', paddingRight: '2vw'}}>
                                    <img src="/assets/arvind.png" alt="Arvind" style={{width:'75%', height: 'auto'}}/>
                                </Grid>
                                <Grid item xs={6}>
                                    <Typography variant="body2" style={textStyle}>
                                    Demerger & Listing of Branded Apparel & Engineering Businesses
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