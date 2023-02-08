import { Form, Field, I, Span, Input } from '../login/login.styled';

export const RegisterForm = () => {
  const handelSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <div>
          <a  href="/auth/github">
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
            <button onClick={handelSubmit} type="submit" name="submit">
              <i></i>Create account
            </button>
          </div>
        
      </Form>
    </>
  );
};
