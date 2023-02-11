import { lazy, React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRefreshUser } from 'redux/user/userOperations';
import { selectIsRegister } from 'redux/user/userSelectors';
import Navigation from './Navigation/Navigation';
import FrontPage from '../pages/FrontPage/FrontPage';
import PrivatRoute from './PrivetRoute/PrivatRoute';
import PublicRoute from './PublicRoute/PublicRoute';
import Login from 'pages/login/login';

const RegisterForm = lazy(() => import('../pages/registerForm/registerForm'));
const PersonalPage = lazy(() => import('../pages/personalPage/personalPage'));

export const App = () => {
  const dispatch = useDispatch();
 const isRegister = useSelector(selectIsRegister);
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
          <Route path="*" element={isRegister ? <PersonalPage /> : <Login />} />
        </Route>
      </Routes>
    </>
  );
};
