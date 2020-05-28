import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'



export default function Footer() {
    return(
        <div style={{'background-color': "#F9DDB7", 'height': 'auto', position: 'relative', 'bottom': '0', width: '100%','margin-top': '10vh'}}>
            <Grid container direction="row">
                <Grid item xs={1}/>
                <Grid item xs={11} style={{color: 'black', 'padding-top': '10px'}}>
                    <Typography variant="body2">
                    mettacapital@gmail.com | 022 8888 8888
                    </Typography>
                </Grid>
                <Grid item xs={1}/>
                <Grid item xs={11} style={{color: 'black', 'padding-bottom': '10px'}}>
                    <Typography variant="body2">
                    Copyright © Metta Capital Advisors LLP 2016. All rights reserved.
                    </Typography>
                </Grid>
            </Grid>       
    </div>
    );
}