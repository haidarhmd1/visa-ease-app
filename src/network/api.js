import axios from 'axios';

export const BASE_URL = 'http://localhost:3000';

const headers = {
  'Content-Type': 'application/json',
};

// export const registerUserProfile = async data => {
//   try {
//     return await axios.post(`${BASE_URL}/v1/user/users`, data, {
//       headers,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

export const registerUserProfile = data => {
  return axios
    .post(`${BASE_URL}/v1/user/users`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};

export const completeUserProfile = data => {
  return axios
    .patch(`${BASE_URL}/v1/user/users`, data, { headers })
    .then(response => response)
    .catch(error => error.response);
};
