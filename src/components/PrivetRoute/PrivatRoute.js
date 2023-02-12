import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsRegister } from 'redux/user/userSelectors';


const PrivatRoute = () => {
  const isRegister = useSelector(selectIsRegister);
  if (!isRegister) return <Navigate to={'/'} />;
  return <Outlet/>;
};

export default PrivatRoute;


// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
// import { selectIsRegister } from 'redux/user/userSelectors';

// const PrivatRoute = ({ children }) => {
//   const isRegister = useSelector(selectIsRegister);
//   if (!isRegister) return <Navigate to={'/'} />;
//   return children;
// };

// export default PrivatRoute;