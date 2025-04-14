// store/rootReducer.ts
import { combineReducers } from '@reduxjs/toolkit';
import menuPage from '../services/MenuPage/MenuPageReducers';

const rootReducer = combineReducers({
  menuPage,
  // Add more reducers here
});

export default rootReducer;
