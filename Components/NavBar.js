import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import Link from 'next/link';
import Hidden from '@material-ui/core/Hidden';
import { Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';

const grey = '#808080'
const font = 'Lato';
const styleItem = {display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', alignItems: 'center'}
const activeLink = {fontSize: '1vw', color: "#F8B04B", fontWeight: 'bolder',textAlign: 'center', fontFamily: font}
const activeLinkSm = {fontSize: '2.5vw', color: "#F8B04B", fontWeight: 'bolder',textAlign: 'center', fontFamily: font}

export default function NavBar() {
    let style = {
        backgroundColor: "#F9DDB7",
        'maxHeight': '10vh',
        height: 'auto',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };

      let styleSm = {
        backgroundColor: "#F9DDB7",
        'maxHeight': '8vh',
        height: 'auto',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };

    const [customStyle, setCustomStyle] = useState(grey);

    const [anchorEl, setAnchorEl] = useState(null);

    function handleClick(event) {
        setAnchorEl(event.currentTarget);
    };

    function handleClose(props) {
        if (props === "selected") {
            setCustomStyle('#F8B04B');
        }
        setAnchorEl(null);
    };


    return(
        <div className="container">
            <div className="row">
                <Hidden xsDown>
                    <AppBar elevation={0} style={style}>
                        <Toolbar>
                            <Grid container spacing={0}>
                                <Grid item xs={2} style={{display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', alignItems: 'center', paddingLeft:'8vw'}}>
                                    <Link href="/">
                                        <img src="/assets/logo.gif" alt="Metta Capital Logo" style={{width: '10vw', textAlign: 'left'}}></img>
                                    </Link>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={5} style={styleItem}>
                                    <Link href="/about-us">
                                        <div className="style_link">
                                            <p>About Us</p>
                                        </div>
                                    </Link>
                                    <div className="style_link" onClick={(e)=>handleClick(e)} aria-controls="simple-menu" aria-haspopup="true">
                                        <p id="Expertise Dropdown">Expertise</p>
                                    </div>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        elevation={0}
                                        
                                    >
                                        <div style={{backgroundColor: '#F9DDB7', marginTop: '-1vh', paddingTop: '2vh', marginBottom: '-1vh'}}>
                                            <Link href="/mergers-acquisitions">
                                                <MenuItem style={{marginBottom: '-2vh'}}>
                                                <div className="style_link">
                                                    <p>M&A Advisory</p>
                                                </div>
                                                </MenuItem>
                                            </Link>
                                            <Link href="/strategic-advisory" activeStyle={activeLink}>
                                                <MenuItem style={{marginBottom: '-2vh'}}>
                                                <div className="style_link">
                                                    <p>Strategic Advisory</p>
                                                </div>
                                                </MenuItem>
                                            </Link>
                                            <Link href="/fund-raise" activeStyle={activeLink}>
                                                <MenuItem>
                                                <div className="style_link">
                                                    <p>Fund Raising</p>
                                                </div>
                                                </MenuItem>
                                            </Link>
                                        </div>
                                    </Menu>
                                    <Link href="/team" activeStyle={activeLink}>
                                        <div className="style_link">
                                            <p>Team</p>
                                        </div>
                                    </Link>
                                
                                    <Link href="/transactions" activeStyle={activeLink}>
                                        <div className="style_link">
                                            <p>Transactions</p>
                                        </div>
                                    </Link>
                                    <Link href="/contact" activeStyle={activeLink}>
                                        <div className="style_link">
                                            <p>Contact</p>
                                        </div>
                                    </Link>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
                <Hidden smUp>
                    <AppBar elevation={0} style={styleSm}>
                        <Toolbar>
                            <Grid container spacing={0}>
                                <Grid item xs={2} style={{display: 'flex', 'flexDirection': 'row', 'justifyContent': 'space-around', alignItems: 'center', paddingLeft:'8vw'}}>
                                    <Link href="/">
                                        <img src="/assets/logo.gif" alt="Metta Capital Logo" style={{width: '12vw'}}></img>
                                    </Link>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}/>
                                <Grid item xs={8} >
                                    <Grid container direction="row" justify="space-around">
                                        <Link href="/about-us" activeStyle={activeLinkSm}>
                                            <div className="style_link_sm">
                                                <p>About Us</p>
                                            </div>
                                        </Link>
                                        <div style={{cursor: 'pointer'}} onClick={(e)=>handleClick(e)} aria-controls="simple-menu" aria-haspopup="true">
                                            <p id="Expertise Dropdown" style={{fontSize: '2.5vw', color:customStyle, textAlign: 'center', fontFamily: font}}>Expertise</p>
                                        </div>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={Boolean(anchorEl)}
                                            onClose={handleClose}
                                            elevation={0}
                                            
                                        >
                                            <div style={{backgroundColor: '#F9DDB7', marginTop: '-1.25vh', paddingTop: '2vh', marginBottom: '-1.25vh'}}>
                                                <Link href="/mergers-acquisitions" activeStyle={activeLinkSm}>
                                                    <MenuItem style={{marginBottom: '-2vh'}}>
                                                        <div className="style_link_sm">
                                                            <p style={{fontSize: '2.5vw'}}>M&A Advisory</p>
                                                        </div>
                                                    </MenuItem>
                                                </Link>
                                                <Link href="/strategic-advisory" activeStyle={activeLinkSm}>
                                                    <MenuItem style={{marginBottom: '-2vh'}}>
                                                        <div className="style_link_sm">
                                                            <p style={{fontSize: '2.5vw'}}>Strategic Advisory</p>
                                                        </div>
                                                    </MenuItem>
                                                </Link>
                                                <Link href="/fund-raise" activeStyle={activeLinkSm}>
                                                    <MenuItem>
                                                        <div className="style_link_sm">
                                                            <p style={{fontSize: '2.5vw'}}>Fund Raising</p>
                                                        </div>
                                                    </MenuItem>
                                                </Link>
                                            </div>
                                        </Menu>
                                        <Link href="/team" activeStyle={activeLinkSm}>
                                            <div className="style_link_sm">
                                                <p>Team</p>
                                            </div>
                                        </Link>
                                        <Link href="/transactions" activeStyle={activeLinkSm}>
                                            <div className="style_link_sm">
                                                <p>Transactions</p>
                                            </div>
                                        </Link>
                                        <Link href="/contact" activeStyle={activeLinkSm}>
                                            <div className="style_link_sm">
                                                <p>Contact</p>
                                            </div>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </div>
            <style jsx>{`
                .style_link {
                    font-size: 1vw;
                    text-decoration: none;
                    color: #808080;
                    text-align: center; 
                    font-family: 'Lato';
                    cursor: pointer;
                }
                .style_link_sm {
                    font-size: 2.5vw;
                    text-decoration: none;
                    color: #808080; 
                    text-align: center; 
                    font-family: 'Lato';
                    cursor: pointer;
                }
            `}
            </style>
        </div>
        
    );
}