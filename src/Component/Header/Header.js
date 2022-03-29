import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { Container, Menu, Tooltip } from '@mui/material';
const Header = () => {
  const {user,logOut}=useAuth()
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
    return (
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography  variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}>
           Doctors Point
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
             <NavLink style={{textDecoration:"none"}}  to="/home"><Button color="inherit">Home</Button></NavLink>
          <NavLink style={{textDecoration:"none"}}  to="/appointment"><Button color="inherit">Appointment</Button></NavLink>
          {
              user.email?
              <Box><NavLink style={{textDecoration:"none"}} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink><Button onClick={logOut} color="inherit">LogOut</Button></Box> :
             <NavLink style={{textDecoration:"none"}} to="/login"><Button color="inherit">Login</Button></NavLink>
          }
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
             Doctors Point
          </Typography>
          <Box sx={{ flexGrow: 1,justifyContent:'flex-end', display: { xs: 'none', md: 'flex' } }}>
          <NavLink style={{textDecoration:"none",color:'white'}}  to="/home"><Button color="inherit">Home</Button></NavLink>
          <NavLink style={{textDecoration:"none",color:'white'}}  to="/appointment"><Button color="inherit">Appointment</Button></NavLink>
          {
              user.email?
              <Box><NavLink style={{textDecoration:"none",color:'white'}} to="/dashboard"><Button color="inherit">Dashboard</Button></NavLink><Button onClick={logOut} color="inherit">LogOut</Button></Box> :
             <NavLink style={{textDecoration:"none",color:'white'}} to="/login"><Button color="inherit">Login</Button></NavLink>
          }
          </Box>

        </Toolbar>
      </Container>
      </AppBar>
    </Box>
    );
};

export default Header;