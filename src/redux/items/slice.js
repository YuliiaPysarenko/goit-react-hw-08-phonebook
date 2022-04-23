import { createSlice } from '@reduxjs/toolkit';

export const itemsSlice = createSlice({
  name: 'items',
  initialState:
    JSON.parse(window.localStorage.getItem('react-yp-hw4-contacts')) ?? [],
  reducers: {
    createContact(state = itemsSlice.initialState, action) {
      const newArray = [...state, action.payload];
      localStorage.setItem('react-yp-hw4-contacts', JSON.stringify(newArray));
      return newArray;
    },
    removeContact(state = itemsSlice.initialState, action) {
      const findContact = state.filter(
        contact => contact.id !== action.payload
      );
      localStorage.setItem(
        'react-yp-hw4-contacts',
        JSON.stringify(findContact)
      );
      return findContact;
    },
  },
});

export const { createContact, removeContact } = itemsSlice.actions;