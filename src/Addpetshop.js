import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



export function AddPetShop({ shop,setShop }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const[oneran,setOnoer]=useState("")
  const[onerimg,setOnerImg]=useState("")
  const[postion,setPostion]=useState("")
  const imgFilehandler=(event)=>{
    setImage(URL.createObjectURL(event.target.files[0]))
  }
  const imgFilehandler1=(event)=>{
    setOnerImg(URL.createObjectURL(event.target.files[0]))
  }
  
  return (
    <div className="add-product">
       <TextField id="outlined-basic" label="OnaerName" variant="outlined" onChange={(event) => setOnoer(event.target.value)}    />
       <TextField id="outlined-basic" label="OnaerPosition" variant="outlined" onChange={(event) => setPostion(event.target.value)}    />
      <TextField id="outlined-basic" label="ShopName" variant="outlined" onChange={(event) => setName(event.target.value)}    />
     
     
      
     
<TextField id="outlined-basic" label="ShopNumer" variant="outlined" onChange={(event) => setNumber(event.target.value)}    />
      <TextField id="outlined-basic" label="ShopLocation" variant="outlined" onChange={(event) => setLocation(event.target.value)}    />
      <Button variant="contained" component="label">
      SHOP image  Upload
        <input hidden accept="image/*" multiple type="file" onChange={imgFilehandler}  />
      </Button>
       <Button variant="contained" component="label">
    ONAER image  Upload
        <input hidden accept="image/*" multiple type="file" onChange={imgFilehandler1}  />
      </Button>

      <Button variant="contained" component="label" onClick={() => {
        const newShop = {
          image: image,
          number: number,
          name: name,
          location: location,
          oneran:oneran,
          onerimg:onerimg,
          postion:postion
        }
  
        console.log(newShop);
        setShop([...shop,newShop]);
      }} >sumbit</Button>
     
    </div>
  );
}
