import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { register,logIn ,logOut,fetchRefreshUser} from 'redux/operations/operationUser';


const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
const setPending = state => {
  state.isLoading = true;
};
const extraActions = [register, logIn, logOut, fetchRefreshUser];
const createActions =(type)=>{return extraActions.map(action => action[type])};

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
        console.log(state.user);
      })

      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.isLoading = false;
        state.token = null;
      })
      .addCase(fetchRefreshUser.fulfilled,(state,{payload})=>{
        state.user= {...payload}
      })
      .addMatcher(isAnyOf(...createActions('pending')), setPending)
      .addMatcher(isAnyOf(...createActions('rejected')), setError);
  },
});




export default usersSlice.reducer;
