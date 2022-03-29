import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const DoctorDetails = ({doc}) => {
    const {name,email,image}=doc
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            src={`data:image/png;base64,${image}`}
            alt="green iguana"
          />
          <CardContent>
            <Typography  variant="h6" component="div">
              Dr. {name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default DoctorDetails;