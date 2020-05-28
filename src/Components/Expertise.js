import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography'
import Skyline from './Media/Worli.jpg'
import Footer from './Footer';

const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'padding-left': '5vw'}
const styleHeadline = {color:'#f8b04b'}

export default function Expertise() {
    return(
        <div style={{overflow: 'hidden'}}>
            <NavBar></NavBar>
            <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                <img src={Skyline} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.7'}}/>
            </div>
            <div class="row" style={{position: 'relative', 'margin-top': '-15vh', 'padding-left': '12vw'}}>
                <Typography variant="h4" style={{color: 'white'}}>
                    Expertise
                </Typography>
            </div>
            <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '15vh', 'padding-bottom': '5vh'}}>
                <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                        <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                        Mergers & Acquisitions
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        We do the impossible //Description goes here
                        </Typography>
                </Grid>
                <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                        <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                        Raise Capital
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Description goes here bcause this is a placeholder
                        </Typography>
                </Grid>
                <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                        <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                        Strategic Advisory
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Description goes here bcause this is a placeholder
                        </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '5vh', 'padding-bottom': '5vh'}}>
                <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                        <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                        Pioneers
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        We do the impossible //Description goes here
                        </Typography>
                </Grid>
                <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                        <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                        Execution Excellence
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Description goes here bcause this is a placeholder
                        </Typography>
                </Grid>
                <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                        <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                        Execution Excellence
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                        Description goes here bcause this is a placeholder
                        </Typography>
                </Grid>
            </Grid>
            <Footer/>
        </div>
    );
}