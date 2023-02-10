import { lazy, React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchRefreshUser } from 'redux/operations/operationUser';
import Navigation from './Navigation/Navigation';
import FrontPage from './FrontPage/FrontPage';
import PrivatRoute from './PrivetRoute/PrivatRoute';
import PublicRoute from './PublicRoute/PublicRoute';

const RegisterForm = lazy(() => import('../pages/registerForm/registerForm'));
const Login = lazy(() => import('../pages/login/login'));
const PersonalPage = lazy(() => import('../pages/personalPage/personalPage'));


export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRefreshUser());
  }, [dispatch]);
  
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<FrontPage />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />

          <Route
            path="contacts"
            element={
              <PrivatRoute>
                <PersonalPage />
              </PrivatRoute>
            }
          />
        
        </Route>
      </Routes>
    </>
  );
};
