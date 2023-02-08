import { Form, Field, I, Span, Input } from '../login/login.styled';
import { ButtonBack, ButtonBlue } from './registerForm.styled';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
// import { nanoid } from 'nanoid';
import { register } from 'redux/operations/operationUser';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { selectUser } from 'redux/selector';

export const RegisterForm = () => {
//   const userInfo = useSelector(selectUser);
  const dispatch = useDispatch();
  const location = useLocation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handelSubmit = e => {
    e.preventDefault();
    // const match = users.find(
    //   user =>
    //     user.name === name && user.email === email && user.password === password
    // );
    // if (match) {
    //   alert(`${name} already in contacts!!!`);
    // } else {
      const user = {
        name,
        email,
        password,
        // id: nanoid(),
      };
      dispatch(register(user));
      setEmail('');
      setName('');
      setPassword('');
    // }
    console.log(user);
  };

  const takeInputValue = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
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
