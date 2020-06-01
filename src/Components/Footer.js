import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



export default function Footer() {
    return(
        <div style={{'background-color': "#F9DDB7", 'max-height': '10vh', 'min-height': '5vh', height: 'auto', position: 'relative', 'bottom': '0', width: '100%', 'padding-top': '2vh'}}>
            <Grid container direction="column" justify="center" style={{'padding-left': '10vw'}}>
                <Grid item xs={11} style={{color: 'black'}}>
                    <Typography variant="body2">
                    mettacapital@gmail.com | 022 8888 8888
                    </Typography>
                </Grid>
                <Grid item xs={11} style={{color: 'black', 'padding-bottom': '1vh'}}>
                    <Typography variant="body2">
                    Copyright © Metta Capital Advisors LLP 2016. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>       
        </div>
    );
}