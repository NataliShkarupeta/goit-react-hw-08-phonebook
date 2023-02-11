import { createSelector } from '@reduxjs/toolkit';
import { selectorContact } from 'redux/contacts/contactsSelectors';

export const selectorFilter = state => state.filter.filter;

export const selectorFilterArreyContacts = createSelector(
  selectorFilter,
  selectorContact,
  (filter, contact) => {
    if (filter.length > 0) {
      return contact.filter(cont =>
        cont.name.toLowerCase().includes(filter.toLowerCase().trim())
      );
    } else {
      return contact;
    }
  }
);
