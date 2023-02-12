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
import { useDispatch, useSelector } from 'react-redux';
import { logIn } from 'redux/user/userOperations';
import { WrapPage } from 'components/DefaultStylse.styled';
import { FaArrowRight, FaEnvelope, FaFingerprint } from 'react-icons/fa';
import Notiflix from 'notiflix';
import { selectError } from 'redux/user/userSelectors';

const Login = () => {
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
   const error = useSelector(selectError);

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
    if (error) Notiflix.Notify.failure(`Login failed, please try again`);
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
              <I>
                <FaEnvelope />
              </I>
            </Field>
            <Field>
              <Input
                onChange={takeInputValue}
                type="password"
                name="password"
                placeholder="Password"
                value={password}
              />
              <I>
                <FaFingerprint />
              </I>
            </Field>
            <Link>
              <SubmitButton>
                <Button onClick={handelSubmit} type="submit" name="submit">
                  <i>
                    <FaArrowRight />
                  </i>
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


// import {
//   Form,
//   Field,
//   SubmitButton,
//   I,
//   Span,
//   Button,
//   Input,
// } from './login.styled';
// import { ButtonBack } from '../registerForm/registerForm.styled';
// import { Link, Outlet } from 'react-router-dom';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { logIn } from 'redux/user/userOperations';
// import { WrapPage } from 'components/DefaultStylse.styled';
// import Notiflix from 'notiflix';
// import { FaArrowRight, FaEnvelope, FaFingerprint } from 'react-icons/fa';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const dispatch = useDispatch();

//   const takeInputValue = ({ target: { name, value } }) => {
//     if (name === 'email') setEmail(value);
//     if (name === 'password') setPassword(value);
//   };

//   const handelSubmit = e => {
//     e.preventDefault();
//     const user = {
//       email,
//       password,
//     };
//     dispatch(logIn(user))
//       .unwrap()
//       .catch(() => Notiflix.Notify.failure('Log in failed, please try again.'));

//     setEmail('');
//     setPassword('');
//   };

//   return (
//     <>
//       <WrapPage>
//         <Outlet />
//         <Link to="/">
//           <ButtonBack>Back</ButtonBack>
//         </Link>
//         <Span>Please enter your login information...</Span>
//         <Form onSubmit={handelSubmit}>
//           <>
//             <Field>
//               <Input
//                 onChange={takeInputValue}
//                 type="text"
//                 name="email"
//                 placeholder="Username or email"
//                 value={email}
//               />
//               <I>
//                 <FaEnvelope />
//               </I>
//             </Field>
//             <Field>
//               <Input
//                 onChange={takeInputValue}
//                 type="password"
//                 name="password"
//                 placeholder="Password"
//                 value={password}
//               />
//               <I>
//                 <FaFingerprint />
//               </I>
//             </Field>
//             <Link>
//               <SubmitButton>
//                 <Button onClick={handelSubmit} type="submit" name="submit">
//                   <i>
//                     <FaArrowRight />
//                   </i>
//                 </Button>
//               </SubmitButton>
//             </Link>
//           </>
//         </Form>
//       </WrapPage>
//     </>
//   );
// };

// export default Login;