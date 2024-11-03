import Dialog from '@mui/material/Dialog';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import * as React from 'react';
import CarDialogContent from './CarDialogContent';
import { updateCar } from './api';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function UpdateCar({currentCar}){
    
  const [car, setCar] = React.useState(currentCar)
    const url = currentCar._links.self.href;
    const queryClient = useQueryClient();
  
    const updateMutation = useMutation({
      mutationFn: updateCar,
      onSuccess: () => queryClient.invalidateQueries(['cars'])
    })


    const handleChange = event => {
        setCar({...car, [event.target.name]: event.target.value})
    }
    const handleSave = () =>{
        updateMutation.mutate({url, car})
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
        <Button onClick={handleClickOpen}>Edit</Button>
        <Dialog
        open={open}
        onClose={handleClose}
        
      >
        <DialogTitle>Edit Car</DialogTitle>
        <CarDialogContent car = {car} handleChange= {handleChange} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
      </>
    );
};
