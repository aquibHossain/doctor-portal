import React from 'react';

import Box from '@mui/material/Box';
import {TextField,Button} from '@mui/material';

const AddDoctor = () => {
   
    return (
        <div>
            <h1>Add a Doctor</h1>
            <form >

            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
         style={{width:"50%"}}
          required
          id="outlined-required"
          label="Email"
          placeholder="Email"
        />
        <TextField
          disabled
          style={{width:"50%"}}
          id="outlined-disabled"
          label="DATE"
          defaultValue="Date"
        />
        <TextField
         style={{width:"50%"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
         style={{width:"50%"}}
          id="outlined-number"
          label="Id Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    <Button 
     style={{width:"50%"}}
      contained>Submit</Button>
    </Box>
    </form>
        </div>
    );
};

export default AddDoctor;