import { configureStore } from '@reduxjs/toolkit';

import projectSlice from './redux/projectSlice';

export const store = configureStore({
  reducer: {
    amazite: projectSlice,
  },
});
