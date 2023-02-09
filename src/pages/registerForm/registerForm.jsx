import { Form, Field, I, Span, Input } from '../login/login.styled';
import { ButtonBack, ButtonBlue } from './registerForm.styled';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { WrapPage } from 'components/ifNotRegister/ifNotRegister.styled';
import { register } from 'redux/operations/operationUser';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRegister } from 'redux/selector';
import Notiflix from 'notiflix';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isRerister = useSelector(selectIsRegister);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const takeInputValue = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const handelSubmit = e => {
    e.preventDefault();
      const user = {
        name,
        email,
        password,
      };
      dispatch(register(user));
      <>
        { isRerister
        ? Notiflix.Notify.success(
            'You have successfully registered, your personal contact book was available to you'
          )
        : Notiflix.Notify.failure('Registration failed, please try again.')
    }
      </>
    
      setEmail('');
      setName('');
      setPassword('');
  };

  

  return (
    <>
      <WrapPage>
        <Link to="/">
          <ButtonBack>Back</ButtonBack>
        </Link>

        <Span>Please register</Span>
        <Form onSubmit={handelSubmit}>
          <Field>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={takeInputValue}
              required
            />
            <I></I>
          </Field>
          <Field>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={takeInputValue}
              required
            />
            <I></I>
          </Field>

          <Field>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={takeInputValue}
              required
            />
            <I></I>
          </Field>
          {name !== '' && email !== '' && password !== '' ? (
            <div>
              <ButtonBlue onClick={handelSubmit} type="submit" name="submit">
                <i></i>Create account
              </ButtonBlue>
            </div>
          ) : (
            <div>
              <ButtonBlue
                onClick={handelSubmit}
                type="submit"
                name="submit"
                disabled="disabled"
              >
                <i></i>Create account
              </ButtonBlue>
            </div>
          )}
        </Form>
      </WrapPage>
    </>
  );
};
<>
  <div>
    <div>
      <a href="/auth/github">
        <i></i>
      </a>
      <a id="google_login" href="/auth/google_oauth2">
        <i></i>
      </a>
      <a id="facebook_login" href="/auth/facebook">
        <i></i>
      </a>
    </div>

    <div>
      <span>or</span>
      <div></div>
    </div>
  </div>
</>;
