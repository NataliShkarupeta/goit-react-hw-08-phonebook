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
import { Link, Outlet } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/operations/operationUser';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const location = useLocation();
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
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Outlet />
      <Link to='/'>
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
    </>
  );
};
