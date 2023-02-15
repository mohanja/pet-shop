import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { AddItmes } from "./AddItmes";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Date1 } from "./date1";
import { SliderMani } from "./SliderMani";
import { Navbar } from "./Navbar";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect} from "react";
import DeleteIcon from '@mui/icons-material/Delete';

export function ProductMetrial() {
 
  const[metrial,setMetrial]=useState([])

  
  const getPets=()=>{
     fetch("https://practies-node.vercel.app/metrial",{
      method:"GET",
    })
    .then((data)=>data.json())
    .then((Pets)=>setMetrial(Pets))}
 
    useEffect(()=>getPets(),[])
 
    const deletePet=(id)=>{
     fetch(`https://practies-node.vercel.app/metrial/${id}`,{
       method:"DELETE",
   
     }) .then((data)=>getPets())
   }
   
  return (
    <div >
      

     
      <div className="mani-itmes">
      {metrial.map((pro) => <CardCollection product={pro} id={pro.id} deleteButton={<Tooltip><IconButton><DeleteIcon className="but1" fontSize="small"   onClick={()=>deletePet(pro.id)}/></IconButton></Tooltip>}  />)}
      </div>
    </div>
  );
}
function CardCollection({ product,id,deleteButton }) {
  // const product={
  //   image:"https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
  //   amount:"1000",
  //   name:"doper dog",
  //   location:"salem,tamilnadu",
  //   date:"today"
  // }

  const navigate=useNavigate()
  return (
    <div >
    <div className='main-container'>
       <Card sx={{ maxWidth: 495 }}>
       <CardMedia className="hent"
        sx={{ height: 200 }} 
        image={product.image}
        title="green iguana"
      />
        <div className="flex">
        <Typography gutterBottom variant="h5" component="div">
        {product.name}
        </Typography>
       
        <div className="he1"> 
        <Tooltip title="Favorite">
      <IconButton>
   <FavoriteBorderIcon/>
   </IconButton>
    </Tooltip>
        </div>
        </div>
        
      
        <Typography variant="body2" color="text.secondary"><LocationOnIcon/> {product.location} </Typography>
        
      {deleteButton}
        <CardActions>
        <Button size="small" onClick={()=>navigate(`/metrial/${id}`)}>Detiale</Button>
           </CardActions>
      
      </Card>
    </div>
    </div>
  );
}
