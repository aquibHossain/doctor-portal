import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink ,useNavigate} from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from './../../images/login.png'

const Register = () => {
    const [loginData,setLoginData]=useState({})
    const {user,signUpEmail,isLoading,Error}=useAuth()
    const history=useNavigate();
    const handleOnChange=e=>{
       const name=e.target.name;
       const val=e.target.value
       console.log(name, val);
       const newLoginData={...loginData}
       newLoginData[name]=val
       setLoginData(newLoginData);
       
    }
    const handleSubmit=e=>{
        if(loginData.password!=loginData.password2){
            alert("Password didnt match")
            return
        }
        signUpEmail(loginData.email,loginData.password,loginData.name,history)
        e.preventDefault()
    }
    return (
        <Container>
        <Grid container spacing={2}>
    <Grid item xs={12} md={6} sx={{mt:8}}>
    <Typography variant='body1' gutterBottom> Register</Typography>
    {!isLoading && <form onSubmit={handleSubmit}>
    <TextField sx={{width:'75%',m:1}}
         id="standard-basic"
          label="Name" 
          name='name'
          onBlur={handleOnChange}
          variant="standard" />
    <TextField sx={{width:'75%',m:1}}
     id="standard-basic"
      label="Email" 
      name='email'
      type='email'
      onBlur={handleOnChange}
      variant="standard" />
    <TextField sx={{width:'75%',m:1}} 
     id="standard-basic" 
     label="Password"
      type='password' 
      name='password'
      onBlur={handleOnChange}
      variant="standard" />
    <TextField sx={{width:'75%',m:1}} 
     id="standard-basic" 
     label="Re-Type Password"
      type='password' 
      name='password2'
      onBlur={handleOnChange}
      variant="standard" />
      
    <Button sx={{width:'75%',m:1}}  type='submit' variant='contained'>Register</Button>
    <NavLink to='/login'
      style={{textDecoration:"none"}}>
      <Button variant="text">Already Registered? Please Login</Button>
      </NavLink>
    </form>}
    {
      isLoading && <CircularProgress></CircularProgress>
    }
    {
      user.email && <Alert severity="success">User Created Successfully</Alert>
    }
    {
       Error && <Alert severity="error">{Error}</Alert>
    }
  
    
    </Grid>
    <Grid item xs={12} md={6} >
    <img src={login} style={{width:"100%"}} alt="" />
    </Grid>
  </Grid>
    </Container>
    );
};

export default Register;