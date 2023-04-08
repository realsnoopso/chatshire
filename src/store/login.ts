export type ActionType = { type: 'SET_ACCOUNT' };

export type State = {
  isLogin: boolean;
  account: string;
};

export const account = (): ActionType => {
  return { type: 'SET_ACCOUNT' };
};
