import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from '../pages/registerForm/registerForm';
import { Login } from '../pages/login/login';
import { PersonalPage } from '../pages/personalPage/personalPage';
import { Navigation } from './Navigation/Navigation';
import { FrontPage } from './FrontPage/FrontPage';
import { useSelector } from 'react-redux';
import { selectUser } from 'redux/selector';
import { selectIsRegister } from 'redux/selector';



export const App = () => {
  const user = useSelector(selectUser);

  const isRegister = useSelector(selectIsRegister);
  console.log(user);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<FrontPage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
          {isRegister && <Route path="contacts" element={<PersonalPage />} />
           
          }
      
        </Route>
      </Routes>
    </>
  );
};
