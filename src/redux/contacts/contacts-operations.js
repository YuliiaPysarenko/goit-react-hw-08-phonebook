import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsApi from './contacts-api';

// GET @ /contacts
const fetchContacts = createAsyncThunk(
  'contacts/getContacts',
  async (token, thunkAPI) => {
    const response = await contactsApi.getContacts();
    return response;
  }
);

// POST @ /contacts
const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    const contact = {
      name,
      number,
    };
    try {
      const response = await contactsApi.addContact(contact);
      return response;
    } catch (error) {
    }
  }
);

// DELETE @ /contacts/:id
const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, { rejectWithValue, getState }) => {
    try {
      const status = await contactsApi.deleteContact(contactId);

      if (status === 200) {
        const items = getState().contacts.items;
        const filteredItems = items.filter(item => item.id !== contactId);

        return filteredItems;
      } else {
        rejectWithValue("Something went wrong");
      }
      
    } catch (error) {
      console.log(error);
    }
  }
);

const contactsOperations = {
  fetchContacts,
  addContact,
  deleteContact,
}

export default contactsOperations;