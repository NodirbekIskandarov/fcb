import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slices'; // import your root reducer

const store = configureStore({
  reducer: rootReducer,
});

export default store;
