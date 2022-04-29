import { useSelector, useDispatch } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { useFetchContactsQuery, useCreateContactMutation } from 'redux/items/contactsSlice';
import { updateFilter } from 'redux/filter/slice';
import { Oval } from 'react-loader-spinner';
import { StyledBlock, H1, H2 } from './AppStyles';

import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

export default function App() {
  const { data: contacts, isLoading: isLoadingFetching } = useFetchContactsQuery();
  const [createContact, { isLoading: isLoadingCreating, isSuccess }] = useCreateContactMutation();

  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const formSubmitHandler = async data => {
    const existedContact = contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

    if (!existedContact) {
      createContact(data);
      toast.success('Contact is successfully added.');
      // toast.promise(
      //   createContact(data),
      //    {
      //     //  loading: 'Saving...',
      //      success: toast.success('Contact is successfully added.'),
      //      error: toast.error('Looks like something went wrong.'),
      //    }
      //  );
    } else {
      toast.error(`User ${data.name} already exists`)
    }
  };

  const handleChange = e => {
    const value = e.target.value;
    dispatch(updateFilter(value));
  };

  return (
    <StyledBlock>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={formSubmitHandler} />

      <H2>Contacts</H2>
      <Filter handleChange={handleChange} />
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
      {isLoadingFetching && <Oval color="#00BFFF" height={80} width={80} />}
      {contacts && <ContactList filter={filter} items={contacts} />}
    </StyledBlock>
  );
}
