import {Grid, Typography} from "@mui/material";
import VideoCard from "../components/cards/VideoCard";


const Content=()=>{
    return(
        <container>
            <Grid item container md={12} style={{marginTop:100,marginBottom:100}}>
                <Grid item container md={2}>

                </Grid>
                <Grid item container md={8}>
                    <Grid item container md={12}>
                        <Typography variant="h2">Grade 11 Maths</Typography>
                    </Grid>
                    <Grid item container md={12}>
                        <Typography variant="h3">Real Number</Typography>
                    </Grid>
                    <Grid item container md={12}>
                        <Typography variant="h5">Dr.Abudhulkalam</Typography>
                    </Grid>
                    <Grid item container md={12} style={{marginTop:40}}>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                        <VideoCard/>
                    </Grid>

                </Grid>
                <Grid item container md={2}>

                </Grid>
            </Grid>
        </container>
    )
}

export default Content;