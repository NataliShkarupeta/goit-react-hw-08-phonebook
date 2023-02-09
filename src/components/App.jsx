import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from '../pages/registerForm/registerForm';
import { Login } from '../pages/login/login';
import { PersonalPage } from '../pages/personalPage/personalPage';
import { Navigation } from './Navigation/Navigation';
import { FrontPage } from './FrontPage/FrontPage';
import { useDispatch} from 'react-redux';
// import { IfNotRegister } from './ifNotRegister/ifNotRegister';
import { useEffect } from 'react';
import { fetchRefreshUser } from 'redux/operations/operationUser';
import { PrivatRoute } from './UserMenu/PrivatRoute';

export const App = () => {
  const dispatch = useDispatch();
  
   useEffect(()=>{
    dispatch(fetchRefreshUser());
   },[dispatch])
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<FrontPage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
          {/* {isRegister ? (
            <Route path="contacts" element={<PersonalPage />} />
          ) : (
            <Route path="contacts" element={<IfNotRegister />} />
          )} */}
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
