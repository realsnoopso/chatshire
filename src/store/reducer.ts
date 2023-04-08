// src/store/reducer.ts

import { Reducer } from 'redux';
import { ActionType, State } from './login';

const initialState: State = {
  isLogin: false,
  account: '',
};

const reducer: Reducer<State, ActionType> = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return { ...state };
    default:
      return state;
  }
};

export default reducer;
