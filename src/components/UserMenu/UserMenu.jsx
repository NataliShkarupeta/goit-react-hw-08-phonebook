import { ButtonBlue } from 'pages/registerForm/registerForm.styled';
import { useSelector,useDispatch } from 'react-redux';
import { selectUserName } from 'redux/selector';
import { logOut } from 'redux/operations/operationUser';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch()
  return (
    <>
      <div>
        <p>Welcome: {name}</p>
        <ButtonBlue type="button" onClick={() => dispatch(logOut())}>
          Logout
        </ButtonBlue>
      </div>
    </>
  );
};
