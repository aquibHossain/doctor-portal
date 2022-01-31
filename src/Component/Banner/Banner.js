import React from 'react';
import chair from './../../images/chair.png'
import bg from './../../images/bg.png'
import Grid from '@mui/material/Grid';
import { Box, Button, Container, Typography } from '@mui/material';
const Banner = () => {
    const background={
        background:`url(${bg})`,
       
    }
    const vertical={
        display: 'flex',
        alignItems:"center",
        height:400
    }
    return (
            <Container style={background} sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{...vertical,textAlign:'left'}}>
        <Box>
        <Typography variant="h3" component="div">
        Your New Smile <br />
        Starts Here
        </Typography>
        <Typography variant="h6" sx={{my:3,color:'gray',fontSize:14,fontWeight:300}}  component="div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nisi maxime vitae praesentium obcaecati voluptas voluptatibus rerum. Sequi, suscipit nihil.
        </Typography>
        <Button  variant='contained' style={{backgroundColor:'#5CE7ED'}}>Get Appointment</Button>
        </Box>
        </Grid>
        <Grid item xs={12} md={6} style={vertical}>
        <img src={chair} style={{width:350}} alt="" />
        </Grid>
      </Grid>
    </Container>
       
    );
};

export default Banner;