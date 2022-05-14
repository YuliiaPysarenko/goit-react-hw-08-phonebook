import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import { authOperations } from '../redux/auth';
import AppBar from './AppBar';
import { Layout } from './Layout/Layout';

const HomeView = lazy(() => import('../views/HomeView'));
const ContactsView = lazy(() => import('../views/ContactsView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Routes>
        <Route path="/" element={<Layout />}>
          
          <Route exact path='/' element={<HomeView />}/>

          <Route exact path="/register" element={<PublicRoute/>} restricted>
            <Route exact path='/register' element={<RegisterView />}/>
          </Route>
          
          <Route exact path="/login" element={<PublicRoute/>} restricted>
            <Route exact path='/login' element={<LoginView />}/>
          </Route>

          <Route exact path='/contacts' element={<PrivateRoute/>}>
            <Route exact path='/contacts' element={<ContactsView/>}/>
          </Route>

        </Route>
      </Routes>
    </div>
  );
}