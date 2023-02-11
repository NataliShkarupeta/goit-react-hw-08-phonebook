import contactReduser from './contacts/contactsSlice';
import filterReduser from './filterContact/filterContactSlice';
import usersSlice from './user/userSlice';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

export const reducer = combineReducers({
  contacts: contactReduser,
  filter: filterReduser,
  user: persistReducer(persistConfig, usersSlice),
});
