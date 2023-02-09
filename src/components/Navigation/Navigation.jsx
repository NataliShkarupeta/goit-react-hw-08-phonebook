import { Outlet } from 'react-router-dom';
import { NavigationLink,Nav } from './Navigation.styled.';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRegister } from 'redux/selector';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { WrapPrivatNav } from 'pages/personalPage/personalPage.styled';

export const Navigation = () => {
     const location = useLocation();
 const isRegister = useSelector(selectIsRegister);
    
  return (
    <>
      <Nav>
        {isRegister ? (
          <WrapPrivatNav>
            <NavigationLink to="/contacts" state={{ from: location }}>
              Contacts List
            </NavigationLink>
            <UserMenu/>
          </WrapPrivatNav>
        ) : (
          <>
            <NavigationLink to="/register" state={{ from: location }}>
              Registration
            </NavigationLink>
            <NavigationLink to="/login" state={{ from: location }}>
              Login
            </NavigationLink>
            <NavigationLink to="/contacts" state={{ from: location }}>
              Contacts List
            </NavigationLink>
          </>
        )}
      </Nav>
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