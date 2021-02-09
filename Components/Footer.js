import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden';

const grey = '#808080';
const font = 'Lato';

export default function Footer() {
    return(
        <div>
            <Hidden smDown>
                <div style={{'backgroundColor': "#F9DDB7", 'maxHeight': '10vh', 'minHeight': '3vh', height: 'auto', position: 'relative', 'bottom': '0', width: '100%', display: 'flex', flexDirection: 'column', justify: 'center', 'paddingTop': '2vh', 'paddingBottom': '1vh'}}>
                    <Grid container direction="row" style={{color: grey, fontFamily: font, paddingLeft: '10vw'}}>
                        <Grid item xs={10}>
                            <Typography variant="caption" style={{fontFamily: font}}>
                            © 2016 Metta Capital Advisors LLP. &nbsp; All rights reserved <br/>
                            +91 22 2611-9900 &nbsp;| &nbsp;contact@mettacapital.in &nbsp; | &nbsp; 
                            803 Symphony, Nehru Rd, Vile Parle East, Mumbai - 400057
                            </Typography>
                        </Grid>
                    </Grid>       
                </div>
            </Hidden>

            <Hidden mdUp>
                <div style={{'backgroundColor': "#F9DDB7", 'maxHeight': '10vh', 'minHeight': '3vh', height: 'auto', position: 'relative', 'bottom': '0', width: '100%', display: 'flex', flexDirection: 'column', justify: 'center', 'paddingTop': '2vh', 'paddingBottom': '1vh'}}>
                    <Grid container direction="row" style={{color: grey, fontFamily: font}}>
                        <Grid item xs={1}></Grid>
                        <Grid item xs={11}>
                            <Typography variant="caption" style={{fontFamily: font}}>
                            © 2016 Metta Capital Advisors LLP. &nbsp; All rights reserved <br/>
                            +91 22 2611-9900&nbsp; |&nbsp; contact@mettacapital.in &nbsp; | &nbsp;
                            803 Symphony, Nehru Rd, Vile Parle East, Mumbai - 400057
                            </Typography>
                        </Grid>
                    </Grid>       
                </div>
            </Hidden>
        </div>
    );
}
