import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

export function AddItmes({ items, setItmes }) {
  const [name, setName] = useState("");
 
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const[gender,setGender]=useState("")

  const imgFilehandler=(event)=>{
    setImage(URL.createObjectURL(event.target.files[0]))
  }
  
  return (
    <div className="add-product">
       <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event) => setName(event.target.value)}    />
       <TextField id="outlined-basic" label="Price" variant="outlined" onChange={(event) => setPrice(event.target.value)}    />
       <Button variant="contained" component="label">
  pet  image  Upload
        <input hidden accept="image/*" multiple type="file" onChange={imgFilehandler}  />
      </Button>
       <TextField id="outlined-basic" label="Location" variant="outlined" onChange={(event) => setLocation(event.target.value)}    />
       <FormControl fullWidth>
       <InputLabel id="demo-simple-select-label">Gender</InputLabel>
       <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          label="Gender"
          onChange={(event) => setGender(event.target.value)}
        >
          <MenuItem  value="male">Mael</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        
        </Select>
        </FormControl>
     
  
 
      <Button variant="contained" component="label" onClick={() => {
        const newItems = {
          image: image,
          amount: price,
          name: name,
          
          location: location,
           gender:gender
        }
  
        console.log(newItems);
        setItmes([...items,newItems]);
      }}>sellpet</Button>
    </div>
  );
}
