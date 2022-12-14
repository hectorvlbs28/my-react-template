import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import TemplateSlices from './Slices/TemplateSlices';
import UserSlices from './Slices/UserSlices';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['TemplateSlices, UserSlices'],
};

const rootReducer = combineReducers({
  Template: TemplateSlices,
  User: UserSlices,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const Store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
