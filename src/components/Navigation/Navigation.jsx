import { Outlet } from 'react-router-dom';
import { NavigationLink } from './Navigation.styled.';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavigationLink to="/register">Registration</NavigationLink>
        <NavigationLink to="/login">Login</NavigationLink>
        <NavigationLink to="/contacts">Contacts List</NavigationLink>
      </nav>
      <Outlet />
    </>
  );
};
