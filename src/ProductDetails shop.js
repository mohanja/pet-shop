import { useNavigate, useParams } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Card from '@mui/material/Card';
import { Navigate } from "react-router-dom";
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Date1 } from "./date1";
import { useEffect,useState} from "react";
import * as React from 'react';
export function ProductDetailsShop() {
  
  const { id } = useParams();
  const navigate=useNavigate()
  const[shop,setShop]=React.useState([])
  useEffect(()=>{
   fetch(`https://practies-node.vercel.app/shop/${id}`,{
     method:"GET",
   })
   .then((data)=>data.json())
   .then((Pets)=>setShop(Pets))},[])

  return (
    <div> 
      <div className="item1">
    <div className="pet-image">
    <img className="imgae" src={shop.image}/>
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
            <img className="doctor-image" src={shop.oner}/>

        
        </div>
       
<Typography className="name11" gutterBottom variant="h5" component="div">
   <Typography variant="body2" color="text.secondary">{shop.position}</Typography>
      {shop.onername}
        </Typography>
      <div className="one">
      <Typography gutterBottom variant="h5" component="div"><StorefrontIcon/>
     {shop.name}
      </Typography>
     
     
      </div>
      <div className='loc-dt1'>
      <Typography variant="body2" color="text.secondary"><LocationOnIcon/> {shop.location} </Typography>
     
      </div>
      </div>
      <Typography className="call" variant="body2" color="text.secondary"><CallIcon/> {shop.number} </Typography>
      
 </Card>   
 </div>

 
 </div>
 <Button variant="contained" onClick={()=>navigate(-1)}><ArrowCircleLeftIcon/>BACK</Button>
 </div>
  );
}
