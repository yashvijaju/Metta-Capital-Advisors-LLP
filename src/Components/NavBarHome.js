import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from './Media/logo.gif'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom';
import useWindowScrollPosition from '@rehooks/window-scroll-position'
import Hidden from '@material-ui/core/Hidden';
import { Menu, MenuItem } from '@material-ui/core';

const grey = '#808080';
const font = 'Lato';
const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
const styleLink = {fontSize: '1.3vw', textDecoration: 'none', color: grey, textAlign: 'center', fontFamily: font}
const styleLinkSm = {fontSize: '2.5vw', textDecoration: 'none', color: grey, textAlign: 'center', fontFamily: font}
const activeLink = {fontSize: '1.3vw', color: "#F8B04B", fontWeight: 'bolder',textAlign: 'center', fontFamily: font}
const activeLinkSm = {fontSize: '2.5vw', color: "#F8B04B", fontWeight: 'bolder',textAlign: 'center', fontFamily: font}

export default function NavBarHome() {
    const [change, setChange] = useState(false);
    const changePosition = 5;

    let position = useWindowScrollPosition();
    // position == { x: 0, y: 0 }

    if (position.y > changePosition && !change) {
        setChange(true);
    }

    if (position.y <= changePosition && change) {
        setChange(false);
    }

    let style = {
        backgroundColor: change ? "#F9DDB7" : "transparent",
        transition: "400ms ease",
        'maxHeight': '10vh',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };

    let styleSm = {
        backgroundColor: change ? "#F9DDB7" : "transparent",
        transition: "400ms ease",
        'maxHeight': '8vh',
        height: 'auto',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };

    const [customStyle, setCustomStyle] = React.useState(grey);

    const [anchorEl, setAnchorEl] = React.useState(null);

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
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} style={styleItem}>
                                    <NavLink to="/">
                                        <img src={logo} alt="Metta Capital Logo" style={{width: '10vw'}}></img>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={1} style={styleItem}>
                                    <NavLink to="/about-us" style={styleLink} activeStyle={activeLink}>
                                        <p>About Us</p>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={1} style={styleItem}>
                                    <div style={{cursor: 'pointer'}} onClick={(e)=>handleClick(e)} aria-controls="simple-menu" aria-haspopup="true">
                                            <p id="Expertise Dropdown" style={{fontSize: '1.3vw', color:customStyle, textAlign: 'center', fontFamily: font}}>Expertise</p>
                                    </div>
                                    <Menu
                                        id="simple-menu"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={()=>handleClose()}
                                        elevation={0}
                                       
                                    >
                                        <div style={{backgroundColor: '#ACB5B4', marginTop: '-1vh', paddingTop: '2vh', marginBottom: '-1.25vh'}}>
                                            <NavLink to="/mergers-acquisitions" style={styleLink} activeStyle={activeLink}>
                                                <MenuItem onClick={()=>handleClose("selected")}>
                                                    M&A Advisory
                                                </MenuItem>
                                            </NavLink>
                                            <NavLink to="/strategic-advisory" style={styleLink} activeStyle={activeLink}>
                                                <MenuItem onClick={()=>handleClose("selected")}>
                                                Strategic Advisory
                                                </MenuItem>
                                            </NavLink>
                                            <NavLink to="/fund-raise" style={styleLink} activeStyle={activeLink}>
                                                <MenuItem onClick={()=>handleClose("selected")}>
                                                Fund Raising
                                                </MenuItem>
                                            </NavLink>
                                        </div>
                                    </Menu>
                                </Grid>
                                <Grid item xs={1} style={styleItem}>
                                    <NavLink to="/team" style={styleLink} activeStyle={activeLink}>
                                        <p>Team</p>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={1} style={styleItem}>
                                    <NavLink to="/transactions" style={styleLink} activeStyle={activeLink}>
                                        <p>Transactions</p>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={1} style={styleItem}>
                                    <NavLink to="/contact" style={styleLink} activeStyle={activeLink}>
                                        <p>Contact</p>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
                <Hidden smUp>
                    <AppBar elevation={0} style={styleSm}>
                        <Toolbar>
                            <Grid container spacing={0}>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={2} style={styleItem}>
                                    <NavLink to="/">
                                        <img src={logo} alt="Metta Capital Logo" style={{width: '12vw'}}></img>
                                    </NavLink>
                                </Grid>
                                <Grid item xs={1}></Grid>
                                <Grid item xs={8}>
                                    <Grid container direction="row" justify="space-around">
                                        <NavLink to="/about-us" style={styleLinkSm} activeStyle={activeLinkSm}>
                                            <p>About Us</p>
                                        </NavLink>
                                    
                                        <div style={{cursor: 'pointer'}} onClick={(e)=>handleClick(e)} aria-controls="simple-menu" aria-haspopup="true">
                                            <p id="Expertise Dropdown" style={{fontSize: '2.5vw', color:customStyle, textAlign: 'center', fontFamily: font}}>Expertise</p>
                                        </div>
                                        <Menu
                                            id="simple-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={anchorEl}
                                            onClose={handleClose}
                                            style={{color: '#F9DDB7'}}
                                        >
                                            
                                            <div style={{backgroundColor: '#ACB5B4', marginTop: '-1.25vh', marginBottom: '-1.25vh'}}>
                                                <NavLink to="/mergers-acquisitions" style={styleLinkSm} activeStyle={activeLinkSm}>
                                                    <MenuItem onClick={()=>handleClose("selected")}>
                                                        M&A Advisory
                                                    </MenuItem>
                                                </NavLink>
                                                <NavLink to="/strategic-advisory" style={styleLinkSm} activeStyle={activeLinkSm}>
                                                    <MenuItem onClick={()=>handleClose("selected")}>
                                                    Strategic Advisory
                                                    </MenuItem>
                                                </NavLink>
                                                <NavLink to="/fund-raise" style={styleLinkSm} activeStyle={activeLinkSm}>
                                                    <MenuItem onClick={()=>handleClose("selected")}>
                                                    Fund Raising
                                                    </MenuItem>
                                                </NavLink>
                                            </div>

                                        </Menu>
                                        <NavLink to="/team" style={styleLinkSm} activeStyle={activeLinkSm}>
                                            <p>Team</p>
                                        </NavLink>
                                        <NavLink to="/transactions" style={styleLinkSm} activeStyle={activeLinkSm}>
                                            <p>Transactions</p>
                                        </NavLink>
                                        <NavLink to="/contact" style={styleLinkSm} activeStyle={activeLinkSm}>
                                            <p>Contact</p>
                                        </NavLink>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </div>
        </div>
        
    );
}