import { useParams,useNavigate } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Card from '@mui/material/Card';
import { Chatt } from "./Chatt";
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Date1 } from "./date1";
import { useEffect,useState} from "react";
import * as React from 'react';

export function ProductDetails() {
  const { id } = useParams();
  const navigate=useNavigate()
  const [items,setItmes]=React.useState([]) 
  useEffect(()=>{
   fetch(`https://practies-node.vercel.app/pet/${id}`,{
     method:"GET",
   })
   .then((data)=>data.json())
   .then((Pets)=>setItmes(Pets))},[])
   console.log(items)
  return (
    <div>
      <div className="item1">
      <div className="pet-image">
      <img className="imgae" src={items.image}/>
      </div>
      
      <div className="msin">
        <Card  sx={{ maxWidth: 650}}>
        <div>
        <div className="flex">
        <Typography gutterBottom variant="h5" component="div">
        <CurrencyRupeeIcon/>{items.amount}
        </Typography>
       
        <div className="hearts"> 
        <Tooltip title="Favorite">
      <IconButton>
   <FavoriteBorderIcon/>
   </IconButton>
    </Tooltip>
        </div>
        </div>
        <div className='name'><ArrowRightIcon />{items.name}</div>
        <div className='loc-dt'>
        <Typography className="hi12" variant="body2" color="text.secondary"><ArrowRightIcon />{items.location}<LocationOnIcon/></Typography>
        <Typography variant="body2" color="text.secondary"   ><Date1/>  </Typography>
        </div>
        <Typography className="hi1" variant="body2" color="text.secondary"><ArrowRightIcon />Gender PET:{items.gender} </Typography>
        </div>
   </Card>   
   </div>
</div>
<div className="veramathri">
<Chatt/>
<Button  variant="contained" onClick={()=>navigate(-1)}><ArrowCircleLeftIcon/>BACK</Button>
   </div> 
   </div>
  );
}
