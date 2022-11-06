import { getRequest } from './api.helper';

export const PATH =
  'http://1bf8-2a02-3032-d-f3a9-982b-b4c3-9958-8fb4.ngrok.io/';
export const API_PATH = `${PATH}wp-json/wp/v2`;

const headers = {
  'Content-Type': 'application/json',
};

export const getVisaCountries = () =>
  getRequest(`${API_PATH}/visacountries`, headers);

// export const addVisaApplicationFromUser = data => {
//   fetch(`${API_PATH}/visaApplication`, {
//     headers,
//     method: 'POST',
//     body: JSON.parse(data),
//   })
//     .then(response => {
//       if (response.ok) {
//         return response.body();
//       }
//     })
//     .catch(error => {
//       console.warn(error);
//     });
// };
