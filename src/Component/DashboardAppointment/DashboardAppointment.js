import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const DashboardAppointment = ({date}) => {
    const {user,token}=useAuth()
    const [appointment,setAppointment]=useState([])
    useEffect(()=>{
        fetch(`https://agile-dawn-10328.herokuapp.com/appointments?email=${user.email}&date=${date}`,{
          headers:{
            'authorization':`Bearer ${token}`
            
        },
        })
        .then(res=>res.json())
        .then(data=>setAppointment(data))
    },[date])
    return (
        <div>
            <h1>Appointment {appointment.length}</h1>
           
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell >Service</TableCell>
                      <TableCell align="right">Email</TableCell>
                      <TableCell align="right">Name</TableCell>
                      <TableCell align="right">Time</TableCell>
                      <TableCell align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {appointment.map((appoint) => (
                      <TableRow
                        key={appoint._id}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {appoint.serviceName}
                        </TableCell>
                        <TableCell align="right">{appoint.email}</TableCell>
                        <TableCell align="right">{appoint.displayName}</TableCell>
                        <TableCell align="right">{appoint.time}</TableCell>
                        <TableCell align="right">{appoint.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
        </div>
    );
};

export default DashboardAppointment;