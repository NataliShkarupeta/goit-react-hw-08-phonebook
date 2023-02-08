import { Outlet } from 'react-router-dom';
import { NavigationLink } from './Navigation.styled.';
import { useLocation } from 'react-router-dom';
import { selectIsRegister } from 'redux/selector';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isRegister = useSelector(selectIsRegister);
  const location = useLocation();
  //  console.log(location)
  return (
    <>
      <nav>
        <NavigationLink to="/register" state={{ from: location }}>
          Registration
        </NavigationLink>
        <NavigationLink to="/login" state={{ from: location }}>
          Login
        </NavigationLink>
        {isRegister && (
          <NavigationLink to="/contacts" state={{ from: location }}>
            Contacts List
          </NavigationLink>
        )}
      </nav>
      <Outlet />
    </>
  );
};
