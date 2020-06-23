import React, { useState, useRef, useEffect } from 'react';
import ReactDOM from "react-dom";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from './Media/logo.gif'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

const grey = '#808080';
const font = 'Roboto';
const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
const styleLink = {fontSize: '1.3vw', textDecoration: 'none', color: grey, textAlign: 'center', fontFamily: font}
const styleLinkSm = {fontSize: '2.5vw', textDecoration: 'none', color: grey, textAlign: 'center', fontFamily: font}
const activeLink = {color: "#F8B04B", fontWeight: 'bolder'}

export default function NavBar() {
    let style = {
        backgroundColor: "#F9DDB7",
        'max-height': '10vh',
        height: 'auto',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };

      let styleSm = {
        backgroundColor: "#F9DDB7",
        'max-height': '8vh',
        height: 'auto',
        position: "fixed",
        right: 0,
        left: 0,
        top: 0
      };


    return(
        <div class="container">
            <div class="row">
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
                                    <NavLink to="/expertise" style={styleLink} activeStyle={activeLink}>
                                        <p>Expertise</p>
                                    </NavLink>
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
                                <Grid container xs={8} direction="row" justify="space-around">
                                    <NavLink to="/about-us" style={styleLinkSm} activeStyle={activeLink}>
                                        <p>About Us</p>
                                    </NavLink>
                                
                                    <NavLink to="/expertise" style={styleLinkSm} activeStyle={activeLink}>
                                        <p>Expertise</p>
                                    </NavLink>
                                    <NavLink to="/team" style={styleLinkSm} activeStyle={activeLink}>
                                        <p>Team</p>
                                    </NavLink>
                                    <NavLink to="/transactions" style={styleLinkSm} activeStyle={activeLink}>
                                        <p>Transactions</p>
                                    </NavLink>
                                    <NavLink to="/contact" style={styleLinkSm} activeStyle={activeLink}>
                                        <p>Contact</p>
                                    </NavLink>
                                </Grid>
                            </Grid>
                        </Toolbar>
                    </AppBar>
                </Hidden>
            </div>
        </div>
        
    );
}