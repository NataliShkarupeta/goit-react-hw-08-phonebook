import { ButtonBlue } from 'pages/registerForm/registerForm.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserName } from 'redux/user/userSelectors';
import { logOut } from 'redux/user/userOperations';
import { WrapUser, P, Span } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();
  return (
    <>
      <WrapUser>
        <P>
          Welcome: <Span>{name}</Span>
        </P>
        <ButtonBlue type="button" onClick={() => dispatch(logOut())}>
          Logout
        </ButtonBlue>
      </WrapUser>
    </>
  );
};
