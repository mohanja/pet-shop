import { useParams,useNavigate } from "react-router-dom";
import CallIcon from '@mui/icons-material/Call';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Date1 } from "./date1";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { useEffect,useState} from "react";
import * as React from 'react';

export function ProductDetailsHospital() {
  const { id } = useParams();
  const navigate=useNavigate()
  const[hospital,setHospital]=React.useState([])
  useEffect(()=>{
   fetch(`https://practies-node.vercel.app/hosptial/${id}`,{
     method:"GET",
   })
   .then((data)=>data.json())
   .then((Pets)=>setHospital(Pets))},[])
  return (

    <div> 
      <div className="item1">
    <div className="pet-image">
    <img className="imgae" src={hospital.image}/>
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
            <img className="doctor-image" src={hospital.doctor}/>
        
        </div>
        
<Typography className="name11" gutterBottom variant="h5" component="div">
  <Typography variant="body2" color="text.secondary">{hospital.position} </Typography>
      Mr.{hospital.doctorname}
        </Typography>
      <div className="one">
      <Typography gutterBottom variant="h5" component="div"><LocalHospitalIcon/>
     {hospital.name}
      </Typography>
     
     
      </div>
      <div className='loc-dt1'>
      <Typography variant="body2" color="text.secondary"><LocationOnIcon/> {hospital.location} </Typography>
     
      </div>
      </div>
      <Typography className="call" variant="body2" color="text.secondary"><CallIcon/> {hospital.number} </Typography>
      
 </Card>   
 </div>
</div>
<div className="ingo">
<Button variant="contained" onClick={()=>navigate(-1)}><ArrowCircleLeftIcon/>BACK</Button>
</div>
 </div>
  );
}
