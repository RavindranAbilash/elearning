import {Grid, Typography} from "@mui/material";
import home4 from'../images/HOME4.jpg'
import TeacherCard from "../components/cards/TeacherCard";

const SelectTeacher=()=>{
    return(
        <container>
            <Grid item container md={12} style={{backgroundColor:"#89d0ca",paddingTop:100,paddingBottom:100}} justify='center' >
                <Grid item container md={2}>

                </Grid>
                <Grid item container md={4}>
                    <Typography variant='h1' style={{fontWeight:400,fontSize:64,paddingBottom:50}}>
                        Select Your Teacher
                    </Typography>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                    <TeacherCard/>
                </Grid>
                <Grid item container md={1}>

                </Grid>
                <Grid item container md={4} style={{paddingTop:200}}>
                    <img src={home4} alt='ahaka'  style={{width:"90%",height:"100%",boxShadow: "4px 8px 8px 0"}}/>
                </Grid>
                <Grid item container md={0.5}>

                </Grid>
            </Grid>
        </container>
    )
}
export default SelectTeacher;