import styled from "styled-components";
import { nanoid } from "nanoid";

import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
import Filter from "./components/Filter";
import { useSelector, useDispatch } from "react-redux";
import { createContact, removeContact } from "./redux/items/slice";
import { updateFilter } from "./redux/filter/slice";

const StyledBlock = styled.div`
  margin: 20px;
`;
const H1 = styled.h1`
  text-transform: uppercase;
`;
const H2 = styled.h2`
  font-weight: 500;
`;

export default function App() {

  const contacts = useSelector((state) => state.items);
  const filter = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const formSubmitHandler = (data) => {
    const existedContact = contacts.find((contact) => contact.name.toLowerCase() === data.name.toLowerCase());

    if (!existedContact) {
        dispatch(createContact({...data, id: nanoid()}));
    } else {
      alert(`${data.name} is already in contacts`);
    }
  }

  const handleChange = e => {
    const value = e.target.value;
    dispatch(updateFilter(value));
  }

  const findTheButtonToRemove = e => {
    const buttonId = e.target.dataset.id;
    dispatch(removeContact(buttonId));
  }

  return (
    <StyledBlock>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={formSubmitHandler} />

      <H2>Contacts</H2>
      <Filter handleChange={handleChange} />
      <ContactList
        filter={filter}
        items={contacts}
        removeContact={findTheButtonToRemove}
      />
    </StyledBlock>
  );
}
