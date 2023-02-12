import { useSelector } from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';
import { selectIsRegister } from 'redux/user/userSelectors';
import {  useLocation } from 'react-router-dom';


const PublicRoute = () => {
  const { state } = useLocation();
  const isRegister = useSelector(selectIsRegister);
  if (isRegister) return <Navigate to={state ? state : '/'} />;
  return <Outlet />;
};

export default PublicRoute;
// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsRegister } from 'redux/user/userSelectors';
// import { useLocation } from 'react-router-dom';

// const PublicRoute = ({ children }) => {
//   const { state } = useLocation();
//   const isRegister = useSelector(selectIsRegister);
//   if (isRegister) return <Navigate to={state ? state : '/'} />;

//   return children;
// };

// export default PublicRoute;
