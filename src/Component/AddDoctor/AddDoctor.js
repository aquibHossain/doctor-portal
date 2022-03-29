import React, { useState } from 'react';

import Box from '@mui/material/Box';
import {TextField,Button, Input} from '@mui/material';

const AddDoctor = () => {
   const [email,setEmail]=useState('')
   const [name,setName]=useState('')
   const [img,setimg]=useState(null)

  const  handleSubmit=(e)=>{
    if(!img){
      return
    }
    const formData = new FormData();
    formData.append('email',email)
    formData.append('name',name)
    formData.append('img',img)

    fetch('https://agile-dawn-10328.herokuapp.com/doctor', {
  method: 'POST',
  body: formData
})
.then(response => response.json())
.then(result => {
  alert("doctor added")
  console.log('Success:', result);
})
.catch(error => {
  console.error('Error:', error);
});

     e.preventDefault()
   }
    return (
        <div>
            <h1>Add a Doctor</h1>
            <form onSubmit={handleSubmit}>
            <Box
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
          onChange={e=>setEmail(e.target.value)}
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
          label="Name"
          type="text"
          onChange={e=>setName(e.target.value)}
         required
        />
        <Input
         style={{width:"50%"}}
         accept='image/*'
          type='file'
          onChange={e=>setimg(e.target.files[0])}
        />
      </div>
    <Button 
    variant='contained'
    type='submit'
     sx={{width:"25%",mt:3}}
    >Submit</Button>
    </Box>
    </form>
        </div>
    );
};

export default AddDoctor;