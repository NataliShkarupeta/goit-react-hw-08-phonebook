import { React } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RegisterForm } from './pages/registerForm/registerForm';
import { Login } from './pages/login/login';
import { PersonalContacts } from './pages/personalContacts/personalContacts';
import { Navigation } from './Navigation/Navigation';
import { FrontPage } from './FrontPage/FrontPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<FrontPage />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<Login />} />
          <Route path="contacts" element={<PersonalContacts />} />
        </Route>
      </Routes>
    </>
  );
};
