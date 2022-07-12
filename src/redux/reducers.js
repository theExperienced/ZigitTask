import { combineReducers } from '@reduxjs/toolkit';

import loginReducer from './slices/loginSlice';
import userReducer from './slices/userSlice';

const rootReducer = combineReducers({
  login: loginReducer,
  user: userReducer,
});

export default rootReducer;
