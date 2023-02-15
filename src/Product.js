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
import { useNavigate  } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useEffect} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
export function Product({handleAddFavort}) {
 
  const [items,setItmes]=useState([]) 
  useEffect(()=>getPets(),[])

  const getPets=()=>{
    fetch("https://practies-node.vercel.app/pet",{
     method:"GET",
   })
   .then((data)=>data.json())
   .then((Pets)=>setItmes(Pets))}
  
const deletePet=(id)=>{
  fetch(`https://practies-node.vercel.app/pet/${id}`,{
    method:"DELETE",

  }) .then((data)=>getPets())
}
  return (
    <div >
     
     <SliderMani/>

     
      <div className="mani-itmes">
      {items.map((pro) => <CardCollection id={pro.id} product={pro} handleAddFavort={handleAddFavort} deleteButton={<Tooltip><IconButton><DeleteIcon className="but" fontSize="small"   onClick={()=>deletePet(pro.id)}/></IconButton></Tooltip>} />)}
      </div>
    </div>
  );
}
function CardCollection({ product,id ,handleAddFavort,deleteButton}) {
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
       <Card sx={{ maxWidth: 345 }}>
       <CardMedia className="hent"
    
        sx={{ height: 200 }}
        image={product.image}
        title="green iguana"
      />
        <div className="flex">
        <Typography  className="flex" gutterBottom variant="h5" component="div">
        <CurrencyRupeeIcon/>{product.amount}
        </Typography>
       
        <div className="heart"> 
         <Tooltip title="Favorite">
      <IconButton >
   <FavoriteBorderIcon/>
   </IconButton>
  </Tooltip>
    
        </div>
        </div>
        <div className='name1'><ArrowRightIcon/>{product.name}</div>
        <div className='loc-dt'>
        <Typography variant="body2" color="text.secondary"><LocationOnIcon/> {product.location} </Typography>
        <Typography variant="body2" color="text.secondary"><Date1/>  </Typography>
        </div>
        {deleteButton}
        <CardActions>
        <Button size="small" onClick={()=>navigate(`/product/${id}`)}>Detiale</Button>
           </CardActions>
      
      </Card>
    </div>
    </div>
  );
}
