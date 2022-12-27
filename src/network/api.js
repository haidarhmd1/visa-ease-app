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

export const addVisaApplication = data =>
  fetch('http://localhost:8000/wp-json/visastar/v1/visa_application', {
    method: 'POST',
    headers,
    body: JSON.stringify(data),
  });
