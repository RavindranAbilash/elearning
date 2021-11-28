
import {Card, CardActionArea, CardContent, CardMedia, Typography} from "@mui/material";
import Math from '../../images/Subject/Math3.png'

const SubjectCard=()=>{
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
                    image={Math}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" style={{fontWeight:400,fontSize:"1.2rem",lineHeight:1.4,textAlign:"center"}}>
                        Mathematics
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default SubjectCard;