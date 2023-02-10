import { Outlet } from 'react-router-dom';
import { NavigationLink, Nav } from './Navigation.styled.';

import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsRegister } from 'redux/selector';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { WrapPrivatNav } from 'pages/personalPage/personalPage.styled';
import { Suspense } from 'react';
import { FaHouseUser } from 'react-icons/fa';

const Navigation = () => {
  const location = useLocation();
  const isRegister = useSelector(selectIsRegister);

  return (
    <>
      <Nav>
        {isRegister ? (
          <WrapPrivatNav>
            <NavigationLink to="/contacts" state={{ from: location }}>
              <i>
                <FaHouseUser></FaHouseUser>
              </i>
              <br />
              Contact List
            </NavigationLink>
            <UserMenu />
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
              Contact List
            </NavigationLink>
          </>
        )}
      </Nav>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Navigation;
