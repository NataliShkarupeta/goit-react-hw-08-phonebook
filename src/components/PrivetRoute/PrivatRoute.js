import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';
import { selectIsRegister } from 'redux/selector';
import { IfNotRegister } from 'components/ifNotRegister/ifNotRegister';

const PrivatRoute = ({ children }) => {
  const isRegister = useSelector(selectIsRegister);
  return isRegister ? children : <IfNotRegister />;
};

export default PrivatRoute;
