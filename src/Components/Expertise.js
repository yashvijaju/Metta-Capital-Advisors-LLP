import React, {useState} from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography'
import Skyline from './Media/Worli.jpg'
import Footer from './Footer';

const styleItem = {display: 'flex', 'padding-left': '5vw'}
const styleHeadline = {color:'#f8b04b', border: '2px solid #f8b04b', padding: '2vw', cursor: 'pointer'}

export default function Expertise() {
    const handleClickMA = () => {
        var x = document.getElementById("MA");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };


    const handleClickCR = () => {
        var x = document.getElementById("CR");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };

    const handleClickSA = () => {
        var x = document.getElementById("SA");
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    };



    return(
        <div>
            <div style={{'min-height': '95vh', 'padding-bottom': '5vh'}}>
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
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline} onClick={handleClickMA}>
                            Mergers & Acquisitions
                            </Typography>
                            <Typography variant="body2" gutterBottom id="MA" style={{display:'none'}}>
                            We provide unparalleled buy-side and sell-side advisory on corporate mergers, acquisitions and divestitures as well as equity financing to mid-market sized to large corporates.
                            In an M&A transaction, it is crucial to comprehensively assess the deal value. Whether it be target search and short listing, term sheet or share purchase agreement negotiation, managing regulatory requirements or due diligence, team Metta is technically versed to deal with the most complex of transactions.
                            Our focus is to enable our clients achieve sustainable growth and create long-term value by leveraging the Deep Domain Expertise, Excellence in execution and Industry relationships.
                            </Typography>
                    </Grid>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline} onClick={handleClickCR}>
                            Capital Raise
                            </Typography>
                            <Typography variant="body2" gutterBottom id="CR" style={{display:'none'}}>
                            We provide a cluster of services from developing the effective strategy and efficient infrastructure to implementing robust policies and ensuring high-level corporate governance. Often embedded into client management teams, Metta Capital participates in discussions of business strategy, financing, governance, strategic options and other board and shareholder considerations. We support, stimulate, and challenge our client’s point of view and enhance the strategic decision-making process. Using sophisticated financial modelling tools, strategic planning analysis, business valuation techniques, and financial capacity analysis, we develop and implement initiatives to fulfil strategic and operational objectives.
                            </Typography>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline} onClick={handleClickSA}>
                            Strategic Advisory
                            </Typography>
                            <Typography variant="body2" gutterBottom id="SA" style={{display:'none'}}> 
                            Metta Capital has sectoral expertise with established credentials in Retail & Consumer sector and advises companies across all sectors in arranging private capital through their growth stages. We provide equity and other financing advisory to emerging mid-market businesses. We create compelling marketing collaterals; we develop comprehensive investor lists; we work creatively and tirelessly to initiate, negotiate and close financing transactions.
                            </Typography>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}