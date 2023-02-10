import { Form, Field, I, Span, Input } from '../login/login.styled';
import { ButtonBack, ButtonBlue } from './registerForm.styled';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { WrapPage } from 'components/ifNotRegister/ifNotRegister.styled';
import { register } from 'redux/operations/operationUser';
import { useDispatch } from 'react-redux';
import { FaFemale, FaEnvelope, FaFingerprint } from 'react-icons/fa';
import Notiflix from 'notiflix';


const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const takeInputValue = ({ target: { name, value } }) => {
    if (name === 'name') setName(value);
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };

  const fullFields = name !== '' && email !== '' && password !== '';

  const handelSubmit = e => {
    e.preventDefault();
    if (!fullFields) {
      return Notiflix.Notify.info('All fields must be filled!');
    }
    const user = {
      name,
      email,
      password,
    };
    dispatch(register(user))
      .unwrap()
      .then(() => navigate('/contacts'))
      .catch(() =>
        Notiflix.Notify.failure('Registration failed, please try again.')
      );
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
        <Form>
          <Field>
            <Input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={takeInputValue}
              required
            />
            <I>
              <FaFemale />
            </I>
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

            <I>
              <FaEnvelope />
            </I>
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
            <I><FaFingerprint/></I>
          </Field>
          <div>
            <ButtonBlue onClick={handelSubmit} type="submit" name="submit">
              <i></i>Create account
            </ButtonBlue>
          </div>
        </Form>
      </WrapPage>
    </>
  );
};


export default RegisterForm;
