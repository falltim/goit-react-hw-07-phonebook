import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './contacts-slice';
import { createReducer } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit';

// import contactsReducer from './contacts-reducer';

export const changeFilter = createAction('contacts/filter');

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

export const store = configureStore({
  reducer: {
    [contactsApi.reducerPath]: contactsApi.reducer,
    filter: filter,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});
