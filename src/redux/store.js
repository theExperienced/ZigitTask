import { createStore, applyMiddleware, configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';

export default configureStore({
  reducer: rootReducer,
});
