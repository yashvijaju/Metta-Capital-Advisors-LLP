import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden';

const grey = '#808080';
const font = 'Helvetica Neue';

export default function Footer() {
    return(
        <div>
            <Hidden smDown>
                <div style={{'background-color': "#F9DDB7", 'max-height': '10vh', 'min-height': '3vh', height: 'auto', position: 'relative', 'bottom': '0', width: '100%', display: 'flex', flexDirection: 'column', justify: 'center', 'padding-top': '2vh', 'padding-bottom': '1vh'}}>
                    <Grid container direction="row" justify="center" style={{color: grey, fontFamily: font}}>
                        <Typography style={{fontSize: 'min(1vw,13px)'}}>
                        © 2016 Metta Capital Advisors LLP. All rights reserved | +91 22 2611-9900 | contact@mettacapital.in | 803 Symphony, Nehru Rd, Vile Parle East, Mumbai - 400057
                        </Typography>
                    </Grid>       
                </div>
            </Hidden>

            <Hidden mdUp>
                <div style={{'background-color': "#F9DDB7", 'max-height': '10vh', 'min-height': '3vh', height: 'auto', position: 'relative', 'bottom': '0', width: '100%', display: 'flex', flexDirection: 'column', justify: 'center', 'padding-top': '2vh', 'padding-bottom': '1vh'}}>
                    <Grid container direction="row" justify="center" style={{color: grey, fontFamily: font}}>
                        <Typography style={{fontSize: 'min(1.5vw,10px)'}}>
                        © 2016 Metta Capital Advisors LLP. All rights reserved <br/>
                         +91 22 2611-9900 | contact@mettacapital.in | 803 Symphony, Nehru Rd, Vile Parle East, Mumbai - 400057
                        </Typography>
                    </Grid>       
                </div>
            </Hidden>
        </div>
    );
}
