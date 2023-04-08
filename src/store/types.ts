export type ActionType = { type: 'INCREMENT' } | { type: 'DECREMENT' };

export type State = {
  counter: number;
};

export const increment = (): ActionType => {
  return { type: 'INCREMENT' };
};

export const decrement = (): ActionType => {
  return { type: 'DECREMENT' };
};
