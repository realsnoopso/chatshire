import axios from 'axios';

interface BodyType {
  [key: string]: unknown;
}

export const call = (method: string, url: string, data?: BodyType) => {
  return axios({
    method,
    url,
    data,
  });
};
