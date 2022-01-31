import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route,Redirect  } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user,isLoading}= useAuth();
    console.log(isLoading);
    // if(isLoading){<CircularProgress/>}
    return (
           <div>
              {isLoading?<CircularProgress/>:<Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />}
           </div>
    );
};

export default PrivateRoute;