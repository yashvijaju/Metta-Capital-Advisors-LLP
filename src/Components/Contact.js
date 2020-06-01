import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography'
import Skyline from './Media/Worli.jpg'
import GoogleApiWrapperr from './Maps'
import Footer from './Footer';


const styleMap = {width: '100vw', height: '70vh', 'line-height': '0', float: 'left'};

  const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
  const styleHeadline = {color:'#f8b04b'}

export default function Contact() {
    return(
        <div>
            <div style={{'min-height': '95vh', 'padding-bottom': '5vh'}}>
                <NavBar></NavBar>
                <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                    <img src={Skyline} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.7'}}/>
                </div>
                <div class="row" style={{position: 'relative', 'margin-top': '-15vh', 'padding-left': '12vw'}}>
                    <Typography variant="h4" style={{color: 'white'}}>
                        Contact
                    </Typography>
                </div>
                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '15vh'}}>
                    <Grid item xs={12} style={styleMap}>
                        <GoogleApiWrapperr/>
                    </Grid>
                    <Grid container direction="row" justify="center" xs={12} sm={12} style={{position: 'relative', 'padding-top': '5vh', 'margin-bottom': '0vh', 'padding-bottom': '0vh'}}>
                        <Grid item xs={0} sm={1}></Grid>
                        <Grid item xs={10} sm={2} direction="column" >
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Address
                                </Typography>
                                <Typography variant="body2" gutterBottom>
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
                                <Typography variant="body2" gutterBottom>
                                mettacapital@gmail.com
                                </Typography>
                        </Grid>
                        <Grid item xs={1} sm={0}></Grid>
                        <Grid item xs={10} sm={2} direction="column">
                                <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                                Phone
                                </Typography>
                                <Typography variant="body2" gutterBottom>
                                +91 8888 8888
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