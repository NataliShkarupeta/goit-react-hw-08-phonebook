import contactReduser from './slice/contactSlice';
import filterReduser from './slice/filterNameSlice';
import usersSlice from './slice/usersSlice';
import { combineReducers } from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';


const persistConfig = {
  key: 'user',
  storage,
  whitelist:['token'],
};



export const reducer = combineReducers({
  contacts: contactReduser,
  filter: filterReduser,
  // user: usersSlice,
  user: persistReducer(persistConfig, usersSlice),
});
