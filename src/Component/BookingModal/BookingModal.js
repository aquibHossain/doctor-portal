import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../../hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const BookingModal = ({open,handleClose,booking,date,setbookingSuccess}) => {
    const {user}=useAuth()
    const {name,time,space}=booking
    const newBooking={email:user.email,phone:'',displayName:name}
    const [bookingInfo,setBookingInfo]=useState(newBooking)
    const onHandleBlur=(e)=>{
         const name=e.target.name
         const value=e.target.value
         const newAppointment={...bookingInfo}
         newAppointment[name]=value
         setBookingInfo(newAppointment)
    }
    const handleSubmit=e=>{
        const appointment={
          ...bookingInfo,
          time,
          serviceName:name,
          date:date.toLocaleDateString(),
        }
        fetch('https://agile-dawn-10328.herokuapp.com/appointments',{
          method:'POST',
          headers:{
            'content-type':'application/json'
          },
          body:JSON.stringify(appointment)
        }).then(res=>res.json())
        .then(data=>{if(data.insertedId){
          handleClose();
          setbookingSuccess(true)
        }})
        console.log(appointment);
        
        e.preventDefault()
    }
   
    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
             {name}
            </Typography>
            <form onSubmit={handleSubmit}>
            <TextField
            sx={{width:'90%',m:1}}
          disabled
          id="outlined-size-small"
          defaultValue={time}
          size="small"
        />
            <TextField
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name="displayName"
          onBlur={onHandleBlur}
          defaultValue={user.displayName}
          size="small"
        />
            <TextField
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name='email'
          onBlur={onHandleBlur}
          defaultValue={user.email}
          size="small"
        />
            <TextField
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          name='phone'
          onBlur={onHandleBlur}
          defaultValue='Phone Number'
          size="small"
        />
            <TextField
            disabled
            sx={{width:'90%',m:1}}
          id="outlined-size-small"
          defaultValue={date.toDateString()}
          size="small"
        />
        <Button type='submit' variant='contained'>Submit</Button>
        </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default BookingModal;