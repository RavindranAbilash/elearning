
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Math from '../../images/Subject/Math3.png'
import home3 from '../../images/Home3.jpg'

const TeacherCard=()=>{
    return(
        // <div style={{backgroundColor:"white" ,paddingLeft:25,paddingRight:25,paddingTop:5,paddingBottom:5,borderRadius:17,boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
        //     <CalculateOutlinedIcon fontSize="large" style={{fontSize:100}}/>
        //     <Typography variant="h4" style={{fontWeight:400,fontSize:"1.5rem",lineHeight:1.2,textAlign:"center"}}>Math</Typography>
        // </div>
        <Card style={{width:150,borderRadius:17,margin:5,boxShadow: "4px 8px 8px 0"}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="90"
                    image={home3}
                    alt="green iguana"
                    style={{borderRadius:"50%",width:90,margin:"auto",marginTop:20}}
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" style={{fontWeight:400,fontSize:"1.2rem",lineHeight:1.4,margin:"auto"}}>
                        Dr.Abdhulkalam
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default TeacherCard;