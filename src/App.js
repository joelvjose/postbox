import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import PrivateRoutes from './utils/PrivateRoutes'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Login from './pages/login';
import Signup from './pages/signup';
import Home from './pages/home';
import Dashboard from './pages/Dashboard';
import UsersList from './pages/admin/UsersList';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { checkAuth } from './redux/Slice';


function App() {

  const dispatch = useDispatch(); 

  useEffect(()=>{
    dispatch(checkAuth());
  },[dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} exact/>
          <Route path="/signup" element={<Signup />}/>

          <Route element={<PrivateRoutes/>}>
              <Route element={<Home/>} path='/home' />
          </Route>
          <Route element={<PrivateRoutes/>}>
              <Route element={<Dashboard/>} path='/admin' />
          </Route>
          <Route element={<PrivateRoutes/>}>
              <Route element={<UsersList/>} path='/users' />
          </Route>
        </Routes>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
