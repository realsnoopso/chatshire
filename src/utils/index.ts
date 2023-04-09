export const saveLocalStorage = <T>(key: string, value: T) => {
  const prevStr = getLocalStorage(key);
  const prevValue = prevStr ? JSON.parse(prevStr) : null;
  const newValue = prevValue ? [...prevValue, value] : [value];
  localStorage.setItem(key, JSON.stringify(newValue));
};

export const getLocalStorage = (key: string) => localStorage.getItem(key);

export const removeLocalStorage = (key: string) => localStorage.removeItem(key);

export const copyToClipboard = (dataToCopy: string) => {
  navigator.clipboard
    .writeText(dataToCopy)
    .then(() => {})
    .catch((error) => {
      console.error('Failed to copy to clipboard: ', error);
    });
};
