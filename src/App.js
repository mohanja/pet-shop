// import logo from './image/logo.jpg'
import {Navigate, Routes, Route, Link, useNavigate } from "react-router-dom";
import { AddItmes } from './AddItmes';
import './App.css';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Product } from './Product';
import { useEffect, useState } from "react";
import { ProductDetails } from "./ProductDetails";
import { AddHospital } from "./Addhospitaly";
import { ProductHospital } from "./Product hospital";
import { ProductDetailsHospital } from "./ProductDetails hospital";
import { ProductMetrial } from "./Product metrial";
import { AddMetrial } from "./Addmetrial";
import { ProductDetailsMetrial } from "./ProductDetails metrial";
import { ProductShop } from "./Product shop";
import { ProductDetailsShop } from "./ProductDetails shop";
import { AddPetShop } from "./Addpetshop";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Container from '@mui/material/Container';
import { NotFound } from "./NotFound";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { color } from "@mui/system";
import { Favorit } from "./Favorit";
import { Pets, Segment } from "@mui/icons-material";
import ChatBot from 'react-simple-chatbot'
import { json } from "react-router";
import { Chatt } from "./Chatt";
// const PET=[{
//     id:"11",
//     image: "https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
//     amount: "1000",
//     name: "doper dog",
//     location: "salem,tamilnadu",
// gender:"mael"
//   },
//   { id:"12",
//     image: "https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
//     amount: "1000",
//     name: "doper dog",
//     location: "salem,tamilnadu",
//     gender:"mael"
//   }, {
//     id:"13",
//     image: "https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?pid=ImgDet&rs=1",
//     amount: "1000",
//     name: "doper dog",
//     location: "salem,tamilnadu",
//     gender:"mael"
//   }]
// const HOSHPITAL=[{
//   id:"21",
//     image:"https://th.bing.com/th/id/R.5f0b3923ac8b581d0679f7bd6e8a6cc2?rik=FQq2cMQaEPytIA&riu=http%3a%2f%2fmcleodvet.com%2fimages%2fMVH-2017-exterior-big.jpg&ehk=QtyzjTBzurOlmo3fqtXqUF%2bnJM9teQW4br8M8beYd5s%3d&risl=&pid=ImgRaw&r=0",
//     number:"123455667",
//     name:"muthu wetnery hospigital",
//     location:"salem,thubai",
//     doctor:"https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?pid=ImgDet&rs=1",
//     doctorname:"Tomcuros",
//     position:"CEO"
//   },
//   {id:"22",
//     image:"https://th.bing.com/th/id/R.5f0b3923ac8b581d0679f7bd6e8a6cc2?rik=FQq2cMQaEPytIA&riu=http%3a%2f%2fmcleodvet.com%2fimages%2fMVH-2017-exterior-big.jpg&ehk=QtyzjTBzurOlmo3fqtXqUF%2bnJM9teQW4br8M8beYd5s%3d&risl=&pid=ImgRaw&r=0",
//     number:"123455667",
//     name:"muthu wetnery hospigital",
//     location:"salem,thubai",
//     doctor:"https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?pid=ImgDet&rs=1",
//     doctorname:"Tomcuros",
//     position:"CEO"
//   },{
//     id:"23",
//     image:"https://th.bing.com/th/id/R.5f0b3923ac8b581d0679f7bd6e8a6cc2?rik=FQq2cMQaEPytIA&riu=http%3a%2f%2fmcleodvet.com%2fimages%2fMVH-2017-exterior-big.jpg&ehk=QtyzjTBzurOlmo3fqtXqUF%2bnJM9teQW4br8M8beYd5s%3d&risl=&pid=ImgRaw&r=0",
//     number:"123455667",
//     name:"muthu wetnery hospigital",
//     location:"salem,thubai",
//     doctor:"https://th.bing.com/th/id/OIP.ZpVunDDzxPZxFy630A-3RwHaLH?pid=ImgDet&rs=1",
//     doctorname:"Tomcuros",
//     position:"CEO"
//   }]
//   const SHOP=[ {
//     id:"31",
//     image:"https://media.blogto.com/articles/3fd2-20151120-pet-stores-toronto.jpg?cmd=resize_then_crop&quality=70&w=2048&height=1365",
//     number:"123455667",
//     name:"pet zone",
//     location:"salem,thubai",
//     oner:"https://th.bing.com/th/id/OIP.9TMUOEmAAb1XaHo4XuBbmAHaLH?pid=ImgDet&w=474&h=711&rs=1",
//     onername:"dilli",
//     position:"CEO"
//   },
//   {id:"32",
//     image:"https://th.bing.com/th/id/R.111312f2f74dadccb98d4fd6f7899afe?rik=%2fY9PrEqpgvjwfA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_ZDpDeeulwP8%2fTPvc4C6l5jI%2fAAAAAAAABIk%2f9Hy8n2BvK7Q%2fs1600%2fImage003.jpg&ehk=%2fCWY8nz2cd4QUDkeK6thVx7j9uOvg%2f%2bPRDSS73QmzUY%3d&risl=&pid=ImgRaw&r=0",
//     number:"123455667",
//     name:"pet zone",
//     location:"salem,thubai",
//     oner:"https://th.bing.com/th/id/OIP.9TMUOEmAAb1XaHo4XuBbmAHaLH?pid=ImgDet&w=474&h=711&rs=1",
//     onername:"dilli",
//     position:"CEO"
//   },
//   {id:"33",
//     image:"https://th.bing.com/th/id/R.111312f2f74dadccb98d4fd6f7899afe?rik=%2fY9PrEqpgvjwfA&riu=http%3a%2f%2f4.bp.blogspot.com%2f_ZDpDeeulwP8%2fTPvc4C6l5jI%2fAAAAAAAABIk%2f9Hy8n2BvK7Q%2fs1600%2fImage003.jpg&ehk=%2fCWY8nz2cd4QUDkeK6thVx7j9uOvg%2f%2bPRDSS73QmzUY%3d&risl=&pid=ImgRaw&r=0",
//     number:"123455667",
//     name:"pet zone",
//     location:"salem,thubai",
//     oner:"https://th.bing.com/th/id/OIP.9TMUOEmAAb1XaHo4XuBbmAHaLH?pid=ImgDet&w=474&h=711&rs=1",
//     onername:"dilli",
//     position:"CEO"
//   },
//   ]
// const METRIAL=[
//     {id:"41",
//       image:"https://th.bing.com/th/id/OIP.idGF8DFTIOckP71benjr9QHaE7?pid=ImgDet&rs=1",
//       number:"123455667",
//       name:"pet supplies plus",
//       location:"salem,thubai",
//       oner:"https://thumbs.dreamstime.com/b/young-man-8988275.jpg",
//       onername:"millar",
//       position:"CEO"
//     },
//      {id:"42",
//       image:"https://th.bing.com/th/id/OIP.idGF8DFTIOckP71benjr9QHaE7?pid=ImgDet&rs=1",
//       number:"123455667",
//       name:"pet supplies plus",
//       location:"salem,thubai",
//       oner:"https://thumbs.dreamstime.com/b/young-man-8988275.jpg",
//       onername:"millar",
//       position:"CEO"
//     },
//     {id:"43",
//       image:"https://th.bing.com/th/id/OIP.idGF8DFTIOckP71benjr9QHaE7?pid=ImgDet&rs=1",
//       number:"123455667",
//       name:"pet supplies plus",
//       location:"salem,thubai",
//       oner:"https://thumbs.dreamstime.com/b/young-man-8988275.jpg",
//       onername:"millar",
//       position:"CEO"
//     }
//   ]


