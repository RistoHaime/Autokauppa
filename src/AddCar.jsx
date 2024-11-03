import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import * as React from 'react';
import CarDialogContent from './CarDialogContent';

export default function AddCar({addCar}){
    const [car, setCar] = React.useState({
        brand: '',
        model: '',
        color: '',
        fuel: '',
        modelYear: '',
        price: ''
    })

    const handleChange = event => {
        setCar({...car, [event.target.name]: event.target.value})
    }
    const handleSave = () =>{
        addCar(car)
        setOpen(false);
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    
    return(
        <>
        <Button onClick={handleClickOpen}>Add Car</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>New Car</DialogTitle>
        <CarDialogContent car = {car} handleChange= {handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      </>
    );
};
