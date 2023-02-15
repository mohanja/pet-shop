import { upload } from "@testing-library/user-event/dist/upload";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function AddHospital({ hospital, setHospital}) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
 const[doctor,setDoctor]=useState("")
 const[doctorimg,setDoctorImg]=useState("")
const[postion,setPostion]=useState("")
  const imgFilehandler=(event)=>{
    setImage(URL.createObjectURL(event.target.files[0]))
  }
  const imgFilehandler1=(event)=>{
    setDoctorImg(URL.createObjectURL(event.target.files[0]))
  }
  
  return (
    <div className="add-product">
      <TextField id="outlined-basic" label="DoctorName" variant="outlined" onChange={(event) => setDoctor(event.target.value)}    />
      <TextField id="outlined-basic" label="PositionDoctor" variant="outlined" onChange={(event) => setPostion(event.target.value)}    />
      <TextField id="outlined-basic" label="HospitalName" variant="outlined" onChange={(event) => setName(event.target.value)}    />
     
     
      
     
<TextField id="outlined-basic" label="HospitalNumer" variant="outlined" onChange={(event) => setNumber(event.target.value)}    />
      <TextField id="outlined-basic" label="HospitalLocation" variant="outlined" onChange={(event) => setLocation(event.target.value)}    />
      <Button variant="contained" component="label">
      hospital image  Upload
        <input hidden accept="image/*" multiple type="file" onChange={imgFilehandler}  />
      </Button>
       <Button variant="contained" component="label">
     doctor image  Upload
        <input hidden accept="image/*" multiple type="file" onChange={imgFilehandler1}  />
      </Button>

      <Button variant="contained" component="label" onClick={() => {
        const newHospital = {
          image: image,
          doctorimg:doctorimg,
          doctor:doctor,
          number: number,
          name: name,
          location: location,
          postion:postion
        }
  
        console.log(newHospital);
        setHospital([...hospital,newHospital]);
      }} >sumbit</Button>
  
 
     
    </div>
  );
}
