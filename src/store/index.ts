// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer'; // combine your slices here

export const store = configureStore({
  reducer: rootReducer,
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;