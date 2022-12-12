import { getRequest } from './api.helper';

export const PATH = 'http://localhost:8000/';
export const API_PATH = `${PATH}wp-json/wp/v2`;

const headers = {
  'Content-Type': 'application/json',
};

export const getVisaCountries = () =>
  getRequest(`${API_PATH}/visacountries`, headers);

export const getVisaCountry = id =>
  getRequest(`${API_PATH}/visacountries/${id}`, headers);

export const addVisaApplicationFromUser = data => {
  fetch(`${API_PATH}/visaApplication`, {
    headers,
    method: 'POST',
    body: JSON.parse(data),
  })
    .then(response => {
      if (response.ok) response.body();
    })
    .catch(error => {
      console.warn(error);
    });
};
