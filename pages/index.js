import Head from 'next/head'
import Link from 'next/link'
// import styles from '../styles/Home.module.css'
import NavBarHome from '../Components/NavBarHome';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Footer from '../Components/Footer';
// import withWidth from '@material-ui/core/withWidth';
import Hidden from '@material-ui/core/Hidden';

const grey = '#808080';
const font = 'Lato';

const styleItem = {'paddingTop': '3vw', 'paddingLeft': '10vw'}
const styleHeadline = {color:'#f8b04b', fontFamily: font}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Metta Capital Advisors LLP</title>
        <meta name="description" content="Metta Capital Advisors LLP is a boutique investment bank in Mumbai" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Metta Capital Advisors LLP" />
        <meta property="og:description" content="Metta Capital Advisors LLP is a boutique investment bank in Mumbai" />
        <meta property="og:site_name" content="Metta Capital Advisors LLP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <div style={{'minHeight': '90vh', 'paddingBottom': '5vh'}}>
          <NavBarHome></NavBarHome>
          <div className="row" style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', position: 'relative'}}>
            <img src="/assets/bg.jpg" alt="Worli Sea Link" style={{objectFit: 'fill', maxHeight: '90vh', width: '100vw', zIndex: '-1'}}/>
          </div>
          <Hidden xlDown>
            <div style={{marginTop:'-75vh', paddingLeft: '10vw', paddingBottom: '50vh'}}>
              <Typography variant="h3" style={{color:'#000000', fontFamily: font, fontWeight:'bold'}}>
                Metta Capital Advisors LLP
              </Typography>
              <Typography variant="h6" style={{color:'#000000', fontFamily: font}}>
                A boutique investment bank led by seasoned bankers.
              </Typography>
            </div>
          </Hidden>
          <Hidden xsUp>
            <Hidden xsDown>
              <div style={{marginTop:'-50vh', paddingLeft: '10vw', paddingBottom: '35vh'}}>
                <Typography variant="h3" style={{color:'#000000', fontFamily: font}}>
                  Metta Capital Advisors LLP
                </Typography>
                <Typography variant="h6" style={{color:'#000000', fontFamily: font}}>
                  A boutique investment bank led by seasoned bankers.
                </Typography>
              </div>
            </Hidden>
            <Hidden smUp>
              <div style={{marginTop:'-15vh', paddingLeft: '10vw', paddingBottom: '0vh'}}>
                <Typography variant="h5" style={{color:'#ffffff', fontFamily: font}}>
                  Metta Capital Advisors LLP
                </Typography>
                <Typography variant="body2" style={{color:'#ffffff', fontFamily: font}}>
                  A boutique investment bank led by seasoned bankers.
                </Typography>
              </div>
            </Hidden>
          </Hidden>
          
          <Hidden smDown>
            <Grid container spacing={0} direction="row" style={{paddingTop: '2vh', backgroundColor: '#F9DDB7', padding: '5vh 0vw 5vh 10vw'}}>
              <Grid item xs={10}>
                <Typography variant="h4" style={{color: 'black', fontFamily: font}}>
                  Metta Capital Advisors LLP
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body1" style={{color: 'black', fontFamily: font}}>
                  A boutique investment bank led by seasoned bankers
                </Typography>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container spacing={0} direction="row" style={{paddingTop: '2vh', backgroundColor: '#F9DDB7', padding: '3vh 0vw 3vh 10vw'}}>
              <Grid item xs={10}>
                <Typography variant="h6" style={{color: 'black', fontFamily: font}}>
                  Metta Capital Advisors LLP
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography variant="body2" style={{color: 'black', fontFamily: font}}>
                  A boutique investment bank led by seasoned bankers
                </Typography>
              </Grid>
            </Grid>
          </Hidden>

          <Grid container spacing={0} direction="row" style={{padding: '5vh 0vw 5vh 0vw'}}>
              <Grid item xs={10} sm={3} style={styleItem}>
                  <Link href="/mergers-acquisitions">
                      <Grid container direction="row" style={{cursor: 'pointer'}}>
                        <Grid item xs={2} sm={3} md={2}>
                          <Typography gutterBottom variant="h4" style={styleHeadline}>
                          1
                          </Typography>
                        </Grid>
                        <Grid item xs={10} sm={9} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                          <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                          M&A Advisor in India by total deal value in Q3 CY 2020 - VCC Edge League Tables
                          </Typography>
                        </Grid>
                      </Grid>
                  </Link>
              </Grid>
              <Grid item xs={10} sm={3} style={styleItem}>
                  <Link href="/mergers-acquisitions">
                      <Grid container direction="row" style={{cursor: 'pointer'}}>
                        <Grid item xs={2} sm={3} md={2}>
                          <Typography gutterBottom variant="h4" style={styleHeadline}>
                          4
                          </Typography>
                        </Grid>
                        <Grid item xs={10} sm={9} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                          <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                          M&A Advisor in India by total deal value in CY 2020  -  Venture Intelligence League Tables                        </Typography>
                        </Grid>
                      </Grid>
                  </Link>
              </Grid>
              <Grid item xs={10} sm={3} style={styleItem}>
                  <Link href="/about-us">
                      <Grid container direction="row" style={{cursor: 'pointer'}}>
                        <Grid item xs={2} sm={3} md={2}>
                          <Typography gutterBottom variant="h4" style={styleHeadline}>
                          1
                          </Typography>
                        </Grid>
                        <Grid item xs={10} sm={9} md={10} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                          <Typography variant="body2" gutterBottom style={{color: grey, fontFamily: font}}>
                          Ranked #1 for P/E and M&A transactions in Fashion and Retail in India for most of 2016-2021
                          </Typography>
                        </Grid>
                      </Grid>
                  </Link>
              </Grid>
          </Grid>
        </div>
        <Footer/>
      </div>
    </div>
  )
}
