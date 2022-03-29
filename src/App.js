import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Home from './Component/Home/Home';
import Appointment from './Component/Appointment/Appointment';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import Dashboard from './Component/Dashboard/Dashboard';
import DashboardHome from '../src/Component/DashboardHome/DashboardHome';
import MakeAdmin from '../src/Component/MakeAdmin/MakeAdmin';
import AddDoctor from '../src/Component/AddDoctor/AddDoctor';
import AdminRoute from '../src/Component/AdminRoute/AdminRoute';
import Payment from '../src/Payment/Payment';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
      <Router>
      <Routes>
          <Route path="/home" element={<Home />}/>  

          <Route path="/" element={<Home />}/>  

          <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
          <Route  path='/dashboard' element={<DashboardHome />}/>

<Route  path={`payment/:appointmentId`} element={<Payment />} />

<Route path={`makeAdmin`} element={<AdminRoute><MakeAdmin/></AdminRoute>} />

<Route path={`addDoctor`} element={<AdminRoute><AddDoctor /></AdminRoute>} />

          </Route>
         
          <Route path="/appointment" element={<PrivateRoute><Appointment /></PrivateRoute>}/>
   
          <Route path="/login" element={<Login />}/>

          <Route path="/register" element={<Register />}/>
        
          
        </Routes>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
