import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import logo from './Media/logo.gif'
import Grid from '@material-ui/core/Grid'
import { NavLink } from 'react-router-dom';

const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center'}
const styleLink = {fontSize: '1.3vw', textDecoration: 'none', color: '#000000', textAlign: 'center'}
const activeLink = {color: "#F8B04B", fontWeight: 'bold'}

export default function NavBar() {
    return(
        <div>
            <AppBar elevation={0} style={{'background-color': "#F9DDB7", 'max-height': '10vh', position: 'fixed', top: '0'}}>
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
                        <Grid item xs={1} style={styleItem}>
                            <NavLink to="/why-us" style={styleLink} activeStyle={activeLink}>
                                <p>Why Us</p>
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
                            <NavLink to="/clients" style={styleLink} activeStyle={activeLink}>
                                <p>Clients</p>
                            </NavLink>
                        </Grid>
                        <Grid item xs={1} style={styleItem}>
                            <NavLink to="/media" style={styleLink} activeStyle={activeLink}>
                                <p>Media</p>
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
                
        </div>
    );
}