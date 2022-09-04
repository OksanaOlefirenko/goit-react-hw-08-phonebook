import { createSlice } from '@reduxjs/toolkit';
import authOperations from './authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.error = null;
      state.loading = true;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [authOperations.logIn.pending](state) {
      state.error = null;
      state.loading = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.loading = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [authOperations.logOut.pending](state) {
      state.error = null;
      state.loading = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.loading = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
      state.loading = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
      state.loading = true;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.loading = false;
      state.isRefreshing = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isRefreshing = false;
      state.loading = false;
      state.error = state.payload;
    },
  },
});

export default authSlice.reducer;
