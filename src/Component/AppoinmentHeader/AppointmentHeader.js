import React from 'react';
import chair from './../../images/chair.png'
import bg from './../../images/bg.png'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Calender from '../Calender/Calender';

const AppointmentHeader = ({date,setDate}) => {
    const background={
        background:`url(${bg})`,
       
    }
    const vertical={
        display: 'flex',
        alignItems:"center",
        height:400
    }
    return (
        <div>
          <Container>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} >
        <Calender date={date} setDate={setDate}></Calender>
        </Grid>
        <Grid item xs={12} md={6} >
        <img src={chair} style={{width:"100%"}} alt="" />
        </Grid>
      </Grid>
    </Container>
        </div>
    );
};

export default AppointmentHeader;