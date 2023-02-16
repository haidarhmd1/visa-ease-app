import axios from 'axios';

export const PATH = 'http://localhost:3000/';

const headers = {
  'Content-Type': 'application/json',
};

export const addUserProfile = data =>
  axios.post('http://localhost:3000/v1/user/addUser', { data }, headers);
