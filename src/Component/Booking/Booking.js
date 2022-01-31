import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({booking,date,setbookingSuccess}) => {
    const {name,time,space}=booking
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    return (
        <>
        <Grid item xs={12} md={4} sm={6} >
          <Paper elevation={3} sx={{py:5}}>
        <Typography variant='h5' gutterBottom component='div' sx={{color:'info.main',fontWeight:600}}>
            {name}
        </Typography>
        <Typography variant='h6' gutterBottom component='div'>
            {time}
        </Typography>
        <Typography variant='caption' gutterBottom display='block'>
            {space} Space Available
        </Typography>
        <Button onClick={handleOpen} variant='contained'>Book Appointment</Button>
          </Paper>
        </Grid>
        <BookingModal
        booking={booking}
        handleClose={handleClose}
        open={open}
        date={date}
        setbookingSuccess={setbookingSuccess}></BookingModal>
        </>
    );
};

export default Booking;