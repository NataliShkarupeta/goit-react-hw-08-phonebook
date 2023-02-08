import { InputName } from 'components/Input/InputName';
import { Title } from 'components/NameBlock/NameBlock';
import { Wrap } from 'components/DefaultStylse.styled';
import { InputFind } from 'components/Input/InputFind';
import { Contacts } from 'components/Contacts/Contacts';
import {
  selectorIsLoading,
  selectorError,
  selectorFilterArreyContacts,
} from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ButtonBack } from '../registerForm/registerForm.styled';
import { useLocation,Link } from 'react-router-dom';

import { fetchContacts } from 'redux/operations';

export const PersonalContacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const cangeArreyContacts = useSelector(selectorFilterArreyContacts);
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <ButtonBack>Back</ButtonBack>
      </Link>
      <Title text="Phonebook" />
      <Wrap>
        <InputName />
      </Wrap>
      <Title text="Contscts" />
      <InputFind />
      <Contacts contact={cangeArreyContacts} />
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
    </>
  );
};
