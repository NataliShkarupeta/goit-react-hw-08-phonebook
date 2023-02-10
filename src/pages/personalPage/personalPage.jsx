import { InputName } from 'components/Input/InputName';
import { Title } from 'components/NameBlock/NameBlock';
import { Wrap } from 'components/DefaultStylse.styled';
import { InputFind } from 'components/Input/InputFind';
import { Contacts } from 'components/Contacts/Contacts';
import {
  selectorIsLoading,
  selectorError,
  selectorFilterArreyContacts,
  selectorContact,
} from 'redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { ButtonBack } from '../registerForm/registerForm.styled';
import { useLocation, Link, Outlet } from 'react-router-dom';
import { ContactsBlock, WrapBlock, Background } from './personalPage.styled';
import { WrapPage } from 'components/ifNotRegister/ifNotRegister.styled';
import { Text } from 'components/FrontPage/FrontPage.styled';

import { fetchContacts } from 'redux/operations/operationsContacts';

 const PersonalPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectorIsLoading);
  const error = useSelector(selectorError);
  const cangeArreyContacts = useSelector(selectorFilterArreyContacts);
  const location = useLocation();
  const contacts = useSelector(selectorContact);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <Background>
      <>{error && <p>{error}</p>}</>
      <WrapPage>
        <Link to={location.state?.from ?? '/'}>
          <ButtonBack>Back</ButtonBack>
        </Link>
        <Outlet />
        <ContactsBlock>
          <WrapBlock>
            <Title text=" Add contact" />
            <Wrap>
              <InputName />
            </Wrap>
            <Title text="Find contact" />
            <InputFind />
          </WrapBlock>
          {contacts.length === 0 ? (
            <Text> You don't have contacts yet. </Text>
          ) : (
            <div>
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <>
                  <Title text="Your contacts: " />
                  <Contacts contact={cangeArreyContacts} />
                </>
              )}
            </div>
          )}
        </ContactsBlock>
      </WrapPage>
    </Background>
  );
};

export default PersonalPage;