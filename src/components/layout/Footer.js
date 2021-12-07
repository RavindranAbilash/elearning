import {Grid} from "@mui/material";
import {Typography} from "@mui/material";



function Footer(){
    return(
        <container>
            <Grid container item style={{backgroundColor:"black", padding:30}}>
                <Grid container item style={{paddingLeft:35}}>
                    <Grid container item md={2}>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Udemy Business</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Teach on Udemy</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Get the app</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>About us</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Contact us</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item md={2}>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Careers</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Blog</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Help and Support</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Affiliate</Typography>
                        </Grid>
                    </Grid>
                    <Grid container item md={2}>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Terms</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Privacy policy</Typography>
                        </Grid>
                        <Grid item md={12}>
                            <Typography style={{color:"white"}}>Sitemap</Typography>
                        </Grid>

                    </Grid>
                    <Grid container item md={4}>
                    </Grid>


                </Grid>
                <Grid container item style={{paddingLeft:35,paddingTop:50}}>
                    <Grid item md={2}>
                        <Typography style={{color:"white",fontSize:36}}>LOGO</Typography>
                    </Grid>
                    <Grid item md={8}>
                    </Grid>
                    <Grid item md={2}>
                        <Typography style={{color:"white"}}>© 2021 Udemy, Inc.</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </container>
    )
}

export default Footer;