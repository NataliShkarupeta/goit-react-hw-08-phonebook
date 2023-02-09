import { ButtonBlue } from 'pages/registerForm/registerForm.styled';
import { useSelector,useDispatch } from 'react-redux';
import { selectUserName } from 'redux/selector';
import { logOut } from 'redux/operations/operationUser';
import { WrapUser, P, Span } from './UserMenu.styled';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch()
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
