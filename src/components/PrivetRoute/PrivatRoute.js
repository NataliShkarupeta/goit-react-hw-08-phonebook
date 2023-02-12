import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectIsRegister } from 'redux/user/userSelectors';


const PrivatRoute = () => {
  const isRegister = useSelector(selectIsRegister);
  if (!isRegister) return <Navigate to={'/'} />;
  return <Outlet/>;
};

export default PrivatRoute;

