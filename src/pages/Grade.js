import {Button, Grid, Typography} from "@mui/material";
import home2 from '../images/home2.jpg'

const GradeList=["GRADE 1","GRADE 2","GRADE 3","GRADE 4","GRADE 5","GRADE 6","GRADE 7","GRADE 8","GRADE 9","GRADE 10","GRADE 11","G.E.C A/L"]
const Grade = () => {
    return(
        <container>
            <Grid item container md={12} style={{marginTop:100,marginBottom:100}}>
                <Grid item container md={2}>

                </Grid>
                <Grid item container md={4}>
                    <img src={home2} alt="akka" style={{borderRadius:"50%",width:"90%",height:"80%"}}/>
                </Grid>
                <Grid item container md={4} justifyContent="center">
                    <Typography variant='h1' style={{fontWeight:400,fontSize:64,}}>
                        Select Your Grade
                    </Typography>
                    {GradeList.map((grade,index)=>(
                        <Button id={index} variant="contained" size="large" style={{backgroundColor:"#111",margin:25}}>{grade}</Button>
                    ))}
                </Grid>
            </Grid>
        </container>
    )
}

export default Grade;