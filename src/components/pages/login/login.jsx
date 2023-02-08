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
import { Link, useLocation } from 'react-router-dom';

export const Login = () => {
  const location = useLocation();
  const handelSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <ButtonBack>Back</ButtonBack>
      </Link>

      <Span>Please enter your login information...</Span>
      <Form>
        <>
          <Field>
            <Input type="text" name="login" placeholder="Username or email" />
            <I></I>
          </Field>
          <Field>
            <Input type="password" name="password" placeholder="Password" />
            <I></I>
          </Field>
          <SubmitButton>
            <Button onClick={handelSubmit} type="submit" name="submit">
              <i></i>
            </Button>
          </SubmitButton>
        </>
      </Form>
    </>
  );
};
