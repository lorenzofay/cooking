import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import sessionReducer from './reducers/session';

const store = configureStore({
  reducer: { session: sessionReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;
