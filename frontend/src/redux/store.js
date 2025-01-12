import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import disasterReducer from './disasterSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    disasters: disasterReducer,
  },
});

export default store;
