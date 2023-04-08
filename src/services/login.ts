export const saveLocalStorage = (key: string, value: string) =>
  localStorage.setItem('account', value);

export const getLocalStorage = (key: string) => localStorage.getItem('account');

export const removeLocalStorage = (key: string) =>
  localStorage.removeItem('account');
