import { Button, TextField,Alert } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email,setEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const {token}=useAuth()
    const handleBlur=e=>{
         setEmail(e.target.value)
    }   
     const handleSubmit=e=>{
         const user={email}
         fetch('https://agile-dawn-10328.herokuapp.com/users/admin',{
             method:'PUT',headers:{
                 'authorization':`Bearer ${token}`,
                 'content-type':'application/json'
             },
             body:JSON.stringify(user)  
         }).then(res=>res.json())
         .then(data=>{
             if(data.modifiedCount){
                 setSuccess(true)
             }
         })
         
        e.preventDefault()
    }
    return (
        <div>
             <h1>Make Admin</h1>
             <form action="" onSubmit={handleSubmit}>
             <TextField sx={{m:1}}
         id="standard-basic"
          label="Email" 
          type='email'
          onBlur={handleBlur}
          variant="standard" />
          <Button sx={{m:1}}  type='submit' variant='contained'>Submit</Button>
          
             </form>
             {
     success && <Alert severity="success">Admin Added Successfully</Alert>
    }
        </div>
    );
};

export default MakeAdmin;
