import {Grid, Typography} from "@mui/material";


const SectionCard=()=>{
    return(
        <container style={{backgroundColor:"#f2f2f2",width:260,height:260,marginLeft:25,marginBottom:25}}>
            <Grid item container md={12}>
                <Typography variant="h3" style={{color:"#fff",backgroundColor:"#89d0ca",padding:15,borderRadius:"50%",margin:30,fontWeight:"bold"}}>01</Typography>
            </Grid>
            <Grid item container md={12}>
                <Typography style={{fontWeight:"bold",fontSize:20,marginLeft:30}}>Indices and Logarithms-1</Typography>
            </Grid>

        </container>
    )
}

export default SectionCard;