import { useParams,useNavigate } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect,useState} from "react";
import * as React from 'react';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';



export function ProductDetailsMetrial() {
  const { id } = useParams();
  const navigate=useNavigate()
  const[metrial,setMetrial]=React.useState([])
  useEffect(()=>{
   fetch(`https://practies-node.vercel.app/metrial/${id}`,{
     method:"GET",
   })
   .then((data)=>data.json())
   .then((Pets)=>setMetrial(Pets))},[])
  return (
    <div>
       <div className="item1">
    <div className="pet-image">
    <img className="imgae" src={metrial.image}/>
    </div>
    
    <div className="msin">
      <Card  sx={{ maxWidth: 650}}>
      <div> 
        <div className="hearts"> 
      <Tooltip title="Favorite">
    <IconButton>
    <FavoriteBorderIcon/>
 </IconButton>
  </Tooltip>
      </div>
      <div className="dr">
            <img className="doctor-image" src={metrial.oner}/>

        
        </div>
<Typography className="name11" gutterBottom variant="h5" component="div">
<Typography variant="body2" color="text.secondary">{metrial.position}</Typography>
      Mr.{metrial.onername}
        </Typography>
      <div className="one">
      <Typography gutterBottom variant="h5" component="div"><ShoppingCartRoundedIcon/>
     {metrial.name}
      </Typography>
     
     
      </div>
      <div className='loc-dt1'>
      <Typography variant="body2" color="text.secondary"><LocationOnIcon/> {metrial.location} </Typography>
     
      </div>
      </div>
      <Typography className="call" variant="body2" color="text.secondary"><CallIcon/> {metrial.number} </Typography>
      
 </Card>   
 </div>


 </div>
 <Button variant="contained" onClick={()=>navigate(-1)}><ArrowCircleLeftIcon/>BACK</Button>
 </div>
  );
}
