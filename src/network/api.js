import { getRequest } from './api.helper';

export const PATH = 'http://localhost:3000/';

const headers = {
  'Content-Type': 'application/json',
};

export const addUserProfile = data => {
  return fetch('http://localhost:3000/v1/user/addUser', {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
};
