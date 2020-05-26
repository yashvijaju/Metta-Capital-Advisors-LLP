import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'

const styleItem = {display: 'flex', 'flexDirection': 'column', 'justifyContent': 'center', color: 'black'}

export default function NavBar() {
    return(
        <div>
            <AppBar elevation={0} style={{'background-color': "#F9DDB7", 'height': '7vh', position: 'fixed', top: '93vh'}}>
                    <Grid container spacing={0}>
                    <Grid item xs={1} style={styleItem}>
                    </Grid>
                        <Grid item xs={5} style={styleItem}>
                            <p>Metta Capital Advisors LLP @ 2016. All rights reserved.</p>
                        </Grid>
                    </Grid>
            </AppBar>
                
        </div>
    );
}