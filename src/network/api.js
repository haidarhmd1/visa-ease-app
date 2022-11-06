import { getRequest } from './api.helper';

export const PATH =
  'http://1bf8-2a02-3032-d-f3a9-982b-b4c3-9958-8fb4.ngrok.io/';
export const API_PATH = `${PATH}wp-json/wp/v2`;

const headers = {
  'Content-Type': 'application/json',
};

export const getVisaCountries = () =>
  getRequest(`${API_PATH}/visacountries`, headers);
