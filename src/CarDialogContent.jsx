import { TextField, DialogContent } from "@mui/material";


export default function carDialogContent({ car, handleChange}){
   return(
   <DialogContent>
    <TextField
      autoFocus
      required
    
      id="brand"
      name="brand"
      label="brand"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={car.brand}
    />
    <TextField
     
      required
     
      id="model"
      name="model"
      label="model"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={car.model}
    />
    <TextField
      
      required
     
      id="color"
      name="color"
      label="color"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={car.color}
    />
    <TextField
     
      required
     
      id="fuel"
      name="fuel"
      label="fuel"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={car.fuel}
    />
     <TextField

      required
    
      id="modelYear"
      name="modelYear"
      label="Year"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={car.modelYear}
    />
     <TextField
      required
    
      id="price"
      name="price"
      label="price"
      type="text"
      fullWidth
      variant="standard"
      onChange={handleChange}
      value={car.price}
    />
  </DialogContent>
   )
}