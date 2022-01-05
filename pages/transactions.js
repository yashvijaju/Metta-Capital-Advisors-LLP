import { useState, useEffect } from 'react';
import NavBar from '../Components/NavBar';
import {Typography, Hidden, Grid} from '@material-ui/core'

import Footer from '../Components/Footer';

const font = 'Lato';

export default function Transactions() {

    const [arrayIndex, setArrayIndex] = useState(0);

    let arrayImg = ["/assets/tombstones_1.jpg","/assets/tombstones_2.jpg","/assets/tombstones_3.jpg","/assets/tombstones_4.jpg","/assets/tombstones_5.jpg"];

    useEffect(() => {
        setTimeout(() => {
            if (arrayIndex === 4) setArrayIndex(0)
            else setArrayIndex(arrayIndex+1)
        }, 5000);
      }, [arrayIndex])


    return(
        <div>
            <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
                <NavBar></NavBar>
                <Hidden xsDown>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg2.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Transactions
                        </Typography>
                    </div>
                </Hidden>
                <Hidden smUp>
                    <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative', top: '0'}}>
                        <img src="/assets/bg3.jpg" alt="Worli Sea Link" style={{'objectFit': 'fill', 'maxHeight': '50vh', 'width': '100vw', opacity: '0.9'}}/>
                    </div>
                    <div className="row" style={{position: 'relative', 'marginTop': '-10vh', 'paddingLeft': '10vw'}}>
                        <Typography variant="h4" style={{color: 'white', fontFamily: font, fontWeight: 'bolder'}}>
                            Transactions
                        </Typography>
                    </div>
                </Hidden>

                <Hidden xsDown>
                    <Grid container justify="center">
                        <Grid item xs={10} style={{'paddingTop': '10vh'}}>
                            <img src={arrayImg[arrayIndex]} alt="tombstones" width="100%"/>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container direction="column" alignItems="center">
                        <Grid item xs={10} style={{'paddingTop': '10vh'}}>
                            <img src={arrayImg[0]} alt="tombstones" width="100%"/>
                        </Grid>
                        <Grid item xs={10} style={{'paddingTop': '1vh'}}>
                            <img src={arrayImg[1]} alt="tombstones" width="100%"/>
                        </Grid>
                        <Grid item xs={10} style={{'paddingTop': '1vh'}}>
                            <img src={arrayImg[2]} alt="tombstones" width="100%"/>
                        </Grid>
                        <Grid item xs={10} style={{'paddingTop': '1vh'}}>
                            <img src={arrayImg[3]} alt="tombstones" width="100%"/>
                        </Grid>
                        <Grid item xs={10} style={{'paddingTop': '1vh'}}>
                            <img src={arrayImg[4]} alt="tombstones" width="100%"/>
                        </Grid>
                    </Grid>
                </Hidden>
                </div>
            <Footer/>
        </div>
    );
}