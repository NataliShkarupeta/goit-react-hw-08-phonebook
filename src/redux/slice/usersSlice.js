import { createSlice } from '@reduxjs/toolkit';
import { register,logIn ,logOut} from 'redux/operations/operationUser';

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    isRegister: false,
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isRegister = true;
          state.isLoading = false;
          state.error = null;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logIn.pending, state => {
        state.isLoading = true;
      })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isRegister = true;
          state.isLoading = false;
          state.error = null;
      })
      .addCase(logIn.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.isRegister = false;
        state.token = null
        })
  },
});




export default usersSlice.reducer;
