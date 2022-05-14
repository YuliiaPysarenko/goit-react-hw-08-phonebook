import { useSelector } from 'react-redux';
import { contactsSelectors } from '../../redux/contacts';
import ContactItem from '../ContactItem/ContactItem';
import { FallingLines } from 'react-loader-spinner';
import { Table} from 'react-bootstrap';

const ContactList = () => {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const isLoadingContacts = useSelector(contactsSelectors.getLoading);

  return (
    <>
      {contacts ?
        <Table hover>
          <thead>
            <tr>
              <th style={{width:'40%'}}>Name</th>
              <th style={{width:'40%'}}>Phone Number</th>
              <th style={{width:'20%'}}></th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <ContactItem contact={contact} key={contact.id} />
            ))}
          </tbody>
        </Table> : null}
      {isLoadingContacts && (
      <div style={{textAlign: 'center'}}><FallingLines width="110" color="#0d6efd" /></div>
      )}
    </>
  );
};

export default ContactList;
