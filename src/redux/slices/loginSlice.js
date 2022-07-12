import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import { batch } from 'react-redux';

import { setTokenAndDetails } from './userSlice';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    mail: { value: '', isValid: false },
    pass: { value: '', isValid: false },
  },
  reducers: {
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setMail: (state, action) => {
      state.mail.value = action.payload;
    },
    setPass: (state, action) => {
      state.pass.value = action.payload;
    },
    setValidation: (state, action) => {
      const { field, isValid } = action.payload;

      state[field].isValid = isValid;
    },
  },
});

export const loginAsync = () => async (dispatch, getState) => {
  try {
    const state = getState();
    const { mail, pass } = state.login;

    const res = await axios.post(process.env.REACT_APP_LOGIN_API, {
      email: mail,
      password: pass,
    });
    if (res.status === 200 || res.status === 201) {
      const tokenAndDetails = res.data[0];

      batch(() => {
        dispatch(setLoggedIn(true));
        dispatch(setTokenAndDetails({ ...tokenAndDetails }));
      });
    }
  } catch (error) {
    console.log(
      '🚀 ~ file: loginSlice.js ~ line 50 ~ loginAsync ~ error',
      error
    );
  }
};

export const { setLoggedIn, setMail, setPass, setValidation } =
  loginSlice.actions;

export default loginSlice.reducer;
