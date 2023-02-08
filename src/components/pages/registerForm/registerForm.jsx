import { Form, Field, I, Span, Input } from '../login/login.styled';
import { ButtonBack, ButtonCreate } from './registerForm.styled';
import { Link, useLocation } from 'react-router-dom';

export const RegisterForm = () => {
  const location = useLocation();

  const handelSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <ButtonBack>Back</ButtonBack>
      </Link>

      <Span>Please register</Span>
      <Form>
        <Field>
          <Input type="email" name="email" placeholder="Email" />
          <I></I>
        </Field>

        <Field>
          <Input type="password" name="password" placeholder="Password" />
          <I></I>
        </Field>
        <Field>
          <Input
            type="password"
            name="password_confirmation"
            placeholder="Repeat password"
          />
          <I></I>
        </Field>
        <div>
          <ButtonCreate onClick={handelSubmit} type="submit" name="submit">
            <i></i>Create account
          </ButtonCreate>
        </div>
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