function App() {
const navigate=useNavigate();
const[mode,setMode]=useState("dark")
const darkTheme = createTheme({
  palette: {
    mode: mode,
  },
});

  const [items,setItmes]=useState([]) 
  
  const [hospital,setHospital]=useState([])

  const[shop,setShop]=useState([])
  const[metrial,setMetrial]=useState([])
const handleAddFavort=(Product)=>{
  const ProductExist=items.find((item)=>item.id ===Product.id)
  if(ProductExist){
    setItmes(items.map((item)=>item.id===Product.id?
    {...ProductExist,quantity:ProductExist.quantity+1}:item))
  }
  else{
    setItmes([...items,{...Product,quantity:1}])
  }
}

useEffect(()=>{
 fetch("https://practies-node.vercel.app/pet",{
  method:"GET",
})
.then((data)=>data.json())
.then((Pets)=>setItmes(Pets))},[])

useEffect(()=>{
  fetch("https://practies-node.vercel.app/shop",{
   method:"GET",
 })
 .then((data)=>data.json())
 .then((Pets)=>setShop(Pets))},[])

 useEffect(()=>{
  fetch("https://practies-node.vercel.app/hosptial",{
   method:"GET",
 })
 .then((data)=>data.json())
 .then((Pets)=>setHospital(Pets))},[])

 useEffect(()=>{
  fetch("https://practies-node.vercel.app/metrial",{
   method:"GET",
 })
 .then((data)=>data.json())
 .then((Pets)=>setMetrial(Pets))},[])

  return (
    <ThemeProvider theme={darkTheme}>
      <Paper style={{minHeight:"100vh"}} elevation={0} >
  <div className="Apps">
     <AppBar position="static">
    
        <Toolbar>
          <Button color="inherit"  onClick={()=>navigate("/")}>
            HOME
            </Button>
  
          <Button color="inherit" onClick={()=>navigate("/pets")}>pets</Button>
          <Button color="inherit" onClick={()=>navigate("/hospital")}>hospital</Button>
          <Button color="inherit" onClick={()=>navigate("/metrial")}>petmetrial</Button>

        
          <Button color="inherit" onClick={()=>navigate("/petshop")}>petshop</Button>
         
          
          <Button color="inherit" onClick={()=>navigate("/addshop")}>AddHshop</Button>
        
      
       
           <Button color="inherit" onClick={()=>navigate("/addanimal")}>sellpet</Button>
         <Button color="inherit" onClick={()=>navigate("/addmetrial")}>Addmetrial</Button>
          <Button color="inherit" onClick={()=>navigate("/addhospital")}>AddHospital</Button>
          <Button color="inherit"  style={{marginLeft:"auto",color:"red"}} onClick={()=>navigate("/favorit")} > <FavoriteBorderIcon  /></Button>
          <Button color="inherit"
            style={{marginLeft:"end"}} 
          startIcon={mode==="dark"?<Brightness7Icon/>:<Brightness4Icon/>}
          onClick={()=>setMode(mode==="light"?"dark":"light")}>{mode==="light"?"DARK":"LIGHT"}MODE</Button>
        </Toolbar>
  
      </AppBar>

      
     <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/pets" element={ <Product items={items} setItmes={setItmes}/>} />
        <Route path="/hospital" element={ <ProductHospital hospital={hospital} setHospital={setHospital}/>} />
        <Route path="/metrial" element={ <ProductMetrial metrial={metrial} setMetrial={setMetrial}/>} />
        <Route path="/petshop" element={ <ProductShop shop={shop} setShop={setShop}/>} />

      <Route path="/addanimal" element={<AddItmes items={items} setItmes={setItmes} handleAddFavort={handleAddFavort}/>} />
      <Route path="/addhospital" element={<AddHospital hospital={hospital} setHospital={setHospital}/>} />
      <Route path="/addmetrial" element={<AddMetrial metrial={metrial} setMetrial={setMetrial}/>} />
      <Route path="/addshop" element={<AddPetShop shop={shop} setShop={setShop}/>} />
      <Route path="/favorit" element={< Favorit/>} />
      <Route path="/product/:id" element={<ProductDetails items={items} />}/>
      <Route path="/hospital/:id" element={<ProductDetailsHospital hospital={hospital} />}/>
      <Route path="/metrial/:id" element={<ProductDetailsMetrial metrial={metrial}  />}/>
      <Route path="/shop/:id" element={<ProductDetailsShop shop={shop}  />}/>

       <Route path="*" element={<NotFound/>}/>

      </Routes>
     
    </div>
    </Paper>
    </ThemeProvider>
  );
}



 export default App;


  
 
 

 
      
