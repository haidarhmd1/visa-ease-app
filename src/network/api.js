import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';

const headers = {
  'Content-Type': 'application/json',
};

export const login = data => {
  return axios
    .post(`${BASE_URL}/v1/user/login`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const registerUserProfile = data => {
  return axios
    .post(`${BASE_URL}/v1/user/users`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const completeUserProfile = (data, id) => {
  return axios
    .patch(`${BASE_URL}/v1/user/users/${id}`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const getUser = id => {
  return axios
    .get(`${BASE_URL}/v1/user/users/${id}`, { headers })
    .then(response => response)
    .catch(error => error.response);
};
