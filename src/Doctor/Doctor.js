import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DoctorDetails from '../DoctorDetails/DoctorDetails';

const Doctor = () => {
    const[doctor,setDoctor]=useState([])
    useEffect(()=>{
        fetch('https://agile-dawn-10328.herokuapp.com/doctor')
        .then(response => response.json())
        .then(result => {
            console.log(result);
          setDoctor(result)
        })
    },[])
   
    return (
        <Container sx={{my:5}}>
            <Typography sx={{ fontWeight: 600,mt:11,mb:5 }} variant="h4" component="div">
            Our Doctors: {doctor.length}
        </Typography>
            
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {doctor.map(doc=> (
                  <Grid item xs={12} sm={6} md={4} key={doc._id}>
                   <DoctorDetails doc={doc} ></DoctorDetails>
                  </Grid>
                ))}
              </Grid>
        </Container>
    );
};

export default Doctor;