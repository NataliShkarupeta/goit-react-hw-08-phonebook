import { Item,Ul } from './Contacts.styled';
import { Button } from 'components/Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/operations/operationsContacts';

export const Contacts = ({ contact }) => {
  const dispatch = useDispatch();

  if (!contact) {
    return;
  }

  return (
    <Ul>
      {contact.map(({ name, number, id }) => (
        <Item key={id}>
          {name} :{number}{' '}
          <Button
            text="Delete"
            onClicked={() => dispatch(deleteContacts(id))}
          />
        </Item>
      ))}
      
    </Ul>
  );
};

Contacts.propTypes = {
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};
