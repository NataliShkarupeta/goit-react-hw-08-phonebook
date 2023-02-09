import {
  Form,
  Field,
  SubmitButton,
  I,
  Span,
  Button,
  Input,
} from './login.styled';
import { ButtonBack } from '../registerForm/registerForm.styled';
import { Link, useNavigate, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/operations/operationUser';
import { selectIsRegister } from 'redux/selector';
import { WrapPage } from 'components/ifNotRegister/ifNotRegister.styled';
import Notiflix from 'notiflix';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isRegister = useSelector(selectIsRegister);
  const navigate = useNavigate();
  // console.log(isRegister);
  const dispatch = useDispatch();

  const takeInputValue = ({ target: { name, value } }) => {
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handelSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(logIn(user));
    <>
      {!isRegister &&
        Notiflix.Notify.failure('Log in failed, please try again.')}
    </>;
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isRegister && navigate('/contacts')}
      <WrapPage>
        <Outlet />
        <Link to="/">
          <ButtonBack>Back</ButtonBack>
        </Link>
        <Span>Please enter your login information...</Span>
        <Form onSubmit={handelSubmit}>
          <>
            <Field>
              <Input
                onChange={takeInputValue}
                type="text"
                name="email"
                placeholder="Username or email"
                value={email}
              />
              <I></I>
            </Field>
            <Field>
              <Input
                onChange={takeInputValue}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
              />
              <I></I>
            </Field>
            <Link>
              <SubmitButton>
                <Button onClick={handelSubmit} type="submit" name="submit">
                  <i></i>
                </Button>
              </SubmitButton>
            </Link>
          </>
        </Form>
      </WrapPage>
    </>
  );
};
