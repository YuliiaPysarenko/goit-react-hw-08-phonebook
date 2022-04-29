import { Li, Button } from './ContactListStyles';
import { useDeleteContactMutation } from 'redux/items/contactsSlice';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

const ContactList = ({ filter, items }) => {
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <ul>
      {filteredItems.map(({ id, name, phone }) => (
        <Li key={id}>
          <ContactItem key={id} name={name} phone={phone} />
          <Button onClick={() => deleteContact(id)} disabled={isDeleting}>
            Delete
            {isDeleting && <Oval color="#00BFFF" height={10} width={10} />}
          </Button>
        </Li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
