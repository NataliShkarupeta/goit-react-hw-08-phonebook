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
import { useSelector, useDispatch} from 'react-redux';
import { useEffect } from 'react';


import { fetchContacts } from 'redux/operations';

export const PersonalContacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const cangeArreyContacts = useSelector(selectorFilterArreyContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
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
