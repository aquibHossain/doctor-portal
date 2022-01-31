import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import florida from './../../images/fluoride.png'
import cavity from './../../images/cavity.png'
import whitening from './../../images/whitening.png'
import Service from '../Service/Service';

const services=[
    {name:"Flourida Treatment",
     description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem alias quis at perspiciatis commodi voluptatem earum quae rem aspernatur, nulla provident debitis minima distinctio nihil sint excepturi ea consequatur molestias.",
    image:florida},
    {name:"Cavity Filing",
     description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem alias quis at perspiciatis commodi voluptatem earum quae rem aspernatur, nulla provident debitis minima distinctio nihil sint excepturi ea consequatur molestias.",
    image:cavity},
    {name:"Tooth Whitening",
     description:" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem alias quis at perspiciatis commodi voluptatem earum quae rem aspernatur, nulla provident debitis minima distinctio nihil sint excepturi ea consequatur molestias.",
    image:whitening}
]


const Services = () => {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
      <Container>
      <Typography sx={{ fontWeight: 500,m:2 ,color:'success.main'}} variant="h6" component="div">
        OUR SERVICES
        </Typography>
        <Typography sx={{ fontWeight: 600,m:5 }} variant="h4" component="div">
        Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid item xs={4} sm={4} md={4} key={index}>
          <Service service={service}>

          </Service>
          </Grid>
        ))}
      </Grid>
      </Container>
    </Box>
        </div>
    );
};

export default Services;