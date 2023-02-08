import contactReduser from './slice/contactSlice';
import filterReduser from './slice/filterNameSlice';
import regisretSlice from './slice/regisretSlice';
import { combineReducers } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  contacts: contactReduser,
  filter: filterReduser,
  isRegister: regisretSlice,
});
