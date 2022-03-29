import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import login from './../../images/login.png'

const Login = () => {
    const [loginData,setLoginData]=useState({});
    const history=useNavigate();
    const location=useLocation();
    const {signIn,user,signInGoogle}=useAuth()
    const handleOnChange=e=>{
       const name=e.target.name;
       const val=e.target.value;
       console.log(name,val);
       const newLoginData={...loginData}
       newLoginData[name]=val
       console.log(newLoginData);
       setLoginData(newLoginData);
       
    }
    const handleSubmit=e=>{
      signIn(loginData.email,loginData.password,location,history)
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{mt:8}}>
        <Typography variant='body1' gutterBottom> Login</Typography>
        <form onSubmit={handleSubmit}>
       
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
       
        <Button sx={{width:'75%',m:1}}  type='submit' variant='contained'>Submit</Button>
        <NavLink to='/register'
          style={{textDecoration:"none"}}>
          <Button variant="text">New User ? Please Register</Button>
          </NavLink>
          <p>----------------------------------</p>
          <Button onClick={()=>signInGoogle(location,history)} variant="text">Google Login</Button>
        </form>
        </Grid>
        <Grid item xs={12} md={6} >
        <img src={login} style={{width:"100%"}} alt="" />
        </Grid>
      </Grid>
        </Container>
    );
};

export default Login;