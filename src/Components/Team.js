import React from 'react'
import Grid from '@material-ui/core/Grid'
import NavBar from './NavBar';
import Typography from '@material-ui/core/Typography'
import Skyline from './Media/Worli.jpg'
import Footer from './Footer';
import pankajj from './Media/pankajj.png'
import saurabhs from './Media/saurabhs.png'
import sonalb from './Media/sonalb.png'
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { LinkedIn } from '@material-ui/icons';
import Hidden from '@material-ui/core/Hidden';



const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center', 'padding-left': '5vw'}
const styleHeadline = {color:'#f8b04b'}

export default function Expertise() {
    const [openPJ, setOpenPJ] = React.useState(false);
    const [openSS, setOpenSS] = React.useState(false);
    const [openSB, setOpenSB] = React.useState(false);

    const handleOpenPJ = () => {
        setOpenPJ(true);
    };
  
    const handleClosePJ = () => {
        setOpenPJ(false);
    };

    const handleOpenSS = () => {
        setOpenSS(true);
      };
    
    const handleCloseSS = () => {
        setOpenSS(false);
    };

    const handleOpenSB = () => {
        setOpenSB(true);
      };
    
    const handleCloseSB = () => {
        setOpenSB(false);
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
                        Leadership Team
                    </Typography>
                </div>
                <Grid container spacing={0} direction="row" justify="center" style={{'padding-top': '15vh', 'padding-bottom': '5vh'}}>
                    <Grid item xs={9} sm={5} md={3} direction="column"  onMouseOver={handleOpenPJ} style={styleItem}>
                        <img src={pankajj} alt="Pankaj Jaju" style={{height: '45vh', width: 'auto'}}/>
                        <Typography variant="h6" style={styleHeadline}>
                            Pankaj Jaju
                        </Typography>
                        <Typography variant="subtitle1">
                            Founder & CEO
                        </Typography>
                    </Grid>
                    <Grid item xs={9} sm={5} md={3} direction="column"  onMouseOver={handleOpenSS} style={styleItem}>
                        <img src={saurabhs} alt="Saurabh Singhi" style={{height: '45vh', width: 'auto'}}/>
                        <Typography variant="h6" style={styleHeadline}>
                            Saurabh Singhi
                        </Typography>
                        <Typography variant="subtitle1">
                            Senior Advisor
                        </Typography>
                    </Grid>
                    <Grid item xs={9} sm={5} md={3} direction="column"  onMouseOver={handleOpenSS} style={styleItem}>
                        <img src={sonalb} alt="Sonal Biyani" style={{height: '45vh', width: 'auto'}}/>
                        <Typography variant="h6" style={styleHeadline}>
                            Sonal Biyani
                        </Typography>
                        <Typography variant="subtitle1">
                            
                        </Typography>
                    </Grid>
                </Grid>
                

                <Modal
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    aria-labelledby="image-modal"
                    aria-describedby="story-modal"
                    open={openPJ}
                    onClose={handleClosePJ}
                    closeAfterTransition={true}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openPJ}>
                    <div style={{backgroundColor: 'white', border: '3px solid #f8b04b', boxShadow: 'shadows[5]', width: '60vw', 'max-height': '75vh', 'overflow-y': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none'}}>
                        <Grid container style={{'padding': '10px'}}>
                            <Grid item xs={5}>
                                <img id="image-modal"src={pankajj} alt="Pankaj Jaju" style={{'height': '30vw'}}></img>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={6}>
                                    <Grid item>
                                        <Typography variant="h6" style={styleHeadline}>
                                        Pankaj Jaju
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        Founder & CEO
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} direction="column">
                                    <Grid item style={{'padding-top': '10px'}}>
                                        <Typography variant="body2">
                                        Pankaj has over 25 years of Investment Banking experience at ENAM / Axis Capital. He led several veticals such as Retail, Real Estate, Textiles and Commodities, and relationships for several large business houses and executed a host of marquee transactions across M&A, PE and Capital markets. He also headed Strategic Partnerships for Axis Bank as it built out its digital strategy. He spearheaded several IPOs, M&A and PE transactions for various sectors, including Materials, Textile, Retail, and Real Estate. Pankaj led most of the equity raising and strategic initiatives for major retail houses in India, including Arvind, Future Group, Landmark Group, and Rahejas. Additionally, he led major strategic initiatives by Grasim and ABNL between 2000 and 2014, including their acquisition of Ultratech Cement.
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '5px'}}>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank" title="LinkedIn" style={{color: '#000000'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>

                            <Hidden smDown>
                                <Grid container md={7} direction="column">
                                    <Grid item>
                                        <Typography variant="h6" style={styleHeadline}>
                                        Pankaj Jaju
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        Founder & CEO
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '10px'}}>
                                        <Typography variant="body2">
                                        Pankaj has over 25 years of Investment Banking experience at ENAM / Axis Capital. He led several veticals such as Retail, Real Estate, Textiles and Commodities, and relationships for several large business houses and executed a host of marquee transactions across M&A, PE and Capital markets. He also headed Strategic Partnerships for Axis Bank as it built out its digital strategy. He spearheaded several IPOs, M&A and PE transactions for various sectors, including Materials, Textile, Retail, and Real Estate. He led most of the equity raising and strategic initiatives for major retail houses in India, including Arvind, Future Group, Landmark Group, and Rahejas. He led major strategic initiatives by Grasim and ABNL between 2000 and 2014, including their acquisition of Ultratech Cement.
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '5px'}}>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank" title="LinkedIn" style={{color: '#000000'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>
                                
                            
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <Modal
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    aria-labelledby="image-modal"
                    aria-describedby="story-modal"
                    open={openSS}
                    onClose={handleCloseSS}
                    closeAfterTransition={true}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openSS}>
                    <div style={{backgroundColor: 'white', border: '3px solid #f8b04b', boxShadow: 'shadows[5]', width: '60vw', 'max-height': '75vh', 'overflow-y': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none'}}>
                        <Grid container style={{'padding': '10px'}}>
                            <Grid item xs={5}>
                                <img id="image-modal"src={saurabhs} alt="Saurabh Singhi" style={{'height': '30vw'}}></img>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={6}>
                                    <Grid item>
                                        <Typography variant="h6" style={styleHeadline}>
                                        Saurabh Singhi
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        Senior Advisor
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} direction="column">
                                    <Grid item style={{'padding-top': '10px'}}>
                                        <Typography variant="body2">
                                        Saurabh has over 13 years of experience in financial markets across verticals like fund management, asset reconstruction, investment banking, and corporate banking. He has previously worked as an Investment Banker at Axis Capital (Mumbai) and Enam Securities (Mumbai). Saurabh is an MBA from ISB, Hyderabad and has a Degree in Commerce from Mumbai University. He is also a Chartered Accountant. Saurabh led the team for the acquisition/ merger of Henkel India with Jyothy Laboratories, while also helping Jyothy raise equity ahead of the deal. Additionally, he led USD 200mn overseas funding for Tata Communication as well as the consortium for raising USD 460mn for a subsidiary of Tata Power.
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '5px'}}>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank" title="LinkedIn" style={{color: '#000000'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>

                            <Hidden smDown>
                                <Grid container md={7} direction="column">
                                    <Grid item>
                                        <Typography variant="h6" style={styleHeadline}>
                                        Saurabh Singhi
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        Senior Advisor
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '10px'}}>
                                        <Typography variant="body2">
                                        Saurabh has over 13 years of experience in financial markets across verticals like fund management, asset reconstruction, investment banking, and corporate banking. He has previously worked as an Investment Banker at Axis Capital (Mumbai) and Enam Securities (Mumbai). Saurabh is an MBA from ISB, Hyderabad and has a Degree in Commerce from Mumbai University. He is also a Chartered Accountant. Saurabh led the team for the acquisition/ merger of Henkel India with Jyothy Laboratories, while also helping Jyothy raise equity ahead of the deal. Additionally, he led USD 200mn overseas funding for Tata Communication as well as the consortium for raising USD 460mn for a subsidiary of Tata Power.
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '5px'}}>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank" title="LinkedIn" style={{color: '#000000'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>
                                
                            
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
                <Modal
                    style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
                    aria-labelledby="image-modal"
                    aria-describedby="story-modal"
                    open={openSB}
                    onClose={handleCloseSB}
                    closeAfterTransition={true}
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={openSB}>
                    <div style={{backgroundColor: 'white', border: '3px solid #f8b04b', boxShadow: 'shadows[5]', width: '60vw', 'max-height': '75vh', 'overflow-y': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', outline: 'none'}}>
                        <Grid container style={{'padding': '10px'}}>
                            <Grid item xs={5}>
                                <img id="image-modal"src={sonalb} alt="Sonal Biyani" style={{'height': '30vw'}}></img>
                            </Grid>
                            <Hidden mdUp>
                                <Grid item xs={6}>
                                    <Grid item>
                                        <Typography variant="h6" style={styleHeadline}>
                                        Sonal Biyani
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid container xs={12} direction="column">
                                    <Grid item style={{'padding-top': '10px'}}>
                                        <Typography variant="body2">
                                        Sonal has over 13 years of experience in capital markets, fund raising (IPO, PE) and Mergers & Acquisitions. She has previously worked as an Investment Banker at Axis Capital (Mumbai), Enam Securities (Mumbai), and Lehman Brothers (Mumbai). Sonal is an MBA from IIFT, Delhi and has a Degree in Engineering from Jodhpur University. She is also a CFA (US) charter holder.
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '5px'}}>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank" title="LinkedIn" style={{color: '#000000'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>

                            <Hidden smDown>
                                <Grid container md={7} direction="column">
                                    <Grid item>
                                        <Typography variant="h6" style={styleHeadline}>
                                        Sonal Biyani
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography variant="subtitle1">
                                        
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '10px'}}>
                                        <Typography variant="body2">
                                        Sonal has over 13 years of experience in capital markets, fund raising (IPO, PE) and Mergers & Acquisitions. She has previously worked as an Investment Banker at Axis Capital (Mumbai), Enam Securities (Mumbai), and Lehman Brothers (Mumbai). Sonal is an MBA from IIFT, Delhi and has a Degree in Engineering from Jodhpur University. She is also a CFA (US) charter holder.
                                        </Typography>
                                    </Grid>
                                    <Grid item style={{'padding-top': '5px'}}>
                                        <a href="https://www.linkedin.com/in/pankaj-jaju-metta/?originalSubdomain=in" target="_blank" title="LinkedIn" style={{color: '#000000'}}>
                                            <LinkedIn fontSize="small"/>
                                        </a>
                                    </Grid>
                                </Grid>
                            </Hidden>
                                
                            
                            <Grid item xs={1}/>
                        </Grid>
                    </div>
                    </Fade>
                </Modal>
            </div>
            <Footer/>
        </div>
    );
}