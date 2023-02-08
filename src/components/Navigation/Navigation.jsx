import { Outlet } from 'react-router-dom';
import { NavigationLink } from './Navigation.styled.';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
     const location = useLocation();
    
  return (
    <>
      <nav>
        <NavigationLink to="/register" state={{ from: location }}>
          Registration
        </NavigationLink>
        <NavigationLink to="/login" state={{ from: location }}>
          Login
        </NavigationLink>
        <NavigationLink to="/contacts" state={{ from: location }}>
          Contacts List
        </NavigationLink>
      </nav>
      <Outlet />
    </>
  );
};

//  {
//    !isRegister ? (
//      <>
//        <NavigationLink to="/register" state={{ from: location }}>
//          Registration
//        </NavigationLink>
//        <NavigationLink to="/login" state={{ from: location }}>
//          Login
//        </NavigationLink>
//      </>
//    ) : (
//      <UserMenu />
//      //   <NavigationLink to="/contacts" state={{ from: location }}>
//      //     Contacts List
//      //     <UserMenu />
//      //   </NavigationLink>
//    );
//  }