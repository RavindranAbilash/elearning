import {Button, Grid, Typography} from "@mui/material";
import homeImg from '../images/HomeImg.jpg'


function Home() {
    return(
        <container>
            <Grid item container md={12} style={{backgroundColor:"#89d0ca"}} justify='center' >
                <Grid item container md={2}>

                </Grid>
                <Grid item container md={5} style={{paddingTop:150,paddingBottom:200}}>
                    <Typography variant="h5" style={{fontWeight:700,letterSpacing:5}}>
                        ONLINE LEARNING
                    </Typography>
                    <Typography variant='h1' style={{fontWeight:400,fontSize:80,paddingTop:20}}>
                        Learn
                        <span style={{fontWeight:700}}> Everyday</span>
                    </Typography>
                    <Typography style={{fontSize:20,paddingTop:20}}>
                        අධ්‍යාපනයේ මුල් කටුක වුවත් ඵල​ මිහිරි ය.
                    </Typography>
                    <Typography style={{fontSize:20,paddingTop:5}}>
                        கல்வியின் வேர்கள் கசப்பானவை, ஆனால் பழம் இனிப்பானது.
                    </Typography>
                    <Typography style={{fontSize:20,paddingTop:5}}>
                        The roots of education are bitter, but the fruit is sweet.
                    </Typography>
                    <Grid item container md={7} style={{paddingTop:30,display:"flex", justifyContent: "space-between" ,alignItems:"center"}}>
                        <Button variant="contained" size="large" style={{backgroundColor:"#111"}}>සිංහල</Button>
                        <Button variant="contained" size="large" style={{backgroundColor:"#111"}}>தமிழ்</Button>
                        <Button variant="contained" size="large" style={{backgroundColor:"#111"}}>ENGLISH</Button>
                    </Grid>


                </Grid>
                <Grid item container md={5}>
                    <img src={homeImg} alt="student" width="120%"/>
                </Grid>
            </Grid>
        </container>
    )
}

export default Home;