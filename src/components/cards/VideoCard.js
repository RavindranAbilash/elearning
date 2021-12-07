import ReactPlayer from "react-player";
import {Grid, Typography} from "@mui/material";


const VideoCard=()=>{
    return(
        <container >
            <Grid container item style={{margin:10}} md={12}>
                <ReactPlayer
                    className='react-player'
                    url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                    width="300px"
                    height="200px"
                    controls={true}
                />
            </Grid>
            <Grid container item md={12} justifyContent="center" style={{marginBottom:30}}>
                <Typography variant="h5">Video 1</Typography>
            </Grid>
        </container>


    )
}

export default VideoCard;