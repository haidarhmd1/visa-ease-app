import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  email: null,
};

const authSlice = createSlice({
  name: 'userAuth',
  initialState,
  reducers: {
    setSignIn: (state, action) => {
      state.email = action.payload.email;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    setSignOut: state => {
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setSignIn, setSignOut } = authSlice.actions;

export const selectIsLoggedIn = state => state.userAuth.isLoggedIn;
export const selectEmail = state => state.userAuth.email;

export default authSlice.reducer;
