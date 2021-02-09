import Grid from '@material-ui/core/Grid'
import NavBar from '../Components/NavBar';
import Link from 'next/link';
import {Typography, Hidden} from '@material-ui/core'
import Footer from '../Components/Footer';

const font = 'Lato';
const grey = '#808080';

const styleItem = {display: 'flex', 'paddingLeft': '5vw', 'paddingTop': '2vh'}
const styleHeadline = {color:'#f8b04b', border: '2px solid #f8b04b', padding: '2vw', cursor: 'pointer', fontFamily: font}


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
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg2.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Expertise
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div class="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg3.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div class="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Expertise
                        </Typography>
                    </div>
                </Hidden>
                <Grid container spacing={0} direction="row" justify="center" style={{'paddingTop': '8vh'}}>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Link href="/mergers-acquisitions" style={{textDecoration: 'none', cursor: 'pointer'}}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline} onClick={handleClickMA}>
                            M&A Advisory
                            </Typography>
                            </Link>
                            <Typography variant="body2" gutterBottom id="MA" style={{display:'none', color: grey, fontFamily: font}}>
                            We provide advisory services on mergers, acquisitions, divestures and strategic partnerships to corporates across the growth spectrum. <br/> <br/> We offer both, buy and sell side, advisory services driven by our understanding of businesses and deep insights on strategic drivers for such transactions. Our teams combine strategic advice with our understanding of regulations, structuring  and smart execution to help our clients across the entire transaction. This includes business and strategic fit, readiness, funding, structuring, regulatory requirements, due-diligence and documentation. <br/> <br/>We prioritise long-term interest of the client over the drive for a transaction. This has allowed our clients to repose their confidence in us to allow us to represent both, the buyer and seller, in more than one transaction. <br/> <br/>
                            We have, in our short history, successfully delivered marquee transactions with both domestic and international counterparts to our clients. 

                            </Typography>
                    </Grid>
                    <Grid item xs={10}  sm={3} direction="column" style={styleItem}>
                            <Link href="/strategic-advisory" style={{textDecoration: 'none', cursor: 'pointer'}}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline} onClick={handleClickCR}>
                            Strategic Advisory
                            </Typography>
                            </Link>
                            <Typography variant="body2" gutterBottom id="CR" style={{display:'none', color: grey, fontFamily: font}}>
                            Our clients see us as partners in their long term growth and strategy. <br/><br/> We provide a range of services across the lifecycle to our clients, which aligns with their vision and growth trajectory. Often embedded into client management teams, Metta Capital participates in discussions on strategy, financing, strategic options and other important initiatives. <br/> <br/> 
                            We are seen as bouncing boards, and support, stimulate and challenge our client’s point of view and support their strategic decision-making process. <br/><br/>
                            Many of our transactions are thus natural outcomes of our engagement with our clients. 
                            </Typography>
                    </Grid>
                    <Grid item xs={10} sm={3} direction="column" style={styleItem}>
                            <Link href="/fund-raise" style={{textDecoration: 'none', cursor: 'pointer'}}>
                            <Typography gutterBottom variant="subtitle1" style={styleHeadline} onClick={handleClickSA}>
                            Fund Raising
                            </Typography>
                            </Link>
                            <Typography variant="body2" gutterBottom id="SA" style={{display:'none', color: grey, fontFamily: font}}> 
                            We advise companies, across sectors, in raising capital across their growth cycle. <br/><br/>
                            Our network with global and domestic investors and deep insights into business and capital markets allows us to find the right capital and right partner for our clients. We work with our client across the transaction, right from evaluating the capital needs, to identifying the target investors, creating deal collaterals, negotiations, due diligence and documentation. <br/><br/>
                            We have deep relationships with leading global and domestic private equity funds. We work closely with them on some of their portfolio companies and also help them evaluate investment opportunities. Our understanding of businesses and the capital markets, deal drivers and valuations, allow us to add value as both, advisors to the investor as well as the investee. <br/> <br/> 
                            
                            We have deep sectoral expertise in fashion, retail & consumer sector and have emerged as the go to investment bank for companies seeking capital in the sector. 

                            </Typography>
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    );
}