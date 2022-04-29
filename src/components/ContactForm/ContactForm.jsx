import { useState } from 'react';
import { nanoid } from 'nanoid';

import { StyledForm, Label, Input, Button } from './ContactFormStyles';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const nameInputId = nanoid();
  const numberInputId = nanoid();

  function handleChange(e) {
    const { name, value } = e.target;

    switch (name) {
      case 'username':
        setName(value);
        break;

      case 'phone':
        setNumber(value);
        break;

      default:
        return;
    }
  }

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, phone });
    reset();
  };

  function reset() {
    setName('');
    setNumber('');
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="username"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          id={nameInputId}
          onChange={handleChange}
          required
        />
      </Label>

      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="phone"
          value={phone}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          id={numberInputId}
          onChange={handleChange}
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </StyledForm>
  );
}
