import { Middleware } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const localStorageMiddleware: Middleware<{}, RootState> = store => next => action => {
  const result = next(action);
  const state = store.getState().companyProccessReducer;
  localStorage.setItem('companyFormProcess', JSON.stringify(state));
  return result;
};
