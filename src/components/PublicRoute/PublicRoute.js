import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsRegister } from 'redux/selector';

const PublicRoute = ({ children }) => {
  const isRegister = useSelector(selectIsRegister);

  if (isRegister) return <Navigate to="/" />;
  return children;
};

export default PublicRoute;
