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
import { useDispatch} from 'react-redux';
import { logIn } from 'redux/operations/operationUser';
import { WrapPage } from 'components/ifNotRegister/ifNotRegister.styled';
import Notiflix from 'notiflix';

 const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
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
    dispatch(logIn(user))
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(() => Notiflix.Notify.failure('Log in failed, please try again.'));
    
    setEmail('');
    setPassword('');
  };

  return (
    <>
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


export default Login;