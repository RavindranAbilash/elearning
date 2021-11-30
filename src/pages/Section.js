import {Grid, Typography} from "@mui/material";
import SectionCard from "../components/cards/SectionCard";

const Section=()=>{
    return(
        <container>
            <Grid container item md={12} style={{paddingTop:100,paddingBottom:100}}>
                <Grid container item md={12} justifyContent="center">
                    <Typography variant="h2" style={{fontWeight:"bold",paddingBottom:100,}}>
                        Select The Section
                    </Typography>
                </Grid>
                <Grid container item md={1}>

                </Grid>
                <Grid container item md={10} justifyContent="center">
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                    <SectionCard/>
                </Grid>
                <Grid container item md={1}>

                </Grid>
            </Grid>

        </container>
    )
}
export default Section;