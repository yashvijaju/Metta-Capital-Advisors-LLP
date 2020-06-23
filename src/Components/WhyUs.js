import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import {Typography, Hidden} from '@material-ui/core'
import Skyline from './Media/Worli.jpg'
import bg2 from './Media/bg2.png';
import bg3 from './Media/bg3.png';

import Footer from './Footer';
import './Scroll.css';

const font = 'Helvetica Neue';
const grey = '#808080';

const styleItem = {display: 'flex', 'flexDirection': 'column', 'padding-left': '5vw'}
const styleHeadline = {color:'#f8b04b', fontFamily: font, fontWeight: '700'}

export default function WhyUs() {
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
                            About Us
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src={bg3} alt="Worli Sea Link" style={{'object-fit': 'fill', 'max-height': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'margin-top': '-10vh', 'padding-left': '12vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            About Us
                        </Typography>
                    </div>
                </Hidden>
                <Grid container spacing={0} justify="center" style={{'padding-top': '10vh'}}>
                    <Grid item xs={1} sm={7}/>
                    <Grid item xs={11} sm={3} style={{display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'margin-left': '2vw'}}>
                        <Typography variant="h6" gutterBottom style={{fontFamily: font, color: grey, fontWeight: '700'}}>
                        We Are
                        </Typography>
                        <Typography variant="body2" gutterBottom style={{fontFamily: font, color: grey}}>
                        A boutique investment bank led by seasoned bankers. We offer strategic solutions to our clients as their trusted advisors.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '2vh'}}>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                            Early Beginnings
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{fontFamily: font, color: grey}}>
                            Founded in 2016, Metta Capital has quickly emerged as a knowledge driven investment bank that has added value to its clients in their strategic initiatives. We have already attained leadership position in Fashion & Retail with transactions across Private Equity, Mergers & Acquisitions and Restructuring for a number of clients. <br/><br/> 
                            We also bring in invaulable expertise in a multitude of other sectors such as Auto, Consumer, Industrials and Real Estate, and offer strategic advisory services including Mergers & Acquisitions, Capital Raise, and Strategic Advisory.
                            </Typography>
                    </Grid>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                            Trusted Advisor
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{fontFamily: font, color: grey}}>
                            Our clientele includes a combination of established and emerging companies with high-growth trajectories. We work with corporates towards their growth and strategic needs, and with funds on their evaluation of businesses and opportunities. <br/><br/> 
                            Metta is seen as a dependable and trusted advisor with a client-focused approach, providing unbiased and independent advice that focuses on our clients' long-term interests. This ideology has allowed us to create strong relationships and work closely with entrepreneurs over the years.
                            </Typography>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline}>
                            Deep Domain Expertise
                            </Typography>
                            <Typography variant="body2" gutterBottom style={{fontFamily: font, color: grey}}>
                            Our senior team members cumulatively bring in over 50+ years of experience of having advised large business houses and emerging corporates on several marquee and complex transactions. Combined with their ability to understand businesses, structures, and complex situations, their experience enables Metta to deliver the right solutions to clients. <br/> <br/> 
                            Metta is seen as a high energy and entrepreneurial organization offering unparalleled growth opportunities to professionals seeking an accelerated career growth.
                            </Typography>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}